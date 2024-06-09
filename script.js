const songsList = [
    {
        name: "Nuba Ha",
        artist: "Silent Partner",
        src: "7.mp3",
        cover: "1.jpeg"
    },

    {
        name: "Dase Durin",
        artist: "Silent Partner",
        src: "2.mp3",
        cover: "2.jpeg"
    },
    {
        name: "Dawasaka",
        artist: "Huma-Huma",
        src: "3.mp3",
        cover: "3.jpeg"
    },
    {
        name: "Komaliya",
        artist: "Huma-Huma",
        src: "4.mp3",
        cover: "4.jpeg"
    },
    {
        name: "Mawila",
        artist: "Huma-Huma",
        src: "5.mp3",
        cover: "5.jpeg"
    },
    {
        name: "Neth Manema",
        artist: "Huma-Huma",
        src: "6.mp3",
        cover: "6.jpeg"
    },
    {
        name: "Athaharala",
        artist: "Huma-Huma",
        src: "1.mp3",
        cover: "7.jpg"
    },
    {
        name: "Pitupala Yana As",
        artist: "Huma-Huma",
        src: "9.mp3",
        cover: "8.jpg"
    },
    {
        name: "Viramayak",
        artist: "Huma-Huma",
        src: "10.mp3",
        cover: "9.jpg"
    },
    {
        name: "Handa Gawin",
        artist: "Huma-Huma",
        src: "11.mp3",
        cover: "1.jpeg"
    },
    {
        name: "Ruu Chaya",
        artist: "Huma-Huma",
        src: "12.mp3",
        cover: "2.jpeg"
    },
    {
        name: "Amavaka",
        artist: "Huma-Huma",
        src: "13.mp3",
        cover: "3.jpeg"
    },
    {
        name: "Rauf Faik",
        artist: "Huma-Huma",
        src: "14.mp3",
        cover: "4.jpeg"
    },
    {
        name: "lovely",
        artist: "Huma-Huma",
        src: "15.mp3",
        cover: "5.jpeg"
    },
    {
        name: "Alone",
        artist: "Huma-Huma",
        src: "16.mp3",
        cover: "6.jpeg"
    },
    {
        name: "Faded",
        artist: "Huma-Huma",
        src: "17.mp3",
        cover: "7.jpg"
    }
];

const artistName = document.querySelector('.artist-name');
const musicName = document.getElementById('name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time');
const cover = document.getElementById('img1');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek);
});

function loadSong(index) {
    const { name, artist, src, cover: thumb } = songsList[index];
    artistName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${thumb})`;
}

function updateProgress() {
    if (song.duration) {
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerText = `${currentTime} - ${duration}`;

    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function togglePlayPause() {
    if (playing) {
        song.pause();
    } else {
        song.play();
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    cover.classList.toggle('active', playing);
}

function nextSong() {
    currentSong = (currentSong + 1) % songsList.length;
    playMusic();
}

function prevSong() {
    currentSong = (currentSong - 1 + songsList.length) % songsList.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    cover.classList.add('active');
}

function seek(e) {
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos;
}
function click1(){
    let heart = document.getElementById('heart');
     heart.style.backgroundColor = 'hsl(0, 100%, 68%)'
    heart.style.borderRadius = '5px'
    heart.style.boxShadow = '0px 0px 19px 2px hsl(0, 100%, 68%)'
}



