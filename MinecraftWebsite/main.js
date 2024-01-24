function replaceWithText() {
    var heart = document.getElementById('heart');

    if (heart.innerHTML === '❤') {
        heart.innerHTML = 'Jonasbck27';
    } else {
        heart.innerHTML = '❤';
    }
}

function copyToClipboard() {
    var ipText = 'mc.hypixel.net';
    var tempInput = document.createElement('input');
    tempInput.value = ipText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function showPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.classList.add('show');
    overlay.classList.add('show');
}

function closePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.classList.remove('show');
    overlay.classList.remove('show');
}

function redirectToLink(url) {
    window.location.href = url;
}
