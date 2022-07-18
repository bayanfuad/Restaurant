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

// console.log(parsedData);
let retrievedData = localStorage.getItem("food");
let parsedData = JSON.parse(retrievedData);
function newRender(){
    // let retrievedData = localStorage.getItem("food");
    // let parsedData = JSON.parse(retrievedData);
    if (parsedData != null){
    for (let i =0; i<parsedData.length;i++){
const rendata = document.getElementById("tab");
    const tabRow = document.createElement("tr");
    const tabdata1 = document.createElement("td");
    const tabdata2 = document.createElement("td");
    const tabdata3 = document.createElement("td");
    const tabdata4 = document.createElement("td");
    // if (parsedData != null){
    // for (let i =0; i<parsedData.length;i++){
    tabdata1.textContent =parsedData[i]["foodID"];
    tabdata2.textContent = parsedData[i]["foodName"];
    tabdata3.textContent = parsedData[i]["type"]
    tabdata4.textContent = parsedData[i]["price"];
// }
    // }
    tabRow.appendChild(tabdata1);
    tabRow.appendChild(tabdata2);
    tabRow.appendChild(tabdata3);
    tabRow.appendChild(tabdata4);
    rendata.appendChild(tabRow);
}
    }
}
newRender();
let names =[];
let prices =[];
for ( let i=0; i<parsedData.length;i++){
names.push(parsedData[i].foodName)
prices.push(parsedData[i].price)
}


  const data = {
    labels: names,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: prices,
    }]
  };

 
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );