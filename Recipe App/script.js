getRandomMeal()

async function getRandomMeal() {
    const resp = await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json()

    console.log(randomMeal)
}

async function getMealById(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
}

async function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term)
}