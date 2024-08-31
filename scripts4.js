document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});
