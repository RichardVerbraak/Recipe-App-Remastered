import { renderEditPage, updateRecipe, deleteRecipe } from './views'
import { addIngredient } from './recipes'

renderEditPage()

const recipeName = document.querySelector(".recipe-name")
const instructionsArea = document.querySelector(".instructions-area")
const addIngredientButton = document.querySelector(".add-ingredient-button")
const deleteRecipeButton = document.querySelector(".delete-recipe")

recipeName.addEventListener("input", (e) => {
    updateRecipe()
})

// Saves the steps to the recipe
instructionsArea.addEventListener("input", (e) => {
    updateRecipe()
})

// Creates and renders the ingredient on click
addIngredientButton.addEventListener("click", (e) => {
    addIngredient() 
})

deleteRecipeButton.addEventListener("click", (e) => {
    deleteRecipe()
})
