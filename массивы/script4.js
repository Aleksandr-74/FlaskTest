
function audienceList(nam, places,faculty){
    this.nam = nam;
    this.places = places;
    this.faculty = faculty; 
};

let technology = new audienceList('Большая аудитория', 20,  'технологический факультет');
let legal = new audienceList('Маленькая аудитория', 10, 'Юридический факультет');
let building = new audienceList('Средняя аудитория', 15, 'Строительный факультет');

const audience = [technology, legal, building];

//Вывод на экран всех аудиторий.
function conclusion(){
    return `${technology.nam}: ${technology.places} мест,  ${technology.faculty};<br>
            ${legal.nam}: ${legal.places} мест, ${legal.faculty};<br>
            ${building.nam}: ${building.places} мест, ${building.faculty};<hr>`;
};

document.write(`${conclusion(audience)}`);

//Вывод на экран аудиторий для указанного факультета
function specifiedAudience(){
    let arr = audience;
    let newElement = prompt ('Введите наименование аудитории: \nБольшая аудитория \nСредняя аудитория \nМаленькая аудитория');
        for(let element of arr){
            if(newElement === element.nam){
                return document.write(`${element.nam}: ${element.places} мест, ${element.faculty};<hr>`);
            }    
        }
    return  alert('Аудитория не найденна');
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

/*
conclusionAudience(){
    let arr = audience;
    let new Element = {
        this.nam = prompt('Введите название аудитории');
        this.places = prompt('Введите количество мест');
        this.faculty = prompt('Введите название факультета');
    }

    for(let i=0; i < 3; ++i){
         = 
        
    }
        
}

*/

console.table(audience);

const sortAudience = [...audience].sort(compareFunction);// сортированный массив

console.log(specifiedAudience(audience));
console.table(sortAudience);






