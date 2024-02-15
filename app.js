const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
    search1.style.display = 'flex';
    searchicon1.style.display= 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display = 'flex';
    searchicon2.style.display= 'none';
})

const bar = document.querySelector('.fa-bars');
const headerbar = document.querySelector('.headerbar');
const xmark = document.querySelector('#hdcross');

bar.addEventListener('click',function(){
    headerbar.style.right = '0%';
    setTimeout(()=>{
        xmark.style.display = 'block';
    },200);
})
 
xmark.addEventListener('click',function(){
    headerbar.style.right = '-100%';
    xmark.style.display= 'none';
    
})
