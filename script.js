const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
//console.log(links);
navToggle.addEventListener('click', function(){
   // console.log(links.classList.contains('links')) //gives true

//1st Method to this madness
if(links.classList.contains('show-links')){
    links.classList.remove('show-links');
}
 else {
     links.classList.add('show-links');
 }


})

