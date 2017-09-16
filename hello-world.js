const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host{
      display: block;
    }
  </style>
  <h1>Hello world!</h1>
`;

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('hello-world', HelloWorld);