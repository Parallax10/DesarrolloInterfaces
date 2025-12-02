import { recipes } from './recipes.js';

export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <p>
              <b>{recipe.name}:</b>
            </p>
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

