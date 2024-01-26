const meals = document.getElementById("meals");
getRandomMeal();

async function getRandomMeal() {

    const resp = await fetch("www.themealdb.com/api/json/v1/1/random.php");

    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    addMeal(randomMeal, true);
}

async function getMealById(id) {

    const meal = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

}

async function getMealsBySearch(term) {

    const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + term);

}

addMeal(mealData, random = false){

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        
        <div class="meal-header">
            ${random ?
            `<span class="random">
                Random Recipe
            </span>` : ''}
            <img src="${mealData.strMealThumb}" alt="${mealData.Meal}">
        </div>

        <div class="meal-body">

            <h4>${mealData.Meal} </h4>
            <button class="fav-btn active"><i class="fa-solid fa-heart"></i>
            </button>

        </div>
    `;

    meals.appendChild(meal);

}