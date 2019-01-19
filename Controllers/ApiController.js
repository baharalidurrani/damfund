exports.get = (req, res) => {
    const scraper = require('./scraper');
    scraper.crawl().then((data) => {
        console.log("Total entries: " + data.dates.length);
        console.log("Total Funds: " + data.funds[data.funds.length - 1]);

        res.json(data);

    }).catch((e) => {
        console.log('\n***** Error occured while retriving data from the source...');
        console.log(e);
        console.log('***** Error occured while retriving data from the source...\n');

        res.json({
            dates: 'problem with the data source',
            funds: 'problem with the data source'
        });
    });
};