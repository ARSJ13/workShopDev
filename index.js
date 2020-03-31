const adicionar = document.querySelector('.adicionar');
adicionar.addEventListener('click', function onOff(){
    document.querySelector('#modal')
    .classList
    .toggle('hide')
})
function newIdea(){
    document.querySelector('#modal')
    .classList
    .toggle('hide');

    document.querySelector('body')
    .classList
    .toggle('hideScroll');

    document.querySelector('#modal')
    .classList
    .toggle('addScroll');
}