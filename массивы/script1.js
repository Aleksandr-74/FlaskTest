
function List(nam, amount, purchase){
    this.nam = nam;
    this.amount = amount;
    // this.purchase = purchase; 
    this.purchaseInfo = function(){
        return this.purchase ? 'куплен' : 'не куплен'; 
    };
};

let tomato = new List('помидор', '1 кг', true);
let apple = new List('яблоки', '2 кг', false);
let bread = new List('хлеб', '1 бул. ', true);


let shoppingList = [tomato, apple, bread];

function compareFunction(a, b){
    if(a.purchaseInfo() > b.purchaseInfo()){
        return -1;
    }
    if(a.purchaseInfo() < b.purchaseInfo()){
        return 1;
    }
    return 0;
}
console.log(shoppingList.sort(compareFunction));



console.log(tomato.purchaseInfo());



// let objecte = shoppingList.sort(compareFunction);
// console.log(objecte);




// // Вывод всего списка продуктов: не купленые, купленные
// function getlist(){
//     for(let element of shoppingList){
//         if(element.purchaseInfo()){ 
//           alert(shoppingList.findIndex(i => i == element));

//         }
//     return shoppingList;
//     }
// }

// document.getElementById('li').innerHTML = getlist(shoppingList);


let amount = +prompt ('Введите количестов продуктов');
    let arr = [];
    for(let i = 0; i < 1; ++i){
        arr[i]=[];   
        for(let j = 0; j < amount; ++j){
            arr[i][j]= new Prduct;
        }         
    }  
    return arr;
}

