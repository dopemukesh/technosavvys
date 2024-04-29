
// Function for Sidebar
const menuIcon = document.querySelector(".menu-icon img");
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        menuIcon.src = "icons/menu-icon-bar.svg";
    } else {
        sidebar.style.left = '0px';
        menuIcon.src = "icons/close-icon.svg";
    }
}



// Function for Sidebar Links
const links = document.querySelectorAll('.links a');

links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
