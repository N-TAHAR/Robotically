/*  Dropdown Button  */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*  Scroll navbar  */


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos) {
    document.getElementById("container").style.top = "0";

  }else {
    document.getElementById("container").style.top = "-100px";

  }

  prevScrollpos = currentScrollpos;
}


/*  Lign Anim  */


const lign = document.querySelector('.lign');
const lign1 = document.querySelector('.lign1');
const anim = document.querySelector('.anim');
const but = document.querySelector('.but');
const be = document.querySelector('.be');
const scary = document.querySelector(".scary"); 
const atlas = document.querySelector(".atlas");
const now = document.querySelector(".now");
const me = document.querySelector(".me");
const contact = document.querySelector(".bloc4");



window.addEventListener('scroll', () => {
  if (window.scrollY >= 140){
    anim.style.width = "1600px";
  }else{
    anim.style.width = "0px";
  }

  if (window.scrollY >= 780){
    lign.style.width = "380px";
  }else{
    lign.style.width = "10px";
  }

  if (window.scrollY >= 1200){
    lign1.style.width = "380px";
  }else{
    lign1.style.width = "10px";
  } 

  if (window.scrollY >= 2252){
    but.style.opacity = "1";
  }else{
    but.style.opacity = "0";
  }

  if (window.scrollY >= 2875){
    be.style.opacity = "1";
  }else{
    be.style.opacity = "0";
  }

  if (window.scrollY >= 3646){
    scary.style.opacity = "1";
  }else{
    scary.style.opacity = "0";
  }

  if (window.scrollY >= 4312){
    atlas.style.opacity = "1";
  }else{
    atlas.style.opacity = "0";
  }

  if (window.scrollY >= 5517){
    now.style.opacity = "1";
  }else{
    now.style.opacity = "0";
  }
  
  if (window.scrollY >= 6240){
    me.style.opacity = "1";
    contact.style.opacity = "1";
  }else{
    me.style.opacity = "0";
    contact.style.opacity = "0";
  }
  
});






/*  Parallax Effect  */

