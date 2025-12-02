import { recipes } from './recipes.js';


export default function RecipeList() {
  const receta = recipes.map(recipe =>
    <li key={recipe.id}>
      <p>
        <b>{recipe.name}:</b>
        <ul>
          {recipe.ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
        
      </p>
    </li>
  );
  return (
    <div>
      <h1>Recetas</h1>
      <ul>{receta}</ul>
    </div>
  );
}
