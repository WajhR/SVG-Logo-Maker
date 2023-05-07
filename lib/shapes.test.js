// Imports the Circle, Square, and Triangle shape classes from the shape.js module. 


const {Triangle, Circle, Square} = require('./shape.js');
// const {Circle, Triangle, Square} = require ('./shape');

// The test will check whether the shapes are rendered correctly. 
// Circle Shape

describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color ='blue'
      shape.setColor(color);
     expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
    });
  });

  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        var test = shape.render()
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" y="20" fill="${color}"/>`);
      });
    });
    
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points = "150,20 250,180 50,180" fill="${color}"/>`);
      });
    });