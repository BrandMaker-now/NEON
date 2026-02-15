const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', function() {
if (this.checked) {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}
});
