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

    // specs: [
    //     `mocha_e2e/${yargs.tag||"*/*.js"}`
    // ],
    // restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },
    beforeLaunch: function () {
        const dir = path.resolve("./customReportDir/");
        console.log("Cleaning 'customReportDir' folder.");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        } else {
            fs.readdirSync(dir).forEach(file => {
                if (file.startsWith("customReportName")) {
                    fs.unlinkSync(path.resolve(dir + "/" + file))
                }
            });
        }
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'mocha',
    mochaOpts: {
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            reportDir: 'customReportDir',
            reportName: 'customReportName',
            reportTitle: 'EXADEL_MOCHA_CHAI_PROTRACTOR_FRAMEWORK',
            reportPageTitle: 'EXADEL_MOCHA_CHAI_PROTRACTOR_FRAMEWORK',
            takePassedScreenshot: false,
            clearOldScreenshots: true,
            shortScrFileNames: false,
            jsonReport: false,
            multiReport: false
            // multiReport: true
        },
        timeout: 250000
    }
};