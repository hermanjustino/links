// JavaScript
document.getElementById('share-button').addEventListener('click', function() {
    const tempInput = document.createElement('input');
    tempInput.style = 'position: absolute; left: -1000px; top: -1000px';
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const toast = document.getElementById('toast');
    toast.className = 'show';
    setTimeout(function(){ toast.className = toast.className.replace('show', ''); }, 3000);
});