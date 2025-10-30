function Recipe(props) {
    return (
        <div className="recipe-card">
            <div className="card-inner">

                {/* front of the recipe card */}
                <div className="card-front">
                    <div className="recipe">
                        
                        <div className="header">
                            <h2 className="recipe-name">{props.recipe.name}</h2>
                        </div>

                        <div className="image">
                            <img src={props.recipe.image} alt={props.recipe.name} height={300} className="recipe-img" />
                        </div>

                        <div className="ingredients">
                            <h3>Ingredient List:</h3>
                            <ul className="ingredient-list">
                                {props.recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* back of the recipe card  */}
                <div className="card-back">
                    <div className="recipe"> 

                        <div className="header">
                            <h3>Directions:</h3>
                        </div>
                        
                        <div className="directions">
                            <ol className="directions-list">
                                {props.recipe.instructions.map((instruction, index) => (
                                    <li key={index}>
                                        <label>
                                            <input type="checkbox" />
                                            {instruction}
                                        </label>
                                    </li>
                                ))} 
                            </ol>
                        </div>
                        
                        <div className="glaze">
                            {props.recipe.optionalGlaze && (
                                <div className="optional-glaze">

                                    <div className="header">
                                        <h3>Optional Glaze:</h3>
                                        <h4>{props.recipe.optionalGlaze.name}</h4>
                                    </div>

                                    <div className="glaze-ingredients">
                                        <h5>Ingredient List:</h5>
                                        <ul className="ingredient-list">
                                            {props.recipe.optionalGlaze.ingredients.map((ingredient, index) => (
                                                <li key={index}>{ingredient}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="glaze-directions">    
                                        <h5>Directions:</h5>
                                        <ol className="directions-list">
                                            {props.recipe.optionalGlaze.instructions.map((instruction, index) => (
                                                <li key={index}>
                                                    <label>
                                                        <input type="checkbox" />
                                                        {instruction}
                                                    </label>
                                                </li>
                                            ))} 
                                    
                                        </ol>
                                    </div>    
                                </div>
                            )}
                        </div>
                    </div>    
                </div>  
            </div>      
        </div>
    );
}

export default Recipe;