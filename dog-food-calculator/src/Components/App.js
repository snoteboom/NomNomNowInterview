import React, { Component } from 'react';
import DropDown from './DropDown'
import FormField from '../Elements/FormField'
import NutritionComparison from '../Elements/NutritionComparison'
import CircularImage from '../Elements/CircularImage'
import '../App.css';
var vet_image = "https://www.nomnomnow.com/images/home/justin_square.jpg"
var dog_food_image = "https://www.nomnomnow.com//images/home/chicken_bowl_transparent.png"
var other_dog_food_data = {
    "Taste of The Wild" : [
        {
            name: "High Prairie Canine Recipe with Roasted Bison & Roasted Venison",
            protein: 32.0,
            fat: 18.0,
            calorie: 3719,
        },
        {
            name: "Pine Forest Canine Recipe with Venison & Legumes",
            protein: 28.0,
            fat: 15.0,
            calorie: 3600,
        },
        {
            name: "Southwest Canyon Canine Recipe with Wild Boar",
            protein: 29.0,
            fat: 15.0,
            calorie: 3600,
        }
    ],
    "Blue Buffalo" :[
        {
            name: "Life Protection Formula® Chicken and Brown Rice Recipe (For Puppies)",
            protein: 27.0,
            fat: 16.0,
            calorie: 3686,
        },
        {
            name: "Life Protection Formula® Fish and Brown Rice Recipe",
            protein: 22.0,
            fat: 14.0,
            calorie: 3619,
        }
    ],
    "Diamond Naturals" : [
        {
            name: "Skin & coat all life stages dog salmon & potato formula",
            protein: 25.0,
            fat: 14.0,
            calorie: 3600,
        },
        {
            name: "Adult Dog beef meal & rice formula",
            protein: 25.0,
            fat: 15.0,
            calorie: 3518,
        }
    ]
}

var nomNomNow_dog_food = [
    {
        name: "Porkalicious Potluck",
        protein: 78,
        fat: 63,
        carbs: 56,
    },
    {
        name: "Heartland Beef Mash",
        protein: 80,
        fat: 62,
        carbs: 55,
    },
    {
        name: "Chicken Chow-Wow",
        protein: 115,
        fat: 58,
        carbs: 31,
    },
    {
        name: "Tasty Turkey Fare",
        protein: 96,
        fat: 46,
        carbs: 78,
    }
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDogFood: null,
            selectedRecipe: nomNomNow_dog_food[0],
            foodComparison: null
        }
        ;
    }

    selectDogFood(food){

        this.setState({
            selectedDogFood: food
        },() => {
            this.compareFood();
        });
    }

    compareFood(){
        var foodComparison = this.state.foodComparison

        var recipe = this.state.selectedRecipe
        var food = this.state.selectedDogFood
        var foodProtein = ((food.protein + 1.5)* 10000)/food.calorie
        var foodFat = (food.fat + 1)/(food.calorie/10000)

        foodComparison = {
            "recipe": {
                name: this.state.selectedRecipe.name,
                protein: recipe.protein,
                fat: recipe.fat,
                carbs:  recipe.carbs,
            },
            "kibble": {
                name: food.name,
                protein: Math.round(foodProtein),
                fat: Math.round(foodFat),
                carbs: Math.round((1000 - (foodProtein * 3.5) - (foodFat * 8.5))/3.5)
            }
        }
        this.setState({
            foodComparison: foodComparison,
        })

    }

    selectRecipe(recipe){
        this.setState({
            selectedRecipe: recipe
        }, ()=>{
            if(this.state.selectedDogFood){
                this.compareFood()
            }
        });
    }

    render() {
        return (
          <div className="App">
              <div className="dog-food-calculator">
                  <div className="left-side">
                      <h1 className="header">Dog food comparison calculator</h1>
                      <div className="text-wrapper">
                          <div className="img-text-wrapper">
                              <CircularImage imgSrc={vet_image} altTxt ="NomNomNow's leading nutritionist"/>

                              <p><span className="blue-text">Dr. Shmalberg says</span>: We should feed by calorie, not by weight. Percentages on commercial dog food labels are not reliable because they are based on weight, and the values are affected by many factors, including moisture, fiber and minerals.</p>
                          </div>
                          <p>Use this calculator to get a more accurate picture of how another dog food brand compares with NomNomNow.
                          </p>
                      </div>

                      <div className="form-field-dropdowns">
                          <DropDown title="Name of dog food brand"
                                    list={other_dog_food_data}
                                    selected={this.state.selectedDogFood}
                                    hasSubCategory={true}
                                    select={this.selectDogFood.bind(this)}/>

                          <DropDown title="Compare with NomNomNow"
                                    list={nomNomNow_dog_food}
                                    selected={this.state.selectedRecipe}
                                    select={this.selectRecipe.bind(this)}/>
                      </div>
                      <div>
                          <p className="padding-bottom-small"> {this.state.selectedDogFood?<span className="bold-txt">{this.state.selectedDogFood.name}</span>  : "Dog food brand"}'s nutrient info:</p>

                          <div className="form-wrap">
                              <FormField placeholder=""
                                         title={"% protein (min.)"}
                                         selectable={false}
                                         selected={this.state.selectedDogFood ?
                                             this.state.selectedDogFood.protein + "%" : null}/>
                              <FormField placeholder=""
                                         title={"% fat (min.)"}
                                         selectable={false}
                                         selected={this.state.selectedDogFood ?
                                             this.state.selectedDogFood.fat + "%" : null}/>
                              <FormField placeholder=""
                                         title={"Caloric density (kcal/kg)"}
                                         selectable={false}
                                         selected={this.state.selectedDogFood ?
                                             this.state.selectedDogFood.calorie : null}/>
                          </div>
                      </div>
                      {this.state.foodComparison? <NutritionComparison data={this.state.foodComparison}/> : null}
                  </div>
                  <div className="right-side" >
                      <img className="dog-food" src={dog_food_image} alt="Yummy NomNomNow Dog Food"/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;


