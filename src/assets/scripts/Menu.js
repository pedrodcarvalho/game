const root = document.getElementById('root');

class Menu {
    constructor() {
        this.menuTitle = document.createElement('h1');

        this.menuTitle.classList.add('font-lg', 'absolute', 'flex');

        this.menuTitle.innerHTML += 'Animal Life <span class="animal-font"></span>';

        root.appendChild(this.menuTitle);
    }

    footPrint() {
        setInterval(() => {
            this.menuTitle.childNodes[1].textContent = `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}`;;
        }, 1000);
    }
}

export default Menu;
