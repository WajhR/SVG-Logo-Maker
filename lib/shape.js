class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape,
        this.shapeColor = shapeColor,
        this.text = text,
        this.textColor = textColor
    }

    getShape() {
        return this.shape
    }

    getShapeColor() {
        return this.shapeColor
    }
    
    getText() {
        return this.text
    }

    getTextColor() {
        return this.textColor
    }
}

module.exports = Shape