const searchInput = document.getElementById('search_input');
const cardsContainer = document.querySelector('.events_container .events_wrapper');

const events = [
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        league_name: "Youth league competition",
        player_img_path: "./assets/images/footballer.jpg",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    },
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        player_img_path: "./assets/images/footballer.jpg",
        league_name: "Youth league competition",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    },
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        player_img_path: "./assets/images/footballer.jpg",
        league_name: "Youth league competition",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    },
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        player_img_path: "./assets/images/footballer.jpg",
        league_name: "Youth league competition",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    }
];

let filter = [
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        league_name: "Youth league competition",
        player_img_path: "./assets/images/footballer.jpg",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    },
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        player_img_path: "./assets/images/footballer.jpg",
        league_name: "Youth league competition",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    },
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        player_img_path: "./assets/images/footballer.jpg",
        league_name: "Youth league competition",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    },
    {
        id: 1,
        release_date: new Date("2024-11-15"),
        player_img_path: "./assets/images/footballer.jpg",
        league_name: "Youth league competition",
        avatars: [
            {
                id: 1,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 2,
                image_path: "./assets/images/avatar.jpg"
            },
            {
                id: 3,
                image_path: "./assets/images/avatar.jpg"
            }
        ],
        total_players_count: "1k"
    }
];

cardsContainer.innerHTML = `<div class="loader-container">
<div class="loader"></div>
</div>`;

const renderEvents = () => {
    cardsContainer.innerHTML = "";

    if (filter?.length > 0) {
        filter.forEach(data => {
            cardsContainer.innerHTML += `
            <div class="card_container">
                <img src="${data?.player_img_path}" alt="footballer" loading="lazy" class="card_main_img">
                <div class="card_overlay"></div>
                <div class="card_container_wrapper">
                    <span>${data?.release_date?.toLocaleDateString("tr-TR")}</span>
                    <p>${data?.league_name}</p>
                    <div class="avatars_container">
                       ${data?.avatars?.map(da => `
                            <button>
                                <img src="${da?.image_path}" alt="avatar" loading="lazy" />
                            </button>
                        `).join('')}
                        <button>
                            ${data?.total_players_count}
                        </button>
                    </div>
                </div>
                <div class="line"></div>
                <a href="event_detail.html">
                    <img src="./assets/images/up.svg" alt="up arrow" />
                </a>
            </div>`;
        });
    } else {
        cardsContainer.innerHTML = "<h2 class='not_found_data_text'>Məlumat yoxdur</h2>";
    }

};

setTimeout(() => renderEvents(), 1000)

const searchEvents = (e) => {

    cardsContainer.innerHTML = `<div class="loader-container">
        <div class="loader"></div>
    </div>`;

    setTimeout(() => {
        const filterResult = [...events]?.filter(data => data?.league_name?.toLocaleLowerCase()?.includes(e.target.value?.toLocaleLowerCase()));
        filter = [...filterResult];
        renderEvents();
    }, 1000);

};

searchInput.addEventListener('input', e => searchEvents(e));