"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

function GET() {
  var products;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          products = {
            "fruits": [{
              "id": 1,
              "name": "Green Apple",
              "price": 14.99,
              "sale": 0.5,
              "image": "/apple.png"
            }, {
              "id": 2,
              "name": "Fresh indian Malta",
              "price": 20.00,
              "sale": 0.5,
              "image": "/Image.png"
            }, {
              "id": 3,
              "name": "Green Apple",
              "price": 14.99,
              "sale": 0.5,
              "image": "/apple.png"
            }, {
              "id": 4,
              "name": "Fresh indian Malta",
              "price": 20.00,
              "sale": 0.5,
              "image": "/Image.png"
            }],
            "vegetables": [{
              "id": 5,
              "name": "Chinese cabbage",
              "price": 12.00,
              "sale": 0.5,
              "image": "/Image (1).png"
            }, {
              "id": 6,
              "name": "Green Lettuce",
              "price": 9.00,
              "sale": 0.5,
              "image": "/Image (2).png"
            }, {
              "id": 7,
              "name": "Eggplant",
              "price": 34.00,
              "sale": 0.5,
              "image": "/Image (3).png"
            }, {
              "id": 8,
              "name": "Big Potatoes",
              "price": 20.00,
              "sale": 0.5,
              "image": "/Image (4).png"
            }, {
              "id": 9,
              "name": "Corn",
              "price": 20.00,
              "sale": 0.5,
              "image": "/Image (5).png"
            }, {
              "id": 10,
              "name": "Fresh Cauliflower",
              "price": 12.00,
              "sale": 0.5,
              "image": "/Image (6).png"
            }, {
              "id": 11,
              "name": "Green Capsicum",
              "price": 9.00,
              "sale": 0.5,
              "image": "/Image (7).png"
            }, {
              "id": 12,
              "name": "Green Chili",
              "price": 34.00,
              "sale": 0.5,
              "image": "/Image (8).png"
            }, {
              "id": 13,
              "name": "Chinese cabbage",
              "price": 12.00,
              "sale": 0.5,
              "image": "/Image (1).png"
            }, {
              "id": 14,
              "name": "Green Lettuce",
              "price": 9.00,
              "sale": 0.5,
              "image": "/Image (2).png"
            }, {
              "id": 15,
              "name": "Eggplant",
              "price": 34.00,
              "sale": 0.5,
              "image": "/Image (3).png"
            }, {
              "id": 16,
              "name": "Big Potatoes",
              "price": 20.00,
              "sale": 0.5,
              "image": "/Image (4).png"
            }, {
              "id": 17,
              "name": "Corn",
              "price": 20.00,
              "sale": 0.5,
              "image": "/Image (5).png"
            }, {
              "id": 18,
              "name": "Fresh Cauliflower",
              "price": 12.00,
              "sale": 0.5,
              "image": "/Image (6).png"
            }, {
              "id": 19,
              "name": "Green Capsicum",
              "price": 9.00,
              "sale": 0.5,
              "image": "/Image (7).png"
            }, {
              "id": 20,
              "name": "Green Chili",
              "price": 34.00,
              "sale": 0.5,
              "image": "/Image (8).png"
            }]
          };
          return _context.abrupt("return", Response.json(products));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}