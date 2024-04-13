
// Function for Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
    } else {
        sidebar.style.left = '0px';
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
