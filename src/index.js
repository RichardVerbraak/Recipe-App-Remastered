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

// Creates the recipe and gets the hash from its return value to passs in to edit URL
document.querySelector(".add-recipe").addEventListener("click", (e) => {
    const id = createRecipe()    
    location.assign(`/edit.html#${id}`)
})