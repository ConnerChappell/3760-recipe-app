const searchInput = document.querySelector('input')
const searchResults = document.querySelector('.search-results-list')
const searchBtn = document.querySelector('.search-btn')

let recipeList = []

// search for recipe event listeners
searchBtn.addEventListener("click", () => {
    event.preventDefault()
    searchResults.innerHTML = ""
    fetchRecipe()
})

searchInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        searchResults.innerHTML = ""
        fetchRecipe()
    }
})

// function for fetching recipes
function fetchRecipe() {
    let searchInputValue = searchInput.value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
        .then((res) => res.json())
        .then((data) => {
            recipeList = data.meals.map((recipe) => {
                return {
                    meal: recipe.strMeal,
                    id: recipe.idMeal,
                    image: recipe.strMealThumb,
                    instructions: recipe.strInstructions,
                    ingredient1: recipe.strIngredient1,
                    ingredient2: recipe.strIngredient2,
                    ingredient3: recipe.strIngredient3,
                    ingredient4: recipe.strIngredient4,
                    ingredient5: recipe.strIngredient5,
                    ingredient6: recipe.strIngredient6,
                    ingredient7: recipe.strIngredient7,
                    ingredient8: recipe.strIngredient8,
                    ingredient9: recipe.strIngredient9,
                    ingredient10: recipe.strIngredient10,
                    ingredient11: recipe.strIngredient11,
                    ingredient12: recipe.strIngredient12,
                    ingredient13: recipe.strIngredient13,
                    ingredient14: recipe.strIngredient14,
                    ingredient15: recipe.strIngredient15,
                    ingredient16: recipe.strIngredient16,
                    ingredient17: recipe.strIngredient17,
                    ingredient18: recipe.strIngredient18,
                    ingredient19: recipe.strIngredient19,
                    ingredient20: recipe.strIngredient20,
                    measure1: recipe.strMeasure1,
                    measure2: recipe.strMeasure2,
                    measure3: recipe.strMeasure3,
                    measure4: recipe.strMeasure4,
                    measure5: recipe.strMeasure5,
                    measure6: recipe.strMeasure6,
                    measure7: recipe.strMeasure7,
                    measure8: recipe.strMeasure8,
                    measure9: recipe.strMeasure9,
                    measure10: recipe.strMeasure10,
                    measure11: recipe.strMeasure11,
                    measure12: recipe.strMeasure12,
                    measure13: recipe.strMeasure13,
                    measure14: recipe.strMeasure14,
                    measure15: recipe.strMeasure15,
                    measure16: recipe.strMeasure16,
                    measure17: recipe.strMeasure17,
                    measure18: recipe.strMeasure18,
                    measure19: recipe.strMeasure19,
                    measure20: recipe.strMeasure20,
                    youtube: recipe.strYoutube,
                    favorite: false,
                }
            })
            displayRecipes()
        })
        .catch((error) => {
            console.error(error)
            searchResults.innerHTML = "Sorry, could not find a recipe. Try searching again."
        })
}

// function for displaying recipes
function displayRecipes() {
    recipeList.forEach((recipe) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("id", "${recipe.id}")

        card.innerHTML= `
            <img src="${recipe.image}" class="card-img-top" alt="Recipe thumbnail">
            <div class="card-body">
                <h4 class="card-title">${recipe.meal}</h4>
                <div class="instructions-container">
                    <h5>Cooking Instructions:</h5>
                    <p class="instructions-text">${recipe.instructions}</p>
                </div>

                <div class="ingredients-container">
                    <h5>Ingredients:</h5>
                    <ul class="ingredients-list">
                        <li>${recipe.measure1} ${recipe.ingredient1}</li>
                        <li>${recipe.measure2} ${recipe.ingredient2}</li>
                        <li>${recipe.measure3} ${recipe.ingredient3}</li>
                        <li>${recipe.measure4} ${recipe.ingredient4}</li>
                        <li>${recipe.measure5} ${recipe.ingredient5}</li>
                        <li>${recipe.measure6} ${recipe.ingredient6}</li>
                        <li>${recipe.measure7} ${recipe.ingredient7}</li>
                        <li>${recipe.measure8} ${recipe.ingredient8}</li>
                        <li>${recipe.measure9} ${recipe.ingredient9}</li>
                        <li>${recipe.measure10} ${recipe.ingredient10}</li>
                        <li>${recipe.measure11} ${recipe.ingredient11}</li>
                        <li>${recipe.measure12} ${recipe.ingredient12}</li>
                        <li>${recipe.measure13} ${recipe.ingredient13}</li>
                        <li>${recipe.measure14} ${recipe.ingredient14}</li>
                        <li>${recipe.measure15} ${recipe.ingredient15}</li>
                        <li>${recipe.measure16} ${recipe.ingredient16}</li>
                        <li>${recipe.measure17} ${recipe.ingredient17}</li>
                        <li>${recipe.measure18} ${recipe.ingredient18}</li>
                        <li>${recipe.measure19} ${recipe.ingredient19}</li>
                        <li>${recipe.measure20} ${recipe.ingredient20}</li>
                    </ul>
                </div>

                <div class="youtube-tutorial-container">
                    <a href="${recipe.youtube}" target="_blank" class="card-link">Watch Cooking Tutorial</a>
                </div>

                <div class="card-buttons">
                    <button class="btn btn-warning">Favorite</button>
                </div>
            </div>
        `
        searchResults.appendChild(card)
    })
}