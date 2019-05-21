// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
    constructor(containerElement, changeScreen, response) {
            // TODO(you): Implement the constructor and add fields as necessary.
            this.containerElement = containerElement;
            this.changeScreen = changeScreen;
            this.response = response;
            this.buttonStatus = this.buttonStatus.bind(this);

            const div = document.createElement('div');
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.paddingBottom = '70px';
            div.style.backgroundSize = 'cover';
            div.style.backgroundPosition = 'center center';
            div.style.backgroundRepeat = 'no-repeat';
            div.id = 'gif';

            const footer = document.createElement('div');
            footer.style.height = "70px";
            footer.style.width = '100%';
            footer.style.display = "flex";
            footer.style.justifyContent = "center";
            footer.style.backgroundColor = 'white';
            footer.style.position = 'absolute';
            footer.style.bottom = '0';
            footer.id = 'play';

            this.containerElement.appendChild(div);
            this.containerElement.appendChild(footer);
            this.ap = new AudioPlayer();
            this.ap.setSong(this.response.url);
            this.gd = new GifDisplay(this.response.theme);
            this.pb = new PlayButton(this.buttonStatus);
        }
        // TODO(you): Add methods as necessary.
    buttonStatus(status) {
        if (status === 'play') {
            this.ap.play();
        } else if (status === 'pause') {
            this.ap.pause();
            this.gd.changeGif();
        }
    }
    show() {
        this.containerElement.classList.remove('inactive');
    }

    hide() {
        this.containerElement.classList.add('inactive');
    }
}