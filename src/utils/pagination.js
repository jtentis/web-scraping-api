const { scrapeEbay } = require('../services/scrapeService');

/**
 * Scrapes all eBay search results across multiple pages.
 * @param {string} searchTerm - The _nkw search term from user input.
 * @returns {Array} - The scraped product data from all pages.
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
