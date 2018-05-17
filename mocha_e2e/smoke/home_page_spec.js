const expect = require('chai').expect;
const world = require('../../po/world');
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;
const parser = require('../../step_definitions/utils/poParser');
const utils = require('../../step_definitions/utils/utils');
const MemoryObject = require('../../step_definitions/memory/memory');
const outline = require("../../outline/outline");
const HomePageBlocks = require("../../test_date/homePage.json");

describe("HOME PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });

    outline(HomePageBlocks, (blocks) => {
        it(`${blocks.Block} should be in vieport with all when user is scrolling down`, async () => {
            await utils.scrollerToTheElement(`HomePage > ${blocks.Block}`);
            await utils.isInViewPort(`HomePage > ${blocks.Block}`);
        });
    });
});
