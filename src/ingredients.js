import {removeIngredient} from './recipes'

const ingredientsList = document.querySelector(".ingredient-list")
const ingredientInput = document.querySelector(".ingredient-input")

// Make ingredient
const makeIngredient = (ingredient) => {       
    const label = document.createElement("label")
    const itemsContainer = document.createElement("div")
    const checkbox = document.createElement("input")
    const listEL = document.createElement("span")
    const removeButton = document.createElement("button")    

    // Label
    label.classList.add("ingredient-item")

    // Ingredient Item Container
    itemsContainer.classList.add("ingredient-item__container")
    label.appendChild(itemsContainer)
    
    // Checkbox
    checkbox.setAttribute("type", "checkbox")
    itemsContainer.appendChild(checkbox)
    
    // Ingredient text
    listEL.textContent = ingredient
    listEL.classList.add("ingredient-name")
    itemsContainer.appendChild(listEL)
    
    // Removes selected ingredient
    removeButton.textContent = "Remove"
    removeButton.classList.add("remove-ingredient")
    removeButton.addEventListener("click", (e) => {
        removeIngredient(e)
    })
    label.appendChild(removeButton)
    
    ingredientsList.appendChild(label)
}

// Renders all ingredients with current recipe
const renderIngredients = (recipe) => {    
    ingredientsList.innerHTML = ""

        
    if (recipe.ingredients.length > 0) {
        
        recipe.ingredients.forEach((ingredient) => {
            makeIngredient(ingredient)
        })

    } else {    
        const emptyMessage = document.createElement("p")
        emptyMessage.classList.add("empty-message__ingredients")
        emptyMessage.textContent = "Hmmm, no ingredients?"
        ingredientsList.appendChild(emptyMessage)
    }

    // Clears field after adding ingredient
    ingredientInput.value = ""
    ingredientInput.placeholder = "Add Ingredient"    
}

export { renderIngredients }