let count = 3;
let unread = document.querySelectorAll('.unread');

const plural = document.querySelector('.plural');
const countSpan = document.querySelector('.count');
const markAllAsRead = document.querySelector('.mark-all-read');

function mangeCount (count){
    countSpan.textContent =count;
    if(count<=1){
        plural.style.display= "none"; //removes the 's' from 'notifications'
    }
}
function removeDot (element){
    const dot = element.querySelector('* > .dot');
    dot.remove();
}
unread.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.classList.remove('unread');
        removeDot(element);
        count--;
        mangeCount(count);
        unread = document.querySelectorAll('.unread')
    })
})

markAllAsRead.addEventListener('click', () => {
    countSpan.textContent = 0;
    unread.forEach(element => {
        element.classList.remove('unread');
        removeDot(element);
    })
})