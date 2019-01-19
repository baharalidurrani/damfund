exports.get = (req, res) => {
    const scraper = require('./scraper');
    scraper.crawl().then((data) => {
        console.log("Total entries: " + data.dates.length);
        console.log("Total Funds: " + data.funds[data.funds.length - 1]);

        res.send("Total entries: " + data.dates.length + ' ' + "Total Funds: " + data.funds[data.funds.length - 1]);

    }).catch((e) => {
        console.log('\n***** Error occured while retriving data from the source...');
        console.log(e);
        console.log('***** Error occured while retriving data from the source...\n');

        res.send('***** Error occured while retriving data from the source...');
    });
};