const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const HIDDEN_CLASSNAME = "hidden";

function onLogin(event){
    event.preventDefault();
    const username = loginInput.value;
    loginGreeting.innerText = `Hello, ${username}! 👋`;
    loginGreeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLogin);

const savedUsername = localStorage.getItem("username");
if (savedUsername !== null) {
    loginGreeting.innerText = `Hello, ${savedUsername}! 👋`;
    loginGreeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}