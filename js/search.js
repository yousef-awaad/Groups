const searchBox = document.getElementById('search');
const myElements = document.querySelectorAll('.top-results, .found, .hr');
const defaultdiv = document.querySelector('.default');
const Clickgroups = document.querySelector('.cgroups');
const Clickpeople = document.querySelector('.cpeople');
const groups = document.querySelector('.groups');
const people = document.querySelector('.people');
const hr = document.querySelector('.hr');



searchBox.addEventListener('input', () => {
    const searchText = searchBox.value.trim().toLowerCase();

    myElements.forEach(element => {
        if (searchText) {
            element.classList.remove('hidden');
            defaultdiv.classList.add('hidden');
        } else {
            element.classList.add('hidden');
            defaultdiv.classList.remove('hidden');
        }
    });
});

Clickgroups.addEventListener('click', () => {
    people.classList.add('hidden');
    hr.classList.add('hidden');
    groups.classList.remove('hidden');
});

Clickpeople.addEventListener('click', () => {
    groups.classList.add('hidden');
    hr.classList.add('hidden');
    people.classList.remove('hidden');
});
