
const categoriesContainer = document.getElementById("categoriesContainer");



const allCategoriesBtnApi = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()
    displayCategories(data.categories)

}

const displayCategories = (categories) => {

    categories.forEach(categorie => {

        const button = document.createElement("button")

        button.className = "btn btn-primary w-full"
        button.innerText = categorie.category_name;

        categoriesContainer.append(button)

    });


}


allCategoriesBtnApi()