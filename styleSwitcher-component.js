
class StyleSwitcherComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           
        <button id="button1" class="styleButtonClass" onclick="swapColorStyleSheet('color1.css')">&#9673</button>
        <button id="button2" class="styleButtonClass" onclick="swapColorStyleSheet('color3.css')">&#9673</button>
        <button id="button3" class="styleButtonClass" onclick="swapColorStyleSheet('color2.css')">&#9673 </button>
        <button id="button4" class="styleButtonClass" onclick="swapColorStyleSheet('color4.css')">&#9673 </button>
        
        `;
    }
}
customElements.define('style-switcher-component', StyleSwitcherComponent);

