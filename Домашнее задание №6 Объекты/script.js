function auto(brand, year, model, averageSpeed){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
    this.getInfo = function(){
        return `Производитель: ${this.brand}; 
                Модель: ${this.model};<br> 
                Год выпуска: ${this.year};<br> 
                Средняя скорость: ${this.averageSpeed} км;<br>`;
    }
    this.averageTime = function(){
        let distance = +prompt('Ведите нужное растояние в км');
        let time = distance / this.averageSpeed;
        let hours = Math.floor(time);
        let minutes = Math.floor((time - hours) * 60);
        if(hours > 4){
            hours++;
        }
        return `Для преодоления ${distance} км необходимо ${hours} часа,  ${minutes} минут;` 
    }
}




let BMW = new auto('BMW', 2015, 5, 90);
document.write(`${BMW.getInfo()}`);
document.write(`${BMW.averageTime()}`);