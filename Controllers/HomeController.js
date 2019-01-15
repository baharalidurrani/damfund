exports.get = (req, res) => {
    const scrapPromise = crawl();
    Promise.resolve(scrapPromise).then((data) => {
        res.send(data);
    });
};

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

    const finalJSON = {
        dates: [],
        funds: []
    }
    //////////////logic

    await browser.close();
    return finalJSON;
}