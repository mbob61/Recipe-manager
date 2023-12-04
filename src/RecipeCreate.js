import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  const defaultState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [recipe, setRecipe] = useState(defaultState)
  const changeHandler = (event) => {
    setRecipe({...recipe, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe)
    setRecipe(defaultState)
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}> 
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" onChange={changeHandler} value={recipe.name}></input>
            </td>
            <td>
              <input name="cuisine" type="text" onChange={changeHandler} value={recipe.cuisine}></input>
            </td>
            <td>
              <input name="photo" type="url" onChange={changeHandler} value={recipe.photo}></input>
            </td>
            <td>
              <textarea name="ingredients" type="text" onChange={changeHandler} value={recipe.ingredients}></textarea>
            </td>
            <td>
              <textarea name="preparation" type="text" onChange={changeHandler} value={recipe.preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
