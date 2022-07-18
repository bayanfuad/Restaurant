// function getData(){
//     let retrievedData = localStorage.getItem("food");
//     let parsedData = JSON.parse(retrievedData);
//     if (parsedData != null){
//     for (i = 0; i < parsedData.length; i++){
//         let newType = (parsedData[i].foodID,parsedData[i].foodName,parsedData[i].type,parsedData[i].price);
//     //   newType.tableRender();
//     newType.newRender();
//     }
 
// }
// }
// getData();
let retrievedData = localStorage.getItem("food");
    let parsedData = JSON.parse(retrievedData);
console.log(parsedData);
function newRender(){
const rendata = document.getElementById("tab");
    const tabRow = document.createElement("tr");
    const tabdata1 = document.createElement("td");
    const tabdata2 = document.createElement("td");
    const tabdata3 = document.createElement("td");
    const tabdata4 = document.createElement("td");
    for (let i =0; i<parsedData.length;i++){
    tabdata1.textContent =parsedData[i]["foodID"];
    tabdata2.textContent = parsedData[i]["foodName"];
    tabdata3.textContent = parsedData[i]["type"]
    tabdata4.textContent = parsedData[i]["price"];
}
    tabRow.appendChild(tabdata1);
    tabRow.appendChild(tabdata2);
    tabRow.appendChild(tabdata3);
    tabRow.appendChild(tabdata4);
    rendata.appendChild(tabRow);
}
newRender();