# 🌴 Green Earth

Green Earth is a simple plant showcase web application built using HTML, CSS, and JavaScript.
It displays different categories of trees and plants using an external API.

Users can explore plants, view their details, and filter plants by category.

---

## 🌿 Features

* 🌱 View all plant categories
* 🌳 Display all available plants
* 🌸 Filter plants by category
* 📄 View plant details
* 📱 Responsive design for mobile devices

---

## 🛠 Technologies Used

* HTML
* CSS
* JavaScript (DOM & Fetch API)
* REST API

---

## 🌐 API Endpoints

### 1️⃣ Get All Categories

Fetch all plant categories.

```
https://openapi.programming-hero.com/api/categories
```

Example Response:

```
{
  "status": true,
  "message": "successfully fetched categories data",
  "categories": [
    {
      "id": 1,
      "category_name": "Fruit Tree",
      "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
    },
    {
      "id": 2,
      "category_name": "Flowering Tree",
      "small_description": "Trees grown for their beautiful and fragrant flowers."
    }
  ]
}
```

---

### 2️⃣ Get All Plants

Fetch all available plants.

```
https://openapi.programming-hero.com/api/plants
```

Example Data:

```
{
  "id": 1,
  "name": "Mango Tree",
  "category": "Fruit Tree",
  "price": 500
}
```

---

### 3️⃣ Get Plants by Category

Fetch plants based on category ID.

```
https://openapi.programming-hero.com/api/category/{id}
```

Example:

```
https://openapi.programming-hero.com/api/category/1
```

---

### 4️⃣ Get Plant Details

Fetch detailed information of a specific plant.

```
https://openapi.programming-hero.com/api/plant/{id}
```

Example:

```
https://openapi.programming-hero.com/api/plant/1
```

## 🚀 How to Run the Project

1. Clone the repository

```
git clone https://github.com/your-username/green-earth.git
```

2. Open the project folder

3. Run the project using Live Server or open `index.html` in your browser

---

## 🎯 Future Improvements

* Add plant search functionality
* Add favorite plants feature
* Improve UI design
* Add plant details modal

---

## 👨‍💻 Author

Developed by **Kamal Uddin**
