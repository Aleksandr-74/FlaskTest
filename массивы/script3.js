
class Style{
    constructor (name, meaning){
        this.name = name;
        this.meaning = meaning;
    }
}

function styles(){
    return `<style> p{
        ${color.name}: ${color.meaning};
        ${font.name}: ${font.meaning}px;
        ${underline.name}: ${underline.meaning};     
        }</style>`;
};

let color = new Style ('color', 'green');
let font = new Style ('font-size' , 20);
let underline = new Style('text-decoration', 'underline');
let objectStyle = [color, font, underline];

document.write(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> ${styles(objectStyle)}`);
