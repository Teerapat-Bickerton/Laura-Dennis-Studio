// Hamburger button:

// copied code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown:
function myFunction() {
    document.getElementById("menu-show").classList.toggle("show");
  }

  // copied code from https://www.youtube.com/watch?v=ydZc17rlR5E&ab_channel=FlorinPop:
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// copied code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown:
  window.onclick = function(event) {
    if (!event.target.matches('.hamburger')) {
      var dropdowns = document.getElementsByClassName("menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }