function openAndScroll(event, id) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {

        target.setAttribute('open', 'true');

        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function toggleHistory() {
    const hiddenItems = document.querySelectorAll('.hidden-item');
    const btn = document.getElementById('more-btn');
    const box = document.getElementById('update-box');

    const isOpening = btn.innerText === 'もっと見る';

    hiddenItems.forEach(item => {
        item.style.display = isOpening ? 'block' : 'none';
    });

    btn.innerText = isOpening ? '閉じる' : 'もっと見る';
    box.style.maxHeight = isOpening ? '200px' : '50px';
}
