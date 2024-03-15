function ubahAlignment(textAreaId) {
    var textArea = document.getElementById(textAreaId);
    var alignmentNow = textArea.style.textAlign;

    switch (alignmentNow) {
        case 'left':
            textArea.style.textAlign = 'center';
            break;
        case 'center':
            textArea.style.textAlign = 'right';
            break;
        case 'right':
            textArea.style.textAlign = 'left';
            break;
        default:
            textArea.style.textAlign = 'left';
            break;
    }
}

function ubahWarnaBoks(boxId) {
    var boks = document.getElementById(boxId);
    if (boks.style.backgroundColor === 'deepskyblue') {
        boks.style.backgroundColor = 'fuchsia';
    } else {
        boks.style.backgroundColor = 'deepskyblue';
    }
}