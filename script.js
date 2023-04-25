document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("chatInput").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    var inputElement = document.getElementById("chatInput");
    var message = inputElement.value.trim();
    if (message !== "") {
        var chatMessagesElement = document.getElementById("chatMessages");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.textContent = message;
        chatMessagesElement.appendChild(messageElement);
        inputElement.value = "";
        chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }
}
