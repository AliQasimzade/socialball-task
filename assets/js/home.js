const viewChallengeBtn = document.querySelector('.view_challenge_btn');
const challengeListContainer = document.querySelector('.challenge_list_container');

viewChallengeBtn.addEventListener('click', () => {
    viewChallengeBtn.querySelector('img').classList.toggle('rotate-180')
    challengeListContainer.classList.toggle('show');
})
