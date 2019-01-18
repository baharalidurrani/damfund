async function crawl() {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
        dumpio: true,
        headless: true
    });

    const page = await browser.newPage();
    await page.goto('http://scp.gov.pk/popup.aspx');

    const dataPromise = await page.evaluate(() => {
        //these are the real-time variables present on the:
        //http://scp.gov.pk/popup.aspx
        //to check,
        //enter the following two commands in the DevTools REPL Console
        //console.log(chart.data.labels);
        //console.log(chart.data.datasets[0].data);
        return Promise.resolve({
            dates: chart.data.labels,
            funds: chart.data.datasets[0].data
        });
    });

    await browser.close();
    return dataPromise;
}

//always use this crawl method with try catch
module.exports.crawl = crawl;