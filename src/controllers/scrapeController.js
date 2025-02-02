const { scrapeAllPages } = require('../utils/pagination');

/**
 * API endpoint to scrape eBay based on the user-provided search term (_nkw).
 */
const scrapeProducts = async (req, res) => {
    const searchTerm = req.query.q || "nike"; // Default: "nike"
    
    try {
        console.log(`Scraping eBay for: ${searchTerm}`);
        const products = await scrapeAllPages(searchTerm);
        res.json({ success: true, data: products });
    } catch (error) {
        console.error("Scraping Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    scrapeProducts,
};
