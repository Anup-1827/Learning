class MyShadowRootCustomElement extends HTMLElement{

    constructor(){
        super();
    }

    static observedAttributes(){
        return ["color"]
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode : "open"})

        const svg = document.createElementNS("https://www.w3.org/2000/svg", "svg")
        const circle = document.createElementNS("https://www.w3.org/2000/svg", "circle")

        circle.setAttribute("cx", "50")
        circle.setAttribute("cy", "50")
        circle.setAttribute("r", "50")
        circle.setAttribute("fill", this.getAttribute("color"))

        svg.appendChild(circle)

        shadow.appendChild(svg)
    }
}


customElements.define("my-shadowroot", MyShadowRootCustomElement)