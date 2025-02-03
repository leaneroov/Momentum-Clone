const loginForm = document.querySelector("#login-form");
const todoForm = document.querySelector("#todo-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const welcome = document.querySelector("#welcome");
const box = document.querySelector("#box");
const todomain = document.querySelector('.todo-main');
const icons = document.querySelector(".icons")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TODOS_ON_LOCALSTORAGE = localStorage.getItem('todos');

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `✨ Hello ${username} ✨`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // if (TODOS_ON_LOCALSTORAGE === undefined || JSON.parse(TODOS_ON_LOCALSTORAGE).length === 0) {
    //     console.log("fuck")
    //     todoForm.classList.remove(HIDDEN_CLASSNAME);
    // }
    box.classList.remove(HIDDEN_CLASSNAME);
    welcome.classList.remove(HIDDEN_CLASSNAME);
    icons.classList.remove(HIDDEN_CLASSNAME);
    todomain.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

// create : 만들다
// append : 추가하다, 할당하다

// child = document.createElement('div');
// parent.append(child);