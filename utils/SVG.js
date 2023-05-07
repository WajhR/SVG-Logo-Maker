class SVG {
    constructor(){
        this.incomingShape = "";
        this.incomingText = "";
    }

    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.incomingShape}${this.incomingText}</svg>`
    }

    putText(color, text){
        this.incomingText = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`
    }

    putShape(shape){
        this.incomingShape = shape.render();
    }


}

module.exports = SVG;

