# 🕷️ Web Scraping API - eBay Scraper

## 📌 About the Project

This project is a scraping API that collects product information listed on eBay based on a search term (\_nkw). It uses **Node.js, Express, and Puppeteer** to access pages, extract data, and return results in **JSON** format.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Framework for building APIs
- **Puppeteer** - Library for automating Chrome

## 📂 Project Structure

```
📂 web-scraping-api
├── 📂 controllers
│   ├── scrapeController.js  # Handles HTTP requests
├── 📂 routes
│   ├── scrapeRoutes.js  # Handles routing
├── 📂 services
│   ├── scrapeService.js  # Main scraping function
├── 📂 utils
│   ├── pagination.js  # Handles pagination of results
├── app.js  # Express server setup
├── package.json  # Project dependencies
├── README.md  # Project documentation
```

## 🔧 Setup and Execution

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Start the Server

```sh
npm run start
```

### 3️⃣ Test the API

Make a GET request to:

```sh
http://localhost:3000/api/scrape?q=adidas
```

## 📌 API Functionality

## 📖 Swagger Documentation
This project includes **Swagger** for API documentation, making it easy to test and understand the available endpoints.

### 📌 Accessing Swagger UI
To view the Swagger documentation, start the server and visit:
```
http://localhost:3000/api-docs
```

### 📜 Swagger Specification
The API is documented using **Swagger 2.0**, with the following structure:
```json
{
  "swagger": "2.0",
  "info": {
    "title": "Web Scraping API",
    "version": "1.0.0",
    "description": "API for scraping product listings from eBay"
  },
  "paths": {
    "/api/scrape": {
      "get": {
        "summary": "Scrape product listings from eBay",
        "parameters": [
          {
            "in": "query",
            "name": "q",
            "schema": {
              "type": "string"
            },
            "required": false,
            "description": "The eBay brand to scrape"
          }
        ],
        "responses": {
          "200": {
            "description": "A list of products",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "price": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      },
                      "link": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### Endpoint: `GET /api/scrape`

#### Parameters:

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| `q`       | String | Search term for eBay (\_nkw) |

#### Example Request:

```
GET /api/scrape?q=nike
```

#### Example JSON Response:

```json
{
  "success": true,
  "data": [
    {
      "name": "Nike Air Max 90",
      "price": "$120.00",
      "state": "New",
      "link": "https://www.ebay.com/itm/xyz"
    }
  ]
```
---

**Developed with using Node.js & Puppeteer**

