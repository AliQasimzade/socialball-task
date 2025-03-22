const searchInput = document.getElementById('search_input');
const messagesContainer = document.querySelector('.messages_container .wrapper');

const messages = [
    {
        id: 1,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: 2
    },
    {
        id: 2,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: 2
    },
    {
        id: 3,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: "Sent 2h ago"
    },
    {
        id: 4,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: "Sent 2h ago"
    }

];


let filter = [
    {
        id: 1,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: 2
    },
    {
        id: 2,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: 2
    },
    {
        id: 3,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: "Sent 2h ago"
    },
    {
        id: 4,
        image_path: "./assets/images/user.jpg",
        fullname: "Javid Manafov",
        last_message: "Hello",
        last_date: new Date("2025-11-25"),
        hour_or_count: "Sent 2h ago"
    }

];

messagesContainer.innerHTML = `<div class="loader-container">
        <div class="loader"></div>
    </div>`;

const renderMessages = () => {
    messagesContainer.innerHTML = "";

    if (filter?.length > 0) {
        filter.forEach(data => messagesContainer.innerHTML += `
            <a href='message-write.html' class="message_box">
                           <figure>
                               <div class="user_img">
                                   <img src='${data?.image_path}' alt="user" loading="lazy" />
                               </div>
                               <figcaption>
                                   <span>${data?.fullname}</span>
                                   <span class="last_message">${data?.last_message}</span>
                               </figcaption>
                           </figure>
   
                           <div class="last_message_date_info">
                               <span class="last_message_date ${typeof data?.hour_or_count != "number" && 'hour'}">${data?.last_date?.toLocaleDateString('en-GB', {
            day: "numeric",
            month: "short",
        })}</span>
                               <span class="total_count_or_hour ${typeof data?.hour_or_count == "number" ? 'count' : 'hour_ago'}">${data?.hour_or_count}</span>
                           </div>
                       </a>
           
           `)
    } else {
        messagesContainer.innerHTML = "<h2 class='not_found_data_text'>Məlumat yoxdur</h2>"
    }
};

setTimeout(() => renderMessages(), 1000);

const filterMessageUser = (e) => {
    messagesContainer.innerHTML = `<div class="loader-container">
        <div class="loader"></div>
    </div>`;

    setTimeout(() => {
        const filterResult = [...messages]?.filter(data => data?.fullname?.toLocaleLowerCase()?.includes(e.target.value?.toLocaleLowerCase()));
        filter = [...filterResult];
        renderMessages()
    }, 1000)
}

searchInput.addEventListener('input', (e) => filterMessageUser(e));