const express = require('express');
const scrapeController = require('../controllers/scrapeController');
const router = express.Router();

/**
 * @swagger
 * /scrape:
 *   get:
 *     summary: Scrape product listings from eBay
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: false
 *         description: The eBay URL to scrape
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   price:
 *                     type: string
 *                   description:
 *                     type: string
 *                   link:
 *                     type: string
 */
router.get('/scrape', scrapeController.scrapeProducts);

module.exports = router;