const puppeteer = require("puppeteer");

/**
 * @param {string} url
 * @returns {Array}
 */
const scrapeEbay = async (url) => {
    console.log(`Launching browser for ${url}...`);

    console.log("Launching browser...");
    const browser = await puppeteer.launch({
        executablePath:
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    });
    console.log("Browser launched successfully.");

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const products = await page.evaluate(() => {
        const items = [];

        document
            .querySelectorAll(".s-item__wrapper.clearfix")
            .forEach((element) => {
                const productName =
                    element.querySelector(".s-item__title")?.innerText.trim() ||
                    "-";
                const productPrice =
                    element.querySelector(".s-item__price")?.innerText.trim() ||
                    "-";
                const productState =
                    element
                        .querySelector(".s-item__subtitle")
                        ?.innerText.trim() || "-";
                const productLink =
                    element.querySelector(".s-item__link")?.href || "-";

                items.push({
                    name: productName,
                    price: productPrice,
                    link: productLink,
                    state: productState,
                    description: "-",
                });
            });

        return items;
    });

    await browser.close();
    return products;
};

module.exports = {
    scrapeEbay,
};
