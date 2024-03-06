// Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

//There are two type of Custom Element 
    //1. Customized built in element
    //2. Autonomus Custom Element


class MyCustomElement extends HTMLElement{

    constructor(){
        super();

    }

    //We must define the attributes to be observed
    static get observedAttributes() {
        return ["color", "size"];
    }

    //When your custom element is registered, the browser will call certain method in the class called Lifecycle methods
    connectedCallback(){
        console.log("Element is added in the page");
    }

    disconnectedCallback(){
        console.log("Element is removed from the page");
    }

    adoptedCallback(){
        console.log("Element is moved to another page");
    }

    attributeChangedCallback(name, oldVa, newVal){
        console.log(`Attribute ${name} has changed`);
    }
}

customElements.define('my-custome-element', MyCustomElement)


// The define() method takes the following arguments:

// name
// The name of the element. This must start with a lowercase letter, contain a hyphen, and satisfy certain other rules listed in the specification's definition of a valid name.

// constructor
// The custom element's constructor function.

// options
// Only included for customized built-in elements, this is an object containing a single property extends, which is a string naming the built-in element to extend.






// For example, this code registers the WordCount customized built-in element:

// JS
// customElements.define("word-count", WordCount, { extends: "p" });
// This code registers the PopupInfo autonomous custom element:
    // <p is="word-count"></p>

// customElements.define("popup-info", PopupInfo);
    //<popup-info>
        // content of the element
    //</popup-info>
