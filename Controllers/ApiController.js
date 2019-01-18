exports.get = (req, res) => {
    try {
        const scraper = require('./scraper');
        const scrapPromise = scraper.crawl();

        Promise.resolve(scrapPromise).then((data) => {
            console.log(data);
            res.json(data);
        });
    } catch (e) {
        console.log(e);
        res.send("Problem with in the scraper method!");
    }
};