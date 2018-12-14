$(document).ready(() => {
    let chatBoxMinBtn = $('.chatBoxMinBtn');
    let chatBoxCloseBtn = $('#chatBoxClose');
    let chatBox = $('#chatBox');
    let chatBoxMin= $('#chatBoxMin');

    chatBoxMinBtn.click(() => {
        chatBox.hide();
        chatBoxMin.show();
    });

    chatBoxMin.click(() => {
        chatBox.show();
        chatBoxMin.hide();
    });

    chatBoxCloseBtn.click(() => {
        chatBox.hide();
        chatBoxMin.hide();
    });
});