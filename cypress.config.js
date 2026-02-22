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
const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },

  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  chromeWebSecurity: false, 
  defaultCommandTimeout: 10000, 
  pageLoadTimeout: 60000,
  experimentalModifyObstructiveThirdPartyCode: true, 

  e2e: {
    // baseUrl: "https://192.168.10.253:4941", 
    baseUrl: "http://192.168.10.253:4200/", 

    setupNodeEvents(on, config) {
      // 1. Terminal Report Plugin
      installLogsPrinter(on, {
        printLogsToConsole: 'always', 
        includeSuccessfulHookLogs: true,
      });

      // 2. Mochawesome reporter plugin
      require("cypress-mochawesome-reporter/plugin")(on);

      // 3. COMBINED TASKS (Add 'log' here)
      on("task", {
        // Your custom terminal logger (Log4j style)
        log(message) {
          console.log(message);
          return null;
        },
        // Your existing Excel reader
        readExcel({ filePath, sheetName }) {
          const workbook = xlsx.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];
          return xlsx.utils.sheet_to_json(worksheet);
        },
      });

      // 4. Browser Launch Options
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium") {
          launchOptions.args.push("--ignore-certificate-errors");
          launchOptions.args.push("--allow-insecure-localhost");
          launchOptions.args.push("--disable-features=IsolateOrigins,site-per-process");
        } else if (browser.family === "firefox") {
          launchOptions.args.push("--ignore-certificate-errors");
        }
        return launchOptions;
      });

      return config;
    },
  },
});


