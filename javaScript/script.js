

const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer");
const allTreesbtn = document.getElementById("allTreesbtn")
const cartContainer = document.getElementById("cartContainer");
const emptyCartMessage = document.getElementById("emptyCartMessage")
const loadingSpinner = document.getElementById("treesLoadingSpinner");
const totalPrice = document.getElementById("totalPrice")
let cart = [];




// all categories api button
const allCategoriesBtnApi = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()
    displayCategories(data.categories)

}


// all button toggle color selectBtn 
const removeActiveBtn = (id) => {
    const activeBtn = document.querySelectorAll(".active-btn");
    activeBtn.forEach(btn => btn.classList.remove("btn-primary"));
    allTreesbtn.classList.remove("btn-primary");

    const selectBtn = document.getElementById(id)
    selectBtn.classList.add("btn-primary");


}



// all button categorie api card 
const btnCategoryApi = async (id) => {
    spinnerLoading(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    const data = await res.json()
    spinnerLoading(false)
    btnCategoryCardDisplay(data.plants)

}
// button category trees dispaly
const btnCategoryCardDisplay = (trees) => {


    treesContainer.innerHTML = "";

    trees.forEach((tree) => {

        const div = document.createElement("div");
        div.className = ` bg-white shadow-sm border-b-2 ${tree.price > 500 ? "border-red-500" : "border-green-500"} w-full w-[350px]`;
        div.innerHTML = `
                              <div class="bg-white p-3 rounded-xl shadow-sm  flex flex-col h-full">
                              
                               <figure class="h-[150px] overflow-hidden">
                                   <img 
                                   src="${tree.image}" 
                                   class="w-full h-full object-cover hover:scale-110 transition duration-300"
                                   />
                               </figure>
                            
                                <!-- Title -->
                                <h2 class="font-semibold text-lg">
                                    ${tree.name}
                                </h2>
                            
                                <!-- Description -->
                                <p class="text-sm text-gray-500 line-clamp-2 mt-1">
                                    ${tree.description}
                                </p>
                            
                                <!-- Category + Price -->
                                <div class="flex justify-between items-center mt-3">
                            
                                    <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                        ${tree.category}
                                    </span>
                            
                                    <span class="font-semibold text-gray-700">
                                        $${tree.price}
                                    </span>
                            
                                </div>
                            
                                <!-- Button -->
                                <button 
                                onclick="addToCart(${tree.id},'${tree.name}',${tree.price})"
                                class="mt-4 bg-green-700 hover:bg-green-800 text-white py-2 rounded-full w-full">
                            
                                Add to Cart
                            
                                </button>
                            
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

        button.className = "btn active-btn w-full hover:bg-green-800  hover:text-white";
        button.id = `cat-${categorie.id}`;
        button.innerText = categorie.category_name;

        button.onclick = () => {
            btnCategoryApi(categorie.id);
            removeActiveBtn(`cat-${categorie.id}`);
        };

        categoriesContainer.append(button);

    });
}


// all Trees card Api sob card display koralam
const allTreesBtnApi = async () => {
    spinnerLoading(true)
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json()
    spinnerLoading(false)
    displayAllPlants(data.plants)
}

// all plants display
const displayAllPlants = (trees) => {

    treesContainer.innerHTML = "";

    trees.forEach((tree) => {

        const div = document.createElement("div");
        div.className = `card  bg-white shadow-sm border-b-2 ${tree.price > 500 ? "border-red-500" : "border-green-500"} w-full w-[350px]`;
        div.innerHTML = `
                              <div class="bg-white p-3 rounded-xl shadow-sm  flex flex-col h-full">
                              
                               <figure class="h-[150px] overflow-hidden">
                                   <img 
                                   src="${tree.image}" 
                                   class="w-full h-full object-cover hover:scale-110 transition duration-300"
                                   />
                               </figure>
                            
                                <!-- Title -->
                                <h2 class="font-semibold text-lg">
                                    ${tree.name}
                                </h2>
                            
                                <!-- Description -->
                                <p class="text-sm text-gray-500 line-clamp-2 mt-1">
                                    ${tree.description}
                                </p>
                            
                                <!-- Category + Price -->
                                <div class="flex justify-between items-center mt-3">
                            
                                    <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                        ${tree.category}
                                    </span>
                            
                                    <span class="font-semibold text-gray-700">
                                        $${tree.price}
                                    </span>
                            
                                </div>
                            
                                <!-- Button -->
                                <button 
                                onclick="addToCart(${tree.id},'${tree.name}',${tree.price})"
                                class="mt-4 bg-green-700 hover:bg-green-800 text-white py-2 rounded-full w-full">
                            
                                Add to Cart
                            
                                </button>
                            
                            </div>
                            `;
        treesContainer.append(div);
    });


}

// add cart section
function addToCart(id, name, price) {

    loadingSpinner.classList.remove("hidden");

    const upadateCartAll = cart.find((item) => item.id == id)

    setTimeout(() => {

        if (cart.length === 0) {
            emptyCartMessage.classList.add("hidden")
        }

        if (upadateCartAll) {
            upadateCartAll.quantity += 1
        } else {
            cart.push({
                id,
                name,
                price,
                quantity: 1

            })

        }

        updateCart(cart);

        loadingSpinner.classList.add("hidden")

    }, 300)


}
function updateCart(carts) {

    cartContainer.innerHTML = "";


    let total = 0;
    for (let item of carts) {

        total = total + item.price * item.quantity;

        const div = document.createElement("div")
        div.innerHTML = `
        
                       <div class="bg-white p-3 rounded-xl shadow-sm  flex flex-col h-full">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h2>${item.name}</h2>
                                    <p> $${item.price} × ${item.quantity}</p>
                                </div>
                                <button onclick="removeCart(${item.id})" class="btn btn-ghost">X</button>
                            </div>
                            <p class="text-right font-semibold text-xl">$${item.price * item.quantity}</p>
                        </div>
        
        `;

        cartContainer.append(div);

    }
    totalPrice.innerText = total;

}

// delete cart button 
function removeCart(id) {

    const newCart = cart.filter(item => item.id != id)
    console.log(newCart)
    cart = newCart;
    updateCart(cart)
}


function spinnerLoading(status) {
    if (status === true) {
        loadingSpinner.classList.remove("hidden");
        treesContainer.classList.add("hidden");
    } else {
        loadingSpinner.classList.add("hidden");
        treesContainer.classList.remove("hidden");
    }

}








allCategoriesBtnApi();
allTreesBtnApi('allTreesbtn');