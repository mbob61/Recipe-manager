import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => {setName(event.target.value)}
  const handleCuisineChange = (event) => {setCuisine(event.target.value)}
  const handlePhotoShange = (event) => {setPhoto(event.target.value)}
  const handleIngredientsChange = (event) => {setIngredients(event.target.value)}
  const handlePreparationChange = (event) => {setPreparation(event.target.value)}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", name, cuisine, photo, ingredients, preparation)
    createRecipe({name, cuisine, photo, ingredients, preparation})
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}> 
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" onChange={handleNameChange} value={name}></input>
            </td>
            <td>
              <input name="cuisine" type="text" onChange={handleCuisineChange} value={cuisine}></input>
            </td>
            <td>
              <input name="photo" type="url" onChange={handlePhotoShange} value={photo}></input>
            </td>
            <td>
              <textarea name="ingredients" type="text" onChange={handleIngredientsChange} value={ingredients}></textarea>
            </td>
            <td>
              <textarea name="preparation" type="text" onChange={handlePreparationChange} value={preparation}></textarea>
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
