import { renderRecipes } from './views'
import { createRecipe } from './recipes'
import { setFilters } from './filters'

// TODO: Add a save button instead of homepage button

renderRecipes()

// Search field
document.querySelector(".search-field").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderRecipes()
})

// Add recipe button
document.querySelector(".add-recipe").addEventListener("click", (e) => {
    // Add the input from the other page in as argument
    const id = createRecipe()    
    // location.assign(`edit.html#${id}`)
})