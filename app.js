// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
    constructor() {
            // TODO(you): Implement the constructor and add fields as necessary.
            this.changeScreen = this.changeScreen.bind(this);
            const menuElement = document.querySelector('#menu');
            this.menu = new MenuScreen(menuElement, this.changeScreen);
            // this.menu.hide();


        }
        // TODO(you): Add methods as necessary.
    changeScreen(status) {
        if (status === 'showMusic') {
            this.changeScreen = this.changeScreen.bind(this);
            this.menu.hide();
            const body = document.querySelector('body');
            const musicElement = document.createElement('div');
            musicElement.style.display = "flex";
            musicElement.style.flexDirection = "column";
            musicElement.style.height = "100vh";
            // musicElement.style.backgroundColor = "gray";
            body.appendChild(musicElement);
            this.music = new MusicScreen(musicElement, this.changeScreen, this.menu.res);
            this.music.show();
        }
    }
}