function СheckList(name, amount, valuable){
    this.name = prompt ('Введите наименование товара');
    this.amount = +prompt ('Введите количестов товара');
    this.valuable = +prompt ('Введите ценну товара');
}

// формирование списка
function list(){
    let amount = +prompt ('Введите количестов позиций');
    let arr = [];
    for(let i = 0; i < amount; ++i){
            arr[i]= new СheckList;           
    }   return arr;
}

//Формирования чека
function check(){
    let arr = checkLists;
    let counter = "";
    let total = 0;
        for(let element of arr){ 
            counter += `${element.name}: ${element.amount} шт,  ${element.valuable} едениц;<br>`;
        }
        counter += '<hr>'
        for(let element of arr) {
            total += element.valuable;            
        } 
        counter += `Итого: ${total} едениц;<br>`;  
    return counter;
}   



 
const checkLists = list();
console.table(checkLists);
document.write(check(checkLists));  
console.table(check(checkLists));



/*

// СОРТИРОВКА
function compareFunction(a, b){
    if(a.purchase > b.purchase){
        return -1;
    } if(a.purchase < b.purchase){
        return 1;
    }   
    return 0;
}

// добавление в список
function addList(){
    let arr = shoppingList; 
    let newElement = new Prduct;
    for(let element of arr){
        if(newElement.name === element.name){
            element.amount += newElement.amount; 
            return arr;
        }
        return arr.concat(newElement);
    }    
}

//получает покупку
function getPurchase(){
    let arr = newShoppingList;
    let newElement = prompt ('Введите наименование');
    for(let element of arr){
        if(newElement === element.name){
            element.purchase = "Товар куплен";  
        } if(element.purchase === "да"){
            element.purchase = "Товар куплен";
        } if(element.purchase === "нет"){
            element.purchase = "Товар не куплен";
        }
    }    
    return arr;
}

const checkList = list(); // новый список
const newShoppingList = addList(); // добавленый список
const sortShoppingList = [...shoppingList].sort(compareFunction); // сортированный список
const getList = getPurchase(); // купленный лист


console.table(shoppingList);
console.table(getList);

*/