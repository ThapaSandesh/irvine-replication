document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('m-active');
            item.classList.remove('m-inactive');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('m-active');
            item.classList.add('m-inactive');
        });
    });
});