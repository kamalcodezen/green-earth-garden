
const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer");
const allTreesbtn = document.getElementById("allTreesbtn")






// all categories api button
const allCategoriesBtnApi = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()
    displayCategories(data.categories)

}



const removeActiveBtn = (id) => {
    const activeBtn = document.querySelectorAll(".active-btn");
    activeBtn.forEach(btn => btn.classList.remove("btn-primary"));
    allTreesbtn.classList.remove("btn-primary");


    const selectBtn = document.getElementById(id)
    selectBtn.classList.add("btn-primary");


}



// all button categorie api card 
const btnCategoryApi = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    const data = await res.json()

    btnCategoryCardDisplay(data.plants)

}
// button category trees dispaly
const btnCategoryCardDisplay = (trees) => {


    treesContainer.innerHTML = "";

    trees.forEach((tree) => {

        const div = document.createElement("div");
        div.className = `card p-3 bg-white shadow-sm border-b-2 ${tree.price > 500 ? "border-red-500" : "border-green-500"} w-full w-[350px]`;
        div.innerHTML = `
                              <div class="card bg-white shadow-sm h-full">
                                  <figure>
                                      <img src="${tree.image}" class="w-full h-[180px] object-cover mb-1"/>
                                  </figure>
                              
                                  <div class=" flex flex-col w-full space-y-1">
                                      <h2 class="card-title">${tree.name}</h2>
                              
                                      <p class="line-clamp-2">${tree.description}</p>
                              
                                      <div class="flex justify-between items-center mt-auto">
                                      <div class="badge badge-success badge-outline">${tree.category}</div>
                                          <h2 class="font-bold text-xl text-[#4ade80]">$${tree.price}</h2>
                                          
                                      </div> 
                                      <button class="btn btn-primary rounded-full hover:opacity-90">Buy Now</button>
                                  </div>
                              </div>
                              `;

        treesContainer.append(div);
    });

}




// sob button gulo dispaly koralam
const displayCategories = (categories) => {

    categoriesContainer.innerHTML = "";

    categories.forEach(categorie => {

        const button = document.createElement("button");

        button.className = "btn active-btn w-full";
        button.id = `${categorie.id}`;
        button.innerText = categorie.category_name;

        button.onclick = () => {
            btnCategoryApi(categorie.id);
            removeActiveBtn(`${categorie.id}`);
        };

        categoriesContainer.append(button);
    });
}

// all Trees card Api sob card display koralam
const allTreesBtnApi = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json()
    displayAllPlants(data.plants)
}

// all plants display
const displayAllPlants = (trees) => {

    treesContainer.innerHTML = "";

    trees.forEach((tree) => {

        const div = document.createElement("div");
        div.className = `card p-3 bg-white shadow-sm border-b-2 ${tree.price > 500 ? "border-red-500" : "border-green-500"} w-full w-[350px]`;
        div.innerHTML = `
                              <div class="card bg-white shadow-sm h-full">
                                  <figure>
                                      <img src="${tree.image}" class="w-full h-[180px] object-cover mb-1"/>
                                  </figure>
                              
                                  <div class=" flex flex-col w-full space-y-1">
                                      <h2 class="card-title">${tree.name}</h2>
                              
                                      <p class="line-clamp-2">${tree.description}</p>
                              
                                      <div class="flex justify-between items-center mt-auto">
                                      <div class="badge badge-success badge-outline">${tree.category}</div>
                                          <h2 class="font-bold text-xl text-[#4ade80]">$${tree.price}</h2>
                                          
                                      </div> 
                                      <button  class="btn btn-primary rounded-full hover:opacity-90">Buy Now</button>
                                  </div>
                              </div>
                              `;

        treesContainer.append(div);
    });


}







allCategoriesBtnApi();
allTreesBtnApi('allTreesbtn');