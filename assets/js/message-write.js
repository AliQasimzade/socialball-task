const messageText = document.getElementById('message_text');
const sendBtn = document.querySelector('.send_btn');
const messagesContainer = document.getElementById('messages_content');

let messages = [
    {
        id: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        time: "18:36",
        sended: false
    }, {
        id: 2,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: "18:36",
        sended: true
    }
];


const renderMessages = () => {
    messagesContainer.innerHTML = "";

    messages.forEach(data => messagesContainer.innerHTML += `
         <div class="message_box">
                        <div class="message ${data?.sended ? 'your_message' : ''} ${data?.sended ? 'align-self-end' : ''}">
                            <p>${data?.message}</p>
                        </div>
                        <span class="message_time ${data?.sended ? 'text-right' : ''}">${data?.time}</span>
                    </div>
        `)
};

renderMessages();


const randomMessageToYou = () => {
    const sendMessageObj = {
        message: "Salam yaxsiyam sen necəsən ?",
        sended: false,
        time: new Date().toLocaleTimeString()?.split(":")?.filter((_, idx) => idx != 2)?.join(":")
    };

    messages = [...messages, sendMessageObj];

    setTimeout(() => {
        renderMessages()
    }, 500)
}

const sendMessage = () => {
    const messageRegex = /^[a-zA-Z0-9.,!? ]+$/;
    const message = messageText.value.trim();

    if (message === "") {
        alert('Xananı doldurun!')
    }

    if (!messageRegex.test(message)) {
        alert('Yalnızca hərflər, rəqəmlər, boşluqlar və durğu işarələrinə icazə verilir')
    }

    const sendMessageObj = {
        message: messageText.value,
        sended: true,
        time: new Date().toLocaleTimeString()?.split(":")?.filter((_, idx) => idx != 2)?.join(":")
    };

    messages = [...messages, sendMessageObj];

    messageText.value = "";

    setTimeout(() => {
        renderMessages()
    }, 500);

    setTimeout(() => {
        randomMessageToYou();
    }, 1500)

}

sendBtn.addEventListener('click', sendMessage);