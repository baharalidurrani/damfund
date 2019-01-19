exports.get = (req, res) => {
    const scraper = require('./scraper');
    const scrapPromise = scraper.crawl();

    Promise.resolve(scrapPromise).then((data) => {
        console.log("Total entries: " + data.dates.length);
        console.log("Total Funds: " + data.funds[data.funds.length - 1]);

        res.send("Total entries: " + data.dates.length + ' ' + "Total Funds: " + data.funds[data.funds.length - 1]);
    }).catch((e) => {
        console.log('\n***** Problem with scrapper...\n');
        console.log(e);
        res.send('***** Problem with scrapper...');
    });
};