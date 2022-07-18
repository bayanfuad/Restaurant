`use strict`
const foodArr = [];
function Food(foodName,type,price){
    this.foodID = this.uniqueNum();
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    console.log(this);
    foodArr.push(this);
};

Food.prototype.uniqueNum = function(){
    this.foodID = Math.floor(Math.random() * (9999 -1000) ) +1000;
   return this.foodID;
}
const formEl = document.getElementById("formID");
formEl.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
// let foodID = event.target.foodID.value;
let  foodName = event.target.foodName.value;
let type = event.target.type.value;
let price = event.target.price.value;
const newType = new Food (foodName,type,price);

newType.tableRender();
saveData();

};
// console.log(e);
// console.log(foodArr);

// const newType = new Food(foodID,foodName,type,price);



// let table= document.createElement();
Food.prototype.tableRender = function(){
    const rendata = document.getElementById("tab");
    const tabRow = document.createElement("tr");
    const tabdata1 = document.createElement("td");
    const tabdata2 = document.createElement("td");
    const tabdata3 = document.createElement("td");
    const tabdata4 = document.createElement("td");
    tabdata1.textContent = this.foodID;
    tabdata2.textContent = this.foodName;
    tabdata3.textContent = this.type;
    tabdata4.textContent = this.price;
    tabRow.appendChild(tabdata1);
    tabRow.appendChild(tabdata2);
    tabRow.appendChild(tabdata3);
    tabRow.appendChild(tabdata4);
    rendata.appendChild(tabRow);
    // const newType = new Food(foodID,foodName,type,price);
}
// Food.prototype.uniqueNum = function(){
//     this.foodID = Math.floor(Math.random() * (9999 -1000) ) +1000;
//    return this.foodID;
// }
// for (let i=0; i<foodArr.length; i++){
//     foodArr[i].tableRender ();
// }

function saveData(){
    let stringifyedData = JSON.stringify(foodArr)
    localStorage.setItem("food",stringifyedData)
  
};




function getData(){
    let retrievedData = localStorage.getItem("food");
    let parsedData = JSON.parse(retrievedData);
    if (parsedData != null){
    // for (i = 0; i < parsedData.length; i++){
    //     newType = new Food (parsedData[i].foodID,parsedData[i].foodName,parsedData[i].type,parsedData[i].price);
    //     newType.tableRender();
    // }
    newType = new Food (parsedData[0].foodID,parsedData[0].foodName,parsedData[0].type,parsedData[0].price);
      newType.tableRender();
}
}
getData();