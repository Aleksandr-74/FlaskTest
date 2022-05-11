function Fractions(hours, minutes, seconds){
    this.hours =  hours;
    this.minutes = minutes;
    this.seconds = seconds
    this.conclusion = function(){
        hours = String(Math.floor(hours / 10)) + hours % 10;
        minutes = String(Math.floor(minutes / 10)) + minutes % 10;
        seconds = String(Math.floor(seconds / 10)) + seconds % 10;
        return `${hours}:${minutes}:${seconds}`;
    }
    // this.timeChangeSeconds = function(){
    //     let getSeconds = +prompt ('Введите cекунды');
    //     seconds += getSeconds;
    //         if(seconds / 60 > 1){
    //             seconds = seconds % 60
    //         }


    // }
}

let time = new Fractions(1, 52,30);
console.log(time.conclusion());
/*
//Изменение времени
function (){

}
*/