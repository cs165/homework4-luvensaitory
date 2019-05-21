// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
    constructor(buttonStatus) {
            // TODO(you): Implement the constructor and add fields as necessary.
            this.buttonStatus = buttonStatus;
            this.play = this.play.bind(this);
            const footer = document.querySelector('#play');
            const img = document.createElement('img');
            img.style.height = '60px';
            img.style.width = '60px';
            img.style.marginTop = 'auto';
            img.style.marginBottom = 'auto';
            img.src = './images/play.png';
            img.addEventListener('click', this.play);
            footer.appendChild(img);
        }
        // TODO(you): Add methods as necessary.
    play() {
        const playButton = document.querySelector('#play').querySelector('img');
        if (playButton.src.indexOf('images/play.png') >= 0) {
            playButton.src = 'images/pause.png';
            this.buttonStatus('play');
        } else if (playButton.src.indexOf('images/pause.png') >= 0) {
            playButton.src = 'images/play.png';
            this.buttonStatus('pause');
        } else {
            console.log('MDFK...');
        }
    }
}