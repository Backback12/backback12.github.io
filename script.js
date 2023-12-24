// center window
const div = document.querySelector('.window');
const divWidth = div.offsetWidth;
const divHeight = div.offsetHeight;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const leftPosition = (windowWidth - divWidth) / 2;
const topPosition = (windowHeight - divHeight) / 2;

div.style.left = leftPosition + 'px';
div.style.top = topPosition + 'px';



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(index) {
    let show = !document.getElementById("myDropdown" + index).classList.contains("show");
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    

    // document.getElementById("myDropdown" + index).classList.toggle("show");
    if (show) {
        document.getElementById("myDropdown" + index).classList.add("show");
    }
    else {
        document.getElementById("myDropdown" + index).classList.remove("show");
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }

    if (helping) {
        // document.body.style.cursor = "default";
    }
}






// Window Menu Stuff
const btns = Array.from(document.getElementById('menu').getElementsByClassName('btn'));
// Loop through the buttons and add the active class to the current/clicked button
btns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        
        showPage(index);
    });
});

const pages = document.getElementsByClassName('page');
function showPage(index) {
    for (var i = 0; i < pages.length; i++) {
        pages[i].className = pages[i].className.replace(" show", "");
    }
    pages[index].className += " show";
}





// Movable window lmao
// Optimize ************************************************************************
// Make the DIV element draggable:
dragElement(document.getElementsByClassName("window")[0]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.getElementsByClassName("title")[0]) {
    // if present, the header is where you move the DIV from:
    elmnt.getElementsByClassName("title")[0].onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    if (typeof(e.target.className) == 'string' && event.target.className.includes('draggable')) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Close button
function closeWindow() {
    let window = document.getElementsByClassName('window')[0]
    // window.style.animation = 'closeWindow 1s linear forwards';


    window.style.height = '200px';
    setTimeout(function() {
        window.style.width = '200px';
        setTimeout(function() {
            window.style.display = 'none';
        }, 20)
    }, 50);

    helpWindow(true);
}
// Help Button
var helping = false;
function helpWindow(hide=false) {
    helping = !helping;
    if (helping && !hide) {
        document.body.style.cursor = "help";
    }
    else {
        document.body.style.cursor = "default";
    }
}