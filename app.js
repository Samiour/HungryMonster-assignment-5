const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click',function(){
    const inputText =document.getElementById('searchBar').value;
    // console.log(inputText);
 

  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
.then(res=>res.json())
.then(data=>displayIngredient(data.meals));

const displayIngredient = ingredients => {
    const containerDiv=document.getElementById('ingredients');
    
    for(let i=0;i<=ingredients.length;i++){
    const itemIngredients=ingredients[i];
   
    const ingredientDiv  = document.createElement('div');
    ingredientDiv.className='ingredient';
   
   
    
    const mealInfo= `

    <img  src="${itemIngredients.strMealThumb}">
    <h3>${itemIngredients.strMeal}</h3>
    <button onclick="displayDetails('${inputText}')" >Details</button>
    
    `
    
    ingredientDiv.innerHTML=mealInfo;
    containerDiv.appendChild(ingredientDiv);
    }
}

})






function displayDetails(name){
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderInfo (data.meals[0]))
}

const renderInfo = element=>{
    const Info=document.getElementById('listItem');
    

     Info.innerHTML=`
     <p>Meal:${element.strMeal}</p>
    <p>MealID : ${element.idMeal}</p>
    <p>Category: ${element. strCategory}</p>
    <p>Area: ${element.strArea}</p>
    
   
   
    `
   }


    
    
   
    
    
