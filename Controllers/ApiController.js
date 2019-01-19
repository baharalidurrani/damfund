exports.get = (req, res) => {
    const scraper = require('./scraper');
    const scrapPromise = scraper.crawl();

    Promise.resolve(scrapPromise).then((data) => {
        console.log("Total entries: " + data.dates.length);
        console.log("Total Funds: " + data.funds[data.funds.length - 1]);

        res.json(data);
    }).catch((e) => {
        console.log('\n***** Problem with scrapper...\n');
        console.log(e);
        res.json({
            dates: 'problem with scrapper',
            funds: 'problem with scrapper'
        });
    });
};