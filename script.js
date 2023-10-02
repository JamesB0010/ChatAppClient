import {io} from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let chatArea = document.getElementById("ChatArea");
let chatTextColor = "white";
let chatBackgroundColor = "#333333";
let room = "";

document.body.scrollLeft = document.body.scrollWidth;

const socket = io("http://localhost:3000");

function setRoom(newRoom){
    room = newRoom;
    socket.emit("JoinRoom", room, message =>{
        displayText(message);
    });
}

function displayText(text){
    if(text == ""){
        if (input1.value == "") return;
        chatArea.innerHTML += `<p style = 'background-color: ${chatBackgroundColor}; color: ${chatTextColor};'>` + input1.value + `</p>`;
        chatArea.scrollTop = chatArea.scrollHeight;
        invertChatTextAndBackgroundColor();
        input1.value = "";
    }
    else{
        chatArea.innerHTML += `<p style = 'background-color: ${chatBackgroundColor}; color: ${chatTextColor};'>` + text + `</p>`;
        chatArea.scrollTop = chatArea.scrollHeight;
        invertChatTextAndBackgroundColor();
    }
}

function invertChatTextColor(){
    chatTextColor = chatTextColor == "white"? "black":"white";
}

function invertChatBackgroundColor(){
    chatBackgroundColor = chatBackgroundColor == "#989898"? "#333333":"#989898";
}

function invertChatTextAndBackgroundColor(){
    invertChatTextColor();
    invertChatBackgroundColor();
}


function SendMessage(){
    socket.emit("SendMessage", input1.value, room);
    displayText("");
}

input1.addEventListener("keypress", (event) => {
    console.log(event.key);
    if(event.key == "Enter"){
        event.preventDefault();
        SendMessage();
    }
})

input2.addEventListener("keypress", (event) => {
    console.log(event.key);
    if(event.key == "Enter"){
        event.preventDefault();
        setRoom(input2.value);
    }
})


socket.on("connect", () => {
    input1.value = `You have connected with id: ${socket.id}`;
    displayText("");
})

socket.on("RecieveMessage", message =>{
    displayText(message);
})
