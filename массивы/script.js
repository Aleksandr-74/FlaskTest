function Prduct(name, amount, purchase){
    this.name = prompt ('Введите наименование');
    this.amount = +prompt ('Введите количестов');
    this.purchase = prompt ('куплен: да или нет');
}

// формирование списка
function list(){
    let amount = +prompt ('Введите количестов продуктов');
    let arr = [];
    for(let i = 0; i < amount; ++i){
            arr[i]= new Prduct;           
    }   return arr;
}

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

const shoppingList = list(); // новый список
const newShoppingList = addList(); // добавленый список
const sortShoppingList = [...shoppingList].sort(compareFunction); // сортированный список
const getList = getPurchase(); // купленный лист


console.table(shoppingList);
console.table(getList);

