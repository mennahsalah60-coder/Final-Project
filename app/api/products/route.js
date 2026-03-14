export async function GET() {
    const products = {
        "fruits": [
            { "id": 1, "name": "Green Apple", "price": 14.99, "sale": 0.5, "image": "/apple.png" },
            { "id": 2, "name": "Fresh indian Malta", "price": 20.00, "sale": 0.5, "image": "/Image.png" }
        ],
        "vegetables": [
            { "id": 3, "name": "Chinese cabbage", "price": 12.00, "sale": 0.5, "image": "/Image (1).png" },
            { "id": 4, "name": "Green Lettuce", "price": 9.00, "sale": 0.5, "image": "/Image (2).png" },
            { "id": 5, "name": "Eggplant", "price": 34.00, "sale": 0.5, "image": "/Image (3).png" },
            { "id": 6, "name": "Big Potatoes", "price": 20.00, "sale": 0.5, "image": "/Image (4).png" },
            { "id": 7, "name": "Corn", "price": 20.00, "sale": 0.5, "image": "/Image (5).png" },
            { "id": 8, "name": "Fresh Cauliflower", "price": 12.00, "sale": 0.5, "image": "/Image (6).png" },
            { "id": 9, "name": "Green Capsicum", "price": 9.00, "sale": 0.5, "image": "/Image (7).png" },
            { "id": 10, "name": "Green Chili", "price": 34.00, "sale": 0.5, "image": "/Image (8).png" }
        ]
    }

    return Response.json(products)
}