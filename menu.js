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
 

window.addEventListener('scroll', () => {
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

  if (window.scrollY >= 140){
    anim.style.width = "1600px";
  }
});






/*  Parallax Effect  */

