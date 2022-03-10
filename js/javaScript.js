const song1 = document.getElementById('marae');
const song2 = document.getElementById('power');
const song3 = document.getElementById('losin');
const song4 = document.getElementById('ster');
const song5 = document.getElementById('star');

const songs = [song1,song2,song3,song4,song5];

const audios = ['marae','power','losin','ster','star'];

let currentSong = 2;
songs[currentSong].classList.add('selected');

function vorige(){
    songs[currentSong].classList.remove('selected');
    currentSong--;
    if (currentSong < 0) {
        currentSong = 4;
    } 
    songs[currentSong].classList.add('selected');
    
    const path = 'assets/video-audio/'+ audios[currentSong]+'.mp3';
    const audio = document.getElementById('geluid');
    const source = document.getElementById('bron');

    source.src = path;
    audio.load();
    console.log('vorige',currentSong,path);
}

function volgende(){
    songs[currentSong].classList.remove('selected');

    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    } 
    songs[currentSong].classList.add('selected');
    const path = 'assets/video-audio/'+ audios[currentSong]+'.mp3';
    const audio = document.getElementById('geluid');
    const source = document.getElementById('bron');

    source.src = path;
    audio.load();
    console.log('volgende',currentSong,path);
}
