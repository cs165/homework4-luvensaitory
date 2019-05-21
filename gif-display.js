// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
    constructor(theme) {
            // TODO(you): Implement the constructor and add fields as necessary.
            const a = encodeURIComponent(theme);
            this.xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + a + "&api_key=lT7knDG97pS7U556L3cQjWVDPQe8TrMA&limit=25&rating=g");
            this.changeGif = this.changeGif.bind(this);
            this.changeGif();
        }
        // TODO(you): Add methods as necessary.
    changeGif() {
        this.xhr.done((data) => {
            const i = Math.floor(Math.random() * 25);
            const div = document.querySelector('#gif');
            div.style.backgroundImage = 'url(\"' + data.data[i].images.downsized.url + '\")';
        })

    }
}