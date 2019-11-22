import  { getSavedRecipes, getRecipes, saveRecipes } from './recipes'
import { getFilters } from './filters'
import { renderIngredients } from './ingredients'

// # HOMEPAGE

const recipes = getRecipes()

// Generates DOM elements for recipe
const generateRecipeDOM = (recipe) => {    
    const containerEl = document.createElement("a")
    const recipeText = document.createElement("p")
    const ingredientText = document.createElement("p")    
    
    containerEl.setAttribute("href", `edit.html#${recipe.id}`)
    containerEl.classList.add("list-item")
    
    if (recipe.title) {
        recipeText.textContent = recipe.title
    } else {
        recipeText.textContent = "Unnamed Recipe"
    }
    
    recipeText.classList.add("list-item__title")
    containerEl.appendChild(recipeText)

    // Check if they are checked
    if (recipe.ingredients.length > 0) {
        ingredientText.textContent = "You have some ingredients"
    } else {
        ingredientText.textContent = "You have no ingredients"
    }
    
    ingredientText.classList.add("list-item__subtitle")
    containerEl.appendChild(ingredientText)

    return containerEl
}

// Renders recipes to screen
const renderRecipes = () => {   
    const recipeList = document.querySelector("#recipes")
    const filter = getFilters()
    
    // Clears what was previously rendered
    recipeList.innerHTML = ""

    // Filter on searchtext
    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach((recipe) => {
            const newParagraph = generateRecipeDOM(recipe)
            recipeList.appendChild(newParagraph)
        })    
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "Hmmm, no recipes!"
        emptyMessage.classList.add("empty-message")
        recipeList.append(emptyMessage)
    }   
}


// # EDIT PAGE ------------

// Renders page with the recipe title, steps and ingredients
const renderEditPage = () => {
    const recipeName = document.querySelector(".recipe-name")
    const instructionsArea = document.querySelector(".instructions-area")
        
    let foundRecipe = recipes.find((recipe) => {
        return recipe.id === location.hash.substring(1)
    })

    recipeName.value = foundRecipe.title
    instructionsArea.value = foundRecipe.steps
    
    renderIngredients(foundRecipe)    
}

// If recipe.id matches location.hash --> change recipe name
const updateRecipe = () => {
    const recipeName = document.querySelector(".recipe-name")
    const instructionsArea = document.querySelector(".instructions-area")
    
    let foundRecipe = recipes.find((recipe) => {        
        return recipe.id === location.hash.substring(1)
    })    
    
    foundRecipe.title = recipeName.value
    foundRecipe.steps = instructionsArea.value
    saveRecipes()
}

// Deletes Recipe (dont forget to save them) BUT STILL NOT INGREDIENTS
const deleteRecipe = () => {

    let recipeIndex = recipes.findIndex((recipe) => {
        return recipe.id === location.hash.substring(1)
    })    
        
    if (recipeIndex > -1 ) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()        
    }    

    location.assign("index.html")
}



export { renderRecipes, renderEditPage, updateRecipe, deleteRecipe } 