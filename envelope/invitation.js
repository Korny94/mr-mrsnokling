const openBtn = document.getElementById('openBtn');
const letter = document.querySelector('.letter');

openBtn.addEventListener('click', () => {
    openEnvelope();
});

function openEnvelope() {
    document.querySelector('.flap').style.display = 'none';
    document.querySelector('.envelope-content').style.display = 'none';
    letter.style.display = 'block';
}
