// ShadowDOM is used for the encapsulating the web component to prevent it from interacting with reset of the code
// ShodowDOM allows hidden DOM to attach to the element of the regular DOM
// ShadowDOM starts with the shadow root underneath we can attach any element


// Shadow Host :-- Regular DOM node to which the Shadow DOM is attached
// Shadow Tree :-- The DOM tree inside the ShadowDOM
// Shadow Boundary :-- The place where shadow DOM ends ands regular DOM begins
// Shadow Root :-- The root node of the shadow tree


// Shadow DOM Declaration
    // For Client Side Application :-- Creating Shadow DOM through JS API is an effective way 
    // For Server Side Application :-- Creating Shadow DOM through HTML Element is an effective way 

// There are two type of mode in ShadowDOM
    // open :-- Shadow DOM allows the JS to break the encapsulation
    // closed :-- Shadow DOM is stricly encapsultated

        // Recommended is not consider strictly security mechanism, because there are ways it can be envaded


const root = document.querySelector("#root")
const shadowElement = root.attachShadow({mode: "open"})
const span = document.createElement("span")
span.innerText = "I am inside the Shadow DOM"
shadowElement.appendChild(span)


// Excessing the Shadow DOM 
const upperCaseBtn = document.querySelector('#upperCase')
const upperCaseShadowRootBtn = document.querySelector('#upperCaseShadowRoot')

const reoloadBtn = document.querySelector("#reloadDOM")

upperCaseBtn.addEventListener("click", ()=>{
    const all_spans = Array.from(document.querySelectorAll('span'))

    for(const span of all_spans){
        span.innerText = span.innerText.toUpperCase()
    }

})

upperCaseShadowRootBtn.addEventListener("click", ()=>{
    const host = document.querySelector("#host")
    const all_spans = Array.from(host.shadowRoot.querySelectorAll('span'))

    for(const span of all_spans){
        span.innerText = span.innerText.toUpperCase()
    }

})


reoloadBtn.addEventListener("click", ()=>{
    document.location.reload()
})