const meals = document.getElementById("meals");

getRandomMeal();

async function getRandomMeal() {

    const resp = await fetch("https://dummyjson.com/products/1");

    const respData = await resp.json();

    // const randomMeal = respData.meals;

    addMeal(respData, true);

    console.log(respData);
}

async function getMealById(id) {

    const meal = await fetch("https://dummyjson.com/products/category/smartphones=" + id);

    console.log(meal.json());
}

async function getMealsBySearch(term) {

    const meals = await fetch("https://dummyjson.com/products=" + term);
    console.log(meals.json());
}

function addMeal(mealData, random = false) {

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        
        <div class="meal-header">
            ${random ?
            `<span class="random">
                Random Smartphone
            </span>` : ''}
            <img src="${mealData.thumbnail}" alt="${mealData.title}">
        </div>

        <div class="meal-body">

            <h4>${mealData.title} </h4>
            <button class="fav-btn"><i class="fa-solid fa-heart"></i>
            </button>

        </div>
    `;

    const btn = meal.querySelector('.meal-body .fav-btn');
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });

    meals.appendChild(meal);

}

function addMealToLS(meal) {



}

function getMealsFromLS() {

    const mealIds = localStorage.getItem('mealIds');
}

