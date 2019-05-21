// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
    constructor(containerElement, changeScreen) {
            // TODO(you): Implement the constructor and add fields as necessary.
            this.songsURL = [];
            this.res = {};
            this.containerElement = containerElement;
            this._onSubmit = this._onSubmit.bind(this);
            this.changeScreen = changeScreen;
            onStreamProcessed = onStreamProcessed.bind(this);

            function onStreamProcessed(json) {
                const selectList = document.querySelector('#song-selector');
                let idx = 0;
                for (let i in json) {
                    const newSong = document.createElement('option');
                    newSong.textContent = json[i].artist + ": " + json[i].title;
                    this.songsURL[idx] = json[i].songUrl;
                    idx++;
                    selectList.appendChild(newSong);
                }
            }

            function onResponse(response) {
                return response.json();
            }

            function onError(error) {
                console.log('Error: ' + error);
            }

            fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json').then(onResponse, onError).then(onStreamProcessed);

            const themeList = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
            const theme = document.querySelector('#query-input');
            theme.value = themeList[Math.floor(Math.random() * themeList.length)];
            const form = document.querySelector('form');
            form.addEventListener('submit', this._onSubmit);
        }
        // TODO(you): Add methods as necessary.
    _onSubmit() {
        event.preventDefault();
        const res = {};
        const themeName = document.querySelector('#query-input').value;
        const selectList = document.querySelector('#song-selector');
        const index = selectList.selectedIndex;
        for (let idx = 0; idx < this.songsURL.length; idx++) {
            if (idx === index) {
                res.url = this.songsURL[idx];
                break;
            }
        }
        res.theme = themeName;
        this.res = res;
        console.log(this.res);
        this.changeScreen('showMusic');
    }

    show() {
        this.containerElement.classList.remove('inactive');
    }

    hide() {
        this.containerElement.classList.add('inactive');
    }
}