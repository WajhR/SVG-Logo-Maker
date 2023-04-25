function createSVG(shapeData) {
    console.log(shapeData)
    if (shapeData.getShape() === "circle") {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill=${shapeData.getShapeColor()} />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${shapeData.getTextColor()}>${shapeData.getText()}</text>
      
        </svg>
        `
    }

    if (shapeData.shape === "triangle") {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
        </svg>
        `
    }

    if (shapeData.shape === "square") {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
        </svg>
        `
    }
}

module.exports = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${createSVG(data)}
    </body>
    </html>
    `
}