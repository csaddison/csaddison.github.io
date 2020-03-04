
// Scripts for webpage

// document.getElementById("projects").addEventListener("click", showProjects);

// function showProjects() {
//     let div = document.getElementById("expandedProjects");
//     if (div.style.display == "none") {
//         div.style.display = "block";
//       } else {
//         div.style.display = "none";
//       }
// }


// Toggles responsive topnav
function toggleResponsiveNav() {
    let nav = document.getElementById("topnav");
    if (nav.className == "menu") {
        nav.className += " responsive";
    } else {
        nav.className = "menu";
    }
}

// Displays page after loader timeout
// let time;

// function loadPage() {
//     document.getElementById("page").style.display = "block";
// }

// function loadInTime() {
//     time = setTimeout(loadPage, 4800);
// }

