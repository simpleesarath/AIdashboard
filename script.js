const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessageButton = document.getElementById('sendMessage');

sendMessageButton.addEventListener('click', sendMessage);

function sendMessage() {
    const messageText = chatInput.value.trim();
    
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user');
        messageElement.textContent = messageText;
        
        chatMessages.appendChild(messageElement);
        chatInput.value = '';

        // Simulate a response from a support agent after a delay
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.classList.add('chat-message', 'support');
            responseElement.textContent = 'Thank you for your message! A support agent will assist you shortly.';
            
            chatMessages.appendChild(responseElement);
        }, 1000);
    }
}
