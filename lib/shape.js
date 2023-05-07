class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
         this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    };
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points = "150,20 250,180 50,180" fill="${this.color}"/>`
    };
}

class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" y="20" fill="${this.color}"/>`
    };

};

module.exports = { Triangle, Circle, Square }
