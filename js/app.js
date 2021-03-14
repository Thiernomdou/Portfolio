const allNavItems = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar-collapse');

/* Fermer la navbar quand on clique
sur un élément
*/
allNavItems.forEach(element => element.addEventListener('click', () => {

    navbar.classList.toggle('show');

}))