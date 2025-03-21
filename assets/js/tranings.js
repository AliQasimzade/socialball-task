const searchInput = document.getElementById('search_input');
const cardsContainer = document.querySelector('.traning_scout_wrapper .traning_scout_container');

const tranings = [
    {
        id: 1,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    },
    {
        id: 2,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    },
    {
        id: 3,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    },
    {
        id: 4,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    }
];

let filter = [
    {
        id: 1,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    },
    {
        id: 2,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    },
    {
        id: 3,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    },
    {
        id: 4,
        user_img_path: "./assets/images/avatar.jpg",
        fullName: "Tom Cruise",
        position: "Coach",
        exercise_title: "Exercise program for the little ones",
        tags: [
            {
                id: 1,
                name: "12+ years old"
            },
            {
                id: 2,
                name: "Lorem"
            },
            {
                id: 3,
                name: "Lorem"
            },
            {
                id: 4,
                name: "Lorem impsum"
            },
            {
                id: 5,
                name: "Lorem impsum"
            },
            {
                id: 6,
                name: "+2"
            }
        ]
    }
];

cardsContainer.innerHTML = `<div class="loader-container">
<div class="loader"></div>
</div>`;

const renderTranings = () => {
    cardsContainer.innerHTML = "";

    if (filter?.length > 0) {
        filter.forEach(data => cardsContainer.innerHTML += `<div class="traning_scout_card">
                        <div class="card_head">
                            <figure>
                                <div class="user_img">
                                    <img src="${data?.user_img_path}" alt="user" loading="lazy" />
                                </div>
                                <div class="user_info">
                                    <span>${data?.fullName}</span>
                                    <figcaption>
                                        ${data?.position}
                                    </figcaption>
                                </div>
                            </figure>
                            <a href="traning_detail.html" class="traning_scout_link">
                                <img src="./assets/images/up_black.svg" alt="up" />
                            </a>
                        </div>
                        <div class="card_body">
                            <span class="exercise-title">Exercise program for the little ones</span>
                            <div class="tags">
                                ${data?.tags?.map(da => `<div class="tag">${da?.name}</div>`).join('')}
                            </div>
                        </div>
                    </div>`)
    } else {
        cardsContainer.innerHTML = "<h2 class='not_found_data_text'>Məlumat yoxdur</h2>";
    }
};

setTimeout(() => renderTranings(), 1000);

const searchTraning = (e) => {
    cardsContainer.innerHTML = `<div class="loader-container">
    <div class="loader"></div>
</div>`;

    setTimeout(() => {
        const filterResult = [...tranings]?.filter(data => data?.fullName?.toLocaleLowerCase()?.includes(e.target.value?.toLocaleLowerCase()));
        filter = [...filterResult];
        renderTranings();
    }, 1000);
}

searchInput.addEventListener('input', e => searchTraning(e));