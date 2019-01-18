exports.get = (req, res) => {
    const scraper = require('./scraper');
    const scrapPromise = scraper.crawl();

    Promise.resolve(scrapPromise).then((data) => {
        console.log(data);
        res.json(data);
    });
};