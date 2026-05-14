// const { defineConfig } = require("cypress");
// const xlsx = require("xlsx");

// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",

//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: false,
//     html: true,
//     json: true,
//     charts: true,
//   },

//   video: true,
//   screenshotsFolder: "cypress/screenshots",
//   videosFolder: "cypress/videos",

//   e2e: {
//     baseUrl: "https://192.168.10.253:4941",

//     setupNodeEvents(on, config) {
//       require("cypress-mochawesome-reporter/plugin")(on);

//       on("task", {
//         readExcel({ filePath, sheetName }) {
//           const workbook = xlsx.readFile(filePath);
//           const worksheet = workbook.Sheets[sheetName];
//           return xlsx.utils.sheet_to_json(worksheet);
//         },
//       });

//       return config;
//     },
//   },
// });

//Modeified
// const { defineConfig } = require("cypress");
// const xlsx = require("xlsx");
// const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");

// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: true,
//     html: true,
//     json: true,
//     charts: true,
//   },

//   video: false,
//   screenshotsFolder: "cypress/screenshots",
//   videosFolder: "cypress/videos",

//   chromeWebSecurity: false,
//   defaultCommandTimeout: 10000,
//   pageLoadTimeout: 60000,
//   experimentalModifyObstructiveThirdPartyCode: true,

//   e2e: {
//     baseUrl: "https://192.168.10.253:4941",
//     screenshotOnRunFailure: true,

//     setupNodeEvents(on, config) {
//       installLogsPrinter(on, {
//         printLogsToConsole: "always",
//         includeSuccessfulHookLogs: true,
//       });

//       require("cypress-mochawesome-reporter/plugin")(on);

//       on("task", {
//         log(message) {
//           console.log(message);
//           return null;
//         },
//         readExcel({ filePath, sheetName }) {
//           const workbook = xlsx.readFile(filePath);
//           const worksheet = workbook.Sheets[sheetName];
//           return xlsx.utils.sheet_to_json(worksheet);
//         },
//       });

//       on("before:browser:launch", (browser = {}, launchOptions) => {
//         if (browser.family === "chromium") {
//           launchOptions.args.push("--ignore-certificate-errors");
//           launchOptions.args.push("--allow-insecure-localhost");
//           launchOptions.args.push("--disable-features=IsolateOrigins,site-per-process");
//         } else if (browser.family === "firefox") {
//           launchOptions.args.push("--ignore-certificate-errors");
//         }
//         return launchOptions;
//       });

//       return config;
//     },
//   },
// });

//Modified with Allure along with network tab info

const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig({
  video: false,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  experimentalModifyObstructiveThirdPartyCode: true,

  e2e: {
    screenshotOnRunFailure: true, // Allure auto-captures screenshot on failure

    setupNodeEvents(on, config) {
      installLogsPrinter(on, {
        printLogsToConsole: "always",
        includeSuccessfulHookLogs: true,
      });

      require("@shelex/cypress-allure-plugin/writer")(on, config);

      // clear logs folder before every run
      on("before:run", () => {
        const logsDir = path.join(__dirname, "cypress/logs");
        if (fs.existsSync(logsDir)) {
          fs.readdirSync(logsDir)
            .filter((file) => file !== ".gitkeep")
            .forEach((file) => {
              fs.unlinkSync(path.join(logsDir, file));
            });
          console.log("🧹 cypress/logs cleared");
        } else {
          fs.mkdirSync(logsDir, { recursive: true });
          console.log("📁 cypress/logs created");
        }
      });

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        readExcel({ filePath, sheetName }) {
          const workbook = xlsx.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];
          return xlsx.utils.sheet_to_json(worksheet);
        },
      });

      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium") {
          launchOptions.args.push("--ignore-certificate-errors");
          launchOptions.args.push("--allow-insecure-localhost");
          launchOptions.args.push(
            "--disable-features=IsolateOrigins,site-per-process",
          );
        } else if (browser.family === "firefox") {
          launchOptions.args.push("--ignore-certificate-errors");
        }
        return launchOptions;
      });

      return config;
    },
  },
});
