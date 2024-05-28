document.querySelectorAll('.tooltip-menu').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const tooltip = document.getElementById('tooltip-menu');
        const rect = button.getBoundingClientRect();
        tooltip.style.left = `${rect.left - 60}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY + 15}px`;
        tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('click', () => {
    document.getElementById('tooltip-menu').style.display = 'none';
});

document.getElementById('tooltip-menu').addEventListener('click', (event) => {
    event.stopPropagation();
});

const courseButtons = document.querySelectorAll('#course-atoz, #course-ztoa');
courseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        courseButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const subjectButtons = document.querySelectorAll('#subject-atoz, #subject-ztoa');
subjectButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        subjectButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
