exports.get = (req, res) => {
    const scraper = require('./scraper');
    const scrapPromise = scraper.crawl();

    Promise.resolve(scrapPromise).then((data) => {
        console.log("Total entries: " + data.dates.length);
        console.log("Total Funds: " + data.funds[data.funds.length - 1]);

        res.json(data);
    });
};