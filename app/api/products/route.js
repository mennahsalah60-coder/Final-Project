export async function GET() {
    const products = {
        "fruits": [
            { "id": 1, "name": "Green Apple", category: 'Fruits', "price": 14.99, "sale": 0.5, "image": "/apple.png" },
            { "id": 2, "name": "Fresh indian Malta", category: 'Fruits', "price": 20.00, "sale": 0.5, "image": "/Image.png" },
            { "id": 3, "name": "Fresh Mango", category: 'Fruits', "price": 14.99, "sale": 0.5, "image": "/Product Image (7).png" },
        ],
        "vegetables": [
            { "id": 5, "name": "Chinese cabbage", category: 'Vegetables', "price": 12.00, "sale": 0.5, "image": "/Image (1).png" },
            { "id": 6, "name": "Green Lettuce", category: 'Vegetables', "price": 9.00, "sale": 0.5, "image": "/Image (2).png" },
            { "id": 7, "name": "Eggplant", category: 'Vegetables', "price": 34.00, "sale": 0.5, "image": "/Image (3).png" },
            { "id": 8, "name": "Big Potatoes", category: 'Vegetables', "price": 20.00, "sale": 0.5, "image": "/Image (4).png" },
            { "id": 9, "name": "Corn", category: 'Vegetables', "price": 20.00, "sale": 0.5, "image": "/Image (5).png" },
            { "id": 10, "name": "Fresh Cauliflower", category: 'Vegetables', "price": 12.00, "sale": 0.5, "image": "/Image (6).png" },
            { "id": 11, "name": "Green Capsicum", category: 'Vegetables', "price": 9.00, "sale": 0.5, "image": "/Image (7).png" },
            { "id": 12, "name": "Green Chili", category: 'Vegetables', "price": 34.00, "sale": 0.5, "image": "/Image (8).png" },
            { "id": 13, "name": "Red Chili", category: 'Vegetables', "price": 12.00, "sale": 0.5, "image": "/Product Image (1).png" },
            { "id": 14, "name": "Red Tomato", category: 'Vegetables', "price": 9.00, "sale": 0.5, "image": "/Product Image (4).png" },
            { "id": 15, "name": "Green Cucumber", category: 'Vegetables', "price": 34.00, "sale": 0.5, "image": "/Product Image (5).png" },
            { "id": 16, "name": "Ladies Finger", category: 'Vegetables', "price": 20.00, "sale": 0.5, "image": "/Product Image (8).png" },
            { "id": 17, "name": "Green Capsicum", category: 'Vegetables', "price": 20.00, "sale": 0.5, "image": "/Product Image (6).png" },
        ]
    }

    return Response.json(products)
}