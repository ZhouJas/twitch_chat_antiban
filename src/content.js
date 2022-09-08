$(document).ready(() => {
    window.setInterval(function () {
        if ($('.chat-room__content .scrollable-area').length < 1 && $('#proxy_chat').length < 1) {
			let channel = (location.href.indexOf('popout') > -1) ? location.href.split('/')[4] : location.href.split('/')[3];
			let url = `https://www.giambaj.it/twitch/jchat/v2/?channel=${channel}&bots=true&size=1&font=2`;
			let div_data = `<iframe name="proxy_chat" id="proxy_chat" src="${url}"  style="width: 100%; height: 100%;"></iframe>`;
			let chat_el = $('.chat-room__content').children().first();
			chat_el.removeClass();
			chat_el.addClass("chat-list--default scrollable-area");
			chat_el.html(div_data);
        }
    }, 250);
});
