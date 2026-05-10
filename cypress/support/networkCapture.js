export function startNetworkCapture() {
  Cypress.capturedRequests = [];

  cy.intercept("**", (req) => {
    const skipPatterns = [
      /\.(js|css|png|jpg|jpeg|svg|woff|woff2|ttf|ico|gif|map)(\?.*)?$/i,
      /sockjs-node|hot-update|webpack|chrome-extension|__cypress/,
    ];

    if (skipPatterns.some((p) => p.test(req.url))) {
      req.continue();
      return;
    }

    const entry = {
      method: req.method,
      url: req.url,
      requestHeaders: req.headers,
      requestBody: req.body ?? null,
      timestamp: new Date().toISOString(),
      responseStatus: null,
      responseBody: null,
    };

    req.on("response", (res) => {
      entry.responseStatus = res.statusCode;
      const contentType = res.headers?.["content-type"] || "";

      if (contentType.includes("text/html")) {
        entry.responseBody = "[HTML response skipped]";
        return;
      }

      const body = res.body;
      const bodyStr = typeof body === "string" ? body : JSON.stringify(body);
      entry.responseBody =
        bodyStr.length > 5000
          ? bodyStr.slice(0, 5000) + "\n... [truncated]"
          : body;
    });

    Cypress.capturedRequests.push(entry);
    req.continue();
  }).as("networkCapture");
}

function toCurl(entry) {
  const headers = Object.entries(entry.requestHeaders || {})
    .filter(
      ([k]) =>
        !["host", "content-length", "connection"].includes(k.toLowerCase()),
    )
    .map(([k, v]) => `-H "${k}: ${v}"`)
    .join(" \\\n  ");

  const body = entry.requestBody
    ? `\\\n  -d '${JSON.stringify(entry.requestBody)}'`
    : "";

  return `curl -X ${entry.method} "${entry.url}" \\\n  ${headers} ${body}`.trim();
}

export function getNetworkSummary() {
  const requests = Cypress.capturedRequests || [];
  if (!requests.length) return "No API requests captured.";

  return requests
    .map((entry, i) =>
      [
        `${"━".repeat(60)}`,
        `#${i + 1} | ${entry.method} | Status: ${entry.responseStatus ?? "pending"}`,
        `URL: ${entry.url}`,
        `TIME: ${entry.timestamp}`,
        `${"━".repeat(60)}`,
        `[cURL]`,
        toCurl(entry),
        ``,
        `[Response]`,
        JSON.stringify(entry.responseBody, null, 2),
        ``,
      ].join("\n"),
    )
    .join("\n");
}
