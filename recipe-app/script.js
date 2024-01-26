const meals = document.getElementById("meals");

async function getRandomMeal() {

    const resp = await fetch("https://dummyjson.com/products/1");

    const respData = await resp.json();

    // const randomMeal = respData.meals;

    addMeal(respData, true);

    console.log(respData);
}

getRandomMeal();

async function getMealById(id) {

    const meal = await fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price=" + id);

    console.log(meal.json());
}

async function getMealsBySearch(term) {

    const meals = await fetch("https://dummyjson.com/products/search?q=phone=" + term);
    console.log(meals.json());
}

function addMeal(mealData, random = false) {

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        
        <div class="meal-header">
            ${random ?
            `<span class="random">
                Random Recipe
            </span>` : ''}
            <img src="${mealData.thumbnail}" alt="${mealData.thumbnail}">
        </div>

        <div class="meal-body">

            <h4>${mealData.title} </h4>
            <button class="fav-btn"><i class="fa-solid fa-heart"></i>
            </button>

        </div>
    `;

    meal.querySelector('.meal-body .fav-btn').
        addEventListener('click', (e) => {
            e.target.classList.toggle("active");
        });

    meals.appendChild(meal);

}