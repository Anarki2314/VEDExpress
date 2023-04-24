function menu_link(item){

    item.closest('li').classList.toggle('active')
}
function menu_close(){
    let menu_full=document.querySelector('.menu_full');
    menu_full.classList.toggle('active');
}