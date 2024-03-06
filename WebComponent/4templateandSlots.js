// Template <template> :-- If we want the markup to be used repeatedly across the page then we wrap it inside the <template> tag

// The elements are not rendered in the DOM but still we can access using JavaScript

const template = document.querySelector("#my-paragraph")
const templateContent = template.content.cloneNode(true);
document.querySelector("#tempalteSlots").appendChild(templateContent)



class TemplatesWithWebComp extends HTMLElement{
    
    constructor(){
        super();
        this.root = this.attachShadow({mode: "open"}) 
        // Tempate Node
        const template = document.querySelector("#my-paragraph")
        const templateContent = template.content.cloneNode(true);
        
        // Slot Node 
        const slotTemplate = document.querySelector("#mySlotTag")
        const slotTemplateClone =  slotTemplate.content.cloneNode(true);

        this.root.appendChild(templateContent)
        this.root.appendChild(slotTemplateClone)
        
    }
}

customElements.define("template-webcomp", TemplatesWithWebComp)