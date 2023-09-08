

class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color
    }
};

//Circle
class Circle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.logoColour}" />`;
    }
};

//Square
class Square extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<rect width="100" height="100" rx="15" fill="${this.logoColour}" />`;
    }
};

class Triangle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColour}" />`;
    }
};


module.exports = { Shape, Circle, Square, Triangle }