import Recipe from "./Recipe";

function RecipeContainer(props) {
    return(
        <div className="recipe-container">
            {props.recipes.map(recipe =>
                <Recipe key={recipe.name} recipe={recipe} />
            )}
        </div>
    );
}

export default RecipeContainer;