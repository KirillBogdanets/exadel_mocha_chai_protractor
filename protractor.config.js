'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,  
    baseUrl: 'https://exadel.com/',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
        maxInstances: 2,
        version: "66.0.3359.139"
    },
    // multiCapabilities: [{
    //     browserName: 'chrome',
    //     version: "66.0.3359.139"
    // }, {
    //     browserName: 'internet explorer',
    //     'ignoreProtectedModeSettings': true
    // }],

    // specs: ['mocha_e2e/smoke/*.js}'],
    specs: [
        'mocha_e2e/smoke/*.js'
      ],
    // restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();  
    },
    // onComplete: function () {
    //     let options = {
    //         theme: 'bootstrap',
    //         // jsonDir: './output',
    //         jsonFile: './output/cucumber.json',
    //         output: './cucumber_report.html',
    //         reportSuiteAsScenarios: true,
    //         launchReport: true,
    //         metadata: {
    //             "Browser": "Chrome",
    //             "Platform": "Windows 10",
    //             "Parallel": "Scenarios",
    //             "Executed": "Remote"
    //         }
    //     };

    //     reporter.generate(options);
    // },
    // beforeLaunch: function () {
    //     const dir = path.resolve("./output/");
    //     console.log("Cleaning 'output' folder.");
    //     if (!fs.existsSync(dir)) {
    //         fs.mkdirSync(dir);
    //     } else {
    //         fs.readdirSync(dir).forEach(file => fs.unlinkSync(path.resolve(dir + "/" + file)));
    //     }
    // },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'mocha',
    mochaOpts: {
        reporter: 'mochawesome',
        reporterOptions: {
            reportFilename: 'customReportFilename',
            quiet: true,
        },
        timeout: 250000
    }
};