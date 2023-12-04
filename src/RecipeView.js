import React, {useState} from "react";

function RecipeView({recipe, deleteHandler}){
    return (
        <tr>
            <td>{(recipe.name)}</td>
            <td>{(recipe.cuisine)}</td>
            <td>{(<img alt={recipe.photo} src={recipe.photo} />)}</td> 
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td>
                <button name="delete" onClick={deleteHandler}>Delete</button>
            </td>

        </tr>
    )

}

export default RecipeView;