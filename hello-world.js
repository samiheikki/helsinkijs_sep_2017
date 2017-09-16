const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host{
      display: block;
    }
  </style>
  <h1></h1>
`;

class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get text() {
    return this.getAttribute('text');
  }

  set text(val) {
    this.setAttribute('text', val);
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'text') {
      this.shadowRoot.querySelector('h1').innerText = newValue;
    }
  }
}

customElements.define('hello-world', HelloWorld);