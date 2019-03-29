import React from 'react';

const NutritionComparison = (props) =>{
    return(
        <div className="nutrition-comparison">
            <p className="large-text">See the the nutrient comparison below</p>
            <i className="fas fa-chevron-down "></i>

            <div className="compare-wrapper">
                <div className="comparisons">
                    <NutritionList data={props.data.kibble}/>
                    <NutritionList data={props.data.recipe} brand={true}/>
                </div>
                <p className="padding-bottom-large large-text">Learn about <a href="https://www.nomnomnow.com/learn/pet-expert/understanding-dog-food-nutrients" className="orange-text">the role of protein, fat, and carbs</a> in a dog's diet.</p>
                <p className="padding-bottom-large small-text">* All units above are given in grams per 1000 calories (g/kcal).</p>
            </div>
            <p>The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer. NomNomNow is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above.</p>

            <div className="cta-wrapper">
                <h1>Ready to go fresh?</h1>

                    <a className="cta-button" href="https://www.nomnomnow.com/profile">Let's get started</a>

            </div>
        </div>
    )
}

const NutritionList = (props) =>{
    return(
        <div className="nutrition-list">
            <img className={`nutrition-image ${props.brand? "" : "hide"}`} src="https://www.nomnomnow.com/images/logo_utensils.svg" alt=""/>
            <p className={`name ${props.brand? "black": ""}`}>{props.data.name.substring(0,40)}</p>
            <label>Protein{props.brand? "*" : ""}</label>
            <h1 className={`${props.brand? "orange-text" : ""}`}>{props.data.protein}</h1>
            <label>Fat</label>
            <h1 className={`${props.brand? "blue-text" : ""}`}>{props.data.fat}</h1>
            <label>Carbohydrate</label>
            <h1 className={`${props.brand? "yellow-text" : ""}`}>{props.data.carbs}</h1>
        </div>
    )
}

export default NutritionComparison;