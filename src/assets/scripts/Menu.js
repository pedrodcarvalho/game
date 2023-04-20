const root = document.getElementById('root');

class Menu {
    constructor() {
        this.menu = document.createElement('div');
        this.menu.classList.add('menu', 'absolute', 'flex', 'column');

        root.appendChild(this.menu);
    }

    footPrint() {
        const menuTitle = document.createElement('h1');
        menuTitle.classList.add('font-lg', 'flex');
        menuTitle.innerHTML += 'Animal Life <span id="footprint" class="animal-font flex"></span>';

        this.menu.appendChild(menuTitle);

        setInterval(() => {
            menuTitle.childNodes[1].textContent = `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}`;;
        }, 1000);
    }

    account() {
        const fields = ['Create Account', 'Log In'];

        fields.map((field) => {
            const form = document.createElement('div');
            form.classList.add(`${field.toLowerCase().replace(' ', '-')}`, 'absolute', 'flex', 'column', 'hidden');

            const formTitle = document.createElement('h2');
            formTitle.classList.add('font-md', 'flex');
            formTitle.innerHTML = `${field}`;

            const formForm = document.createElement('form');
            formForm.classList.add('flex', 'column');
            formForm.setAttribute('action', `/${field.toLowerCase().replace(' ', '-')}`);
            formForm.setAttribute('method', 'POST');

            const formUsername = document.createElement('input');
            formUsername.classList.add('flex', 'input');
            formUsername.setAttribute('type', 'text');
            formUsername.setAttribute('name', 'username');
            formUsername.setAttribute('placeholder', 'Username');

            const formPassword = document.createElement('input');
            formPassword.classList.add('flex', 'input');
            formPassword.setAttribute('type', 'password');
            formPassword.setAttribute('name', 'password');
            formPassword.setAttribute('placeholder', 'Password');

            const formSubmit = document.createElement('input');
            formSubmit.classList.add('flex', 'input');
            formSubmit.setAttribute('type', 'submit');
            formSubmit.setAttribute('value', `${field}!`);

            formForm.appendChild(formUsername);
            formForm.appendChild(formPassword);
            formForm.appendChild(formSubmit);

            form.appendChild(formTitle);
            form.appendChild(formForm);

            this.menu.appendChild(form);
        });
    }

    menuButtons() {
        const accountButtons = ['Create Account', 'Log In'];
        const menuButtons = ['New Game', 'Load Game', 'Options', 'Credits'];

        accountButtons.map((buttonName) => {
            const button = document.createElement('button');
            button.classList.add('lg-btn', 'flex');

            button.innerHTML = `${buttonName}`;

            if (buttonName === 'Create Account') {
                button.addEventListener('click', () => {
                    const form = document.querySelector('.create-account');
                    form.classList.remove('hidden');
                });
            }
            else {
                button.addEventListener('click', () => {
                    const login = document.querySelector('.log-in');
                    login.classList.remove('hidden');
                });
            }

            this.menu.appendChild(button);
        });
    }
}

export default Menu;
