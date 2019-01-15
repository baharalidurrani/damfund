async function crawl() {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
        // dumpio: true,
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('http://scp.gov.pk/popup.aspx');

    await page.screenshot({
        path: 'example.png'
    });

    const dataPromise = {
        dates: [],
        funds: []
    }
    //////////////logic

    await browser.close();
    return dataPromise;
}

module.exports.crawl = crawl;