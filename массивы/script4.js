class audienceList{
    constructor(nam, places,faculty){
    this.nam = nam;
    this.places = places;
    this.faculty = faculty; 
    }
}

let technology = new audienceList('Большая аудитория', 20,  'технологический факультет');
let legal = new audienceList('Маленькая аудитория', 10, 'Юридический факультет');
let building = new audienceList('Средняя аудитория', 15, 'Строительный факультет');

const audience = [technology, legal, building];

//Вывод на экран всех аудиторий.
function conclusion(){
    return `${technology.nam}: ${technology.places} мест,  ${technology.faculty};<br>
            ${legal.nam}: ${legal.places} мест, ${legal.faculty};<br>
            ${building.nam}: ${building.places} мест, ${building.faculty};<hr>`;
}

//Вывод на экран аудиторий для указанного факультета
function specifiedAudience(){
    let arr = audience;
    let newElement = prompt('Введите наименование аудитории: \nБольшая аудитория \nСредняя аудитория \nМаленькая аудитория');
        for(let element of arr){
            if(newElement === element.nam){
                return `${element.nam}: ${element.places} мест, ${element.faculty};<hr>`;
            }    
        }
    return 'Аудитория не найденна; <hr>';
}

// сортировка
function compareFunction(a, b){
    if(a.places > b.places){
        return -1;
    }
    if(a.places < b.places){
        return 1;
    }
    return 0;
}

//Вывод на экран только тех аудиторий, которые подходят
function conclusionAudience(){
    let arr = audience;
    let nElement = new audienceList(
        prompt('Введите название группы'),
        prompt('Введите количество мест'),
        prompt('Введите название факультета'),
    )
    for(let element of arr){
        if(element.faculty === nElement.faculty && element.places > nElement.places){
            return `${element.nam}: ${element.places} мест, ${element.faculty};<hr>`;     
        }
    }    
    return 'Нет подходящих аудиторий;<hr>';
}

document.write(`${conclusion(audience)}`);
document.write(`${specifiedAudience(audience)}`);
document.write(`${conclusionAudience(audience)}`);
const sortAudience = [...audience].sort(compareFunction);// сортированный массив
// document.write(`${conclusion(sortAudience)}`);
console.table(sortAudience);


// console.table(audience);



// console.log(specifiedAudience(audience));
// ;






