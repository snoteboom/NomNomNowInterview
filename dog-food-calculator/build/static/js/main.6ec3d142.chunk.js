(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),s=a.n(l),c=(a(15),a(3)),r=a(4),i=a(6),m=a(5),d=a(7),u=a(1),p=function(e){return o.a.createElement("div",{className:"form-wrapper"},e.title?o.a.createElement("p",{className:"dropdown-title"},e.title):null,o.a.createElement("div",{className:"input-field ".concat(e.selected?"selected":"placeholder"),onClick:e.selectable?function(){return e.select()}:null},o.a.createElement("h1",{className:"field"},e.selected||e.placeholder||""),e.selectable?o.a.createElement("span",{className:"down-arrow"},"\u25be"):null))},h=function(e){return o.a.createElement("div",{className:"list-container"},e.list.map(function(t){return o.a.createElement("h1",{key:t.name,className:"row-text",onClick:function(){return e.select(t)}},t.name)}))},f=function(e){return o.a.createElement("div",{className:"dropdown-list"},e.hasSubCategory?Object.keys(e.list).map(function(t){return o.a.createElement("div",{className:"list",key:t},e.hasSubCategory?o.a.createElement("h1",{className:"category"},t):null,o.a.createElement(h,{list:e.list[t],select:e.selectItem}))}):o.a.createElement(h,{list:e.list,select:e.selectItem}))},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleClickOutside=function(e){var t=s.a.findDOMNode(Object(u.a)(Object(u.a)(a)));t&&t.contains(e.target)||a.setState({open:!1})},a.state={open:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"openDropDown",value:function(){this.setState({open:!this.state.open})}},{key:"selectItem",value:function(e){this.props.select(e),this.setState({open:!1})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickOutside,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickOutside,!0)}},{key:"render",value:function(){return o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(p,{selectable:!0,placeholder:"Select a dog food",select:this.openDropDown.bind(this),title:this.props.title,selected:this.props.selected?this.props.selected.name:null}),this.state.open?o.a.createElement(f,{list:this.props.list,hasSubCategory:this.props.hasSubCategory,selectItem:this.selectItem.bind(this)}):null)}}]),t}(n.Component),b=function(e){return o.a.createElement("div",{className:"nutrition-list"},o.a.createElement("img",{className:"nutrition-image ".concat(e.brand?"":"hide"),src:"https://www.nomnomnow.com/images/logo_utensils.svg",alt:""}),o.a.createElement("p",{className:"name ".concat(e.brand?"black":"")},e.data.name.substring(0,40)),o.a.createElement("label",null,"Protein",e.brand?"*":""),o.a.createElement("h1",{className:"".concat(e.brand?"orange-text":"")},e.data.protein),o.a.createElement("label",null,"Fat"),o.a.createElement("h1",{className:"".concat(e.brand?"blue-text":"")},e.data.fat),o.a.createElement("label",null,"Carbohydrate"),o.a.createElement("h1",{className:"".concat(e.brand?"yellow-text":"")},e.data.carbs))},w=function(e){return o.a.createElement("div",{className:"nutrition-comparison"},o.a.createElement("p",{className:"large-text"},"See the the nutrient comparison below"),o.a.createElement("i",{className:"fas fa-chevron-down "}),o.a.createElement("div",{className:"compare-wrapper"},o.a.createElement("div",{className:"comparisons"},o.a.createElement(b,{data:e.data.kibble}),o.a.createElement(b,{data:e.data.recipe,brand:!0})),o.a.createElement("p",{className:"padding-bottom-large large-text"},"Learn about ",o.a.createElement("a",{href:"https://www.nomnomnow.com/learn/pet-expert/understanding-dog-food-nutrients",className:"orange-text"},"the role of protein, fat, and carbs")," in a dog's diet."),o.a.createElement("p",{className:"padding-bottom-large small-text"},"* All units above are given in grams per 1000 calories (g/kcal).")),o.a.createElement("p",null,"The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer. NomNomNow is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above."),o.a.createElement("div",{className:"cta-wrapper"},o.a.createElement("h1",null,"Ready to go fresh?"),o.a.createElement("a",{className:"cta-button",href:"https://www.nomnomnow.com/profile"},"Let's get started")))},E={imgWrapper:{height:80,width:80,borderRadius:40,overflow:"hidden"},image:{height:80,width:80}},N=function(e){return o.a.createElement("div",{style:E.imgWrapper},o.a.createElement("img",{style:E.image,src:e.imgSrc,alt:""}))},v=(a(16),{"Taste of The Wild":[{name:"High Prairie Canine Recipe with Roasted Bison & Roasted Venison",protein:32,fat:18,calorie:3719},{name:"Pine Forest Canine Recipe with Venison & Legumes",protein:28,fat:15,calorie:3600},{name:"Southwest Canyon Canine Recipe with Wild Boar",protein:29,fat:15,calorie:3600}],"Blue Buffalo":[{name:"Life Protection Formula\xae Chicken and Brown Rice Recipe (For Puppies)",protein:27,fat:16,calorie:3686},{name:"Life Protection Formula\xae Fish and Brown Rice Recipe",protein:22,fat:14,calorie:3619}],"Diamond Naturals":[{name:"Skin & coat all life stages dog salmon & potato formula",protein:25,fat:14,calorie:3600},{name:"Adult Dog beef meal & rice formula",protein:25,fat:15,calorie:3518}]}),y=[{name:"Porkalicious Potluck",protein:78,fat:63,carbs:56},{name:"Heartland Beef Mash",protein:80,fat:62,carbs:55},{name:"Chicken Chow-Wow",protein:115,fat:58,carbs:31},{name:"Tasty Turkey Fare",protein:96,fat:46,carbs:78}],k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={selectedDogFood:null,selectedRecipe:y[0],foodComparison:null},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"selectDogFood",value:function(e){var t=this;this.setState({selectedDogFood:e},function(){t.compareFood()})}},{key:"compareFood",value:function(){var e=this.state.foodComparison,t=this.state.selectedRecipe,a=this.state.selectedDogFood,n=1e4*(a.protein+1.5)/a.calorie,o=(a.fat+1)/(a.calorie/1e4);e={recipe:{name:this.state.selectedRecipe.name,protein:t.protein,fat:t.fat,carbs:t.carbs},kibble:{name:a.name,protein:Math.round(n),fat:Math.round(o),carbs:Math.round((1e3-3.5*n-8.5*o)/3.5)}},this.setState({foodComparison:e})}},{key:"selectRecipe",value:function(e){var t=this;this.setState({selectedRecipe:e},function(){t.state.selectedDogFood&&t.compareFood()})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"dog-food-calculator"},o.a.createElement("div",{className:"left-side"},o.a.createElement("h1",{className:"header"},"Dog food comparison calculator"),o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("div",{className:"img-text-wrapper"},o.a.createElement(N,{imgSrc:"https://www.nomnomnow.com/images/home/justin_square.jpg",altTxt:"NomNomNow's leading nutritionist"}),o.a.createElement("p",null,o.a.createElement("span",{className:"blue-text"},"Dr. Shmalberg says"),": We should feed by calorie, not by weight. Percentages on commercial dog food labels are not reliable because they are based on weight, and the values are affected by many factors, including moisture, fiber and minerals.")),o.a.createElement("p",null,"Use this calculator to get a more accurate picture of how another dog food brand compares with NomNomNow.")),o.a.createElement("div",{className:"form-field-dropdowns"},o.a.createElement(g,{title:"Name of dog food brand",list:v,selected:this.state.selectedDogFood,hasSubCategory:!0,select:this.selectDogFood.bind(this)}),o.a.createElement(g,{title:"Compare with NomNomNow",list:y,selected:this.state.selectedRecipe,select:this.selectRecipe.bind(this)})),o.a.createElement("div",null,o.a.createElement("p",{className:"padding-bottom-small"}," ",this.state.selectedDogFood?o.a.createElement("span",{className:"bold-txt"},this.state.selectedDogFood.name):"Dog food brand","'s nutrient info:"),o.a.createElement("div",{className:"form-wrap"},o.a.createElement(p,{placeholder:"",title:"% protein (min.)",selectable:!1,selected:this.state.selectedDogFood?this.state.selectedDogFood.protein+"%":null}),o.a.createElement(p,{placeholder:"",title:"% fat (min.)",selectable:!1,selected:this.state.selectedDogFood?this.state.selectedDogFood.fat+"%":null}),o.a.createElement(p,{placeholder:"",title:"Caloric density (kcal/kg)",selectable:!1,selected:this.state.selectedDogFood?this.state.selectedDogFood.calorie:null}))),this.state.foodComparison?o.a.createElement(w,{data:this.state.foodComparison}):null),o.a.createElement("div",{className:"right-side"},o.a.createElement("img",{className:"dog-food",src:"https://www.nomnomnow.com//images/home/chicken_bowl_transparent.png",alt:"Yummy NomNomNow Dog Food"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6ec3d142.chunk.js.map