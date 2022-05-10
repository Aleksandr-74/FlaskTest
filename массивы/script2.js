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

//получение самой дорогой покупки
function expensive(){
    let arr = checkLists;
    let  mElement = arr[0];
    for(let element of arr){
        if(mElement.valuable < element.valuable){
            mElement = element;
        }
    }
    return `Самая дорогая покупка ${mElement.name} стоит ${mElement.valuable} едениц;<br>`;
}
/*
//Подсчет средней стоимости
function averageCost(){
    let arr = checkLists;
    let total = 0;
    for(let element of arr){
        total += element.valuable;
    }
    total = total / arr.length; 
    return `Cредняя стоймость товара в чеке ${total} eдениц`;
}
*/

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
        counter += expensive();
        total = total / arr.length; 
        counter += `Cредняя стоймость товара в чеке ${total} eдениц`;
        // counter += averageCost();
    return counter;
}   

const checkLists = list();
console.table(checkLists);
document.write(check(checkLists));  
console.table(check(checkLists));
