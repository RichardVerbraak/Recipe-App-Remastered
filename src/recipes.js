import uuidv4 from "uuid/v4"
import { renderRecipes } from './views'
import { renderIngredients } from "./ingredients"
 
let recipes = []

const getSavedRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')
    console.log(recipesJSON)
    try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    } catch(e) {
        console.log('No JSON')
        return []
    }
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

// Not sure if needed
const getRecipes = () => {
    return recipes
}

const createRecipe = () => {
    const id = uuidv4()
    recipes.push({
        id,
        title: '',
        steps: '',
        ingredients: []
    })

    saveRecipes()
    renderRecipes()

    location.assign(`edit.html#${id}`)
    
    return id
}

const addIngredient = () => {
    const ingredientInput = document.querySelector(".ingredient-input")

    const foundRecipe = recipes.find((recipe) => {        
        return recipe.id === location.hash.substring(1)
    })

    if (foundRecipe && ingredientInput.value !== '') {
        const newIngredient = ingredientInput.value
        foundRecipe.ingredients.push(newIngredient)
        saveRecipes()
        renderIngredients(foundRecipe) 
    }
       
}

// Could probably be a lot simpler but it works
const removeIngredient = (e) => {
    const foundRecipe = recipes.find((recipe) => {        
        return recipe.id === location.hash.substring(1)
    })

    const ingredientIndex = foundRecipe.ingredients.findIndex((ingredient) => {
        return ingredient === e.target.previousElementSibling.innerText
    })

    console.log(ingredientIndex)

    if (ingredientIndex > -1) {
        foundRecipe.ingredients.splice(ingredientIndex, 1)
    }

    saveRecipes()
    renderIngredients(foundRecipe)
}

recipes = getSavedRecipes()

export { getRecipes, getSavedRecipes, createRecipe, addIngredient, removeIngredient, saveRecipes }