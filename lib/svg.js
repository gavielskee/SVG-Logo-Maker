
class SVG {
    constructor() {
        this.svgText = ``;
        this.svgShape = ``;
    }
    setText(message, color) {
        this.message = message;
        this.color = color;
        if (message.length > 3) {
            throw new Error("Text must not exceed 3 characters.")
        } else if (message && color) {
            this.svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.message}</text>`
        }
    }
    setShape(shape) {
        if (shape) {
            this.svgShape = shape.render()
        }
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgShape}${this.svgText}</svg>`
    };
};
