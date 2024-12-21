const content= document.querySelector('.content');
const btn= document.querySelector('.btn');

btn.addEventListener('click', function(){
    content.classList.toggle('active');
})