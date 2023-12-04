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

  // const handleNameChange = (event) => {setName(event.target.value)}
  // const handleCuisineChange = (event) => {setCuisine(event.target.value)}
  // const handlePhotoShange = (event) => {setPhoto(event.target.value)}
  // const handleIngredientsChange = (event) => {setIngredients(event.target.value)}
  // const handlePreparationChange = (event) => {setPreparation(event.target.value)}

  // const [name, setName] = useState("");
  // const [cuisine, setCuisine] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [preparation, setPreparation] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", name, cuisine, photo, ingredients, preparation)
    createRecipe(recipe)
    setRecipe(defaultState)
    // setName("");
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
