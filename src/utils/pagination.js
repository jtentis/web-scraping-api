const { scrapeEbay } = require('../services/scrapeService');

/**
 * @param {string} searchTerm
 * @returns {Array}
 */
const scrapeAllPages = async (searchTerm) => {
    let page = 1;
    let allProducts = [];
    let hasNextPage = true;

    while (hasNextPage) {
        console.log(`Scraping Page ${page} for: ${searchTerm}...`);
        const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(searchTerm)}&_pgn=${page}`;
        const products = await scrapeEbay(url);

        if (products.length === 0) {
            hasNextPage = false;
        } else {
            allProducts = allProducts.concat(products);
            page++;
        }
    }

    return allProducts;
};

module.exports = {
    scrapeAllPages,
};
