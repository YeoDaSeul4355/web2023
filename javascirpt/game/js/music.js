const allMusic = [
    {
        name : "1. 2 Baddies",
        artist : "NCT 127",
        img : "music__view01",
        audio : "music_audio01"
    },{
        name : "2. child",
        artist : "MARK",
        img : "music__view02",
        audio : "music_audio02"
    },{
        name : "3. Roller coaster",
        artist : "Red Velvet",
        img : "music__view03",
        audio : "music_audio03"
    },{
        name : "4. Love Song",
        artist : "NCT 127",
        img : "music__view04",
        audio : "music_audio04"
    },{
        name : "5. I'll Make You Cry",
        artist : "aespa",
        img : "music__view05",
        audio : "music_audio05"
    },{
        name : "6. Obbsession",
        artist : "EXO",
        img : "music__view06",
        audio : "music_audio06"
    },{
        name : "7. Privacy",
        artist : "Baekhyun",
        img : "music__view07",
        audio : "music_audio07"
    },{
        name : "8. Glitch Mode",
        artist : "NCT DREAM",
        img : "music__view08",
        audio : "music_audio08"
    },{
        name : "9. Ditto",
        artist : "New Jeans",
        img : "music__view09",
        audio : "music_audio09"
    },{
        name : "10. kitsch",
        artist : "IVE",
        img : "music__view10",
        audio : "music_audio10"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");


let musicIndex = 1;     //현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;  //뮤직 파일
}

// 재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
};

// 정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
};

// 이전 곡 듣기
const prevMusic = () => {
    // 첫 번째 방법
    // musicIndex--;
    // if(musicIndex == 0) musicIndex = 10;
    

    // 두 번째 방법 (삼항 연산자)
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;

    loadMusic(musicIndex);
    playMusic();
};

// 다음 곡
const nextMusic = () => {
    // 첫 번째 방법
    // musicIndex++;
    // if(musicIndex == 10) musicIndex = 0;

    // 두 번째 방법 (삼항 연산자)
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;

    loadMusic(musicIndex);
    playMusic();
};

// 뮤직 진행 바 
musicAudio.addEventListener("timeupdate", e => {
    console.log(e);
    const currentTime = e.target.currentTime;           // 현재 재생되는 시간
    const duration = e.target.duration;                 // 오디오의  총 길이
    let progressWidth = (currentTime/duration) * 100;   // 전체길이에서 현재 진행되는 시간을 백분위로 나누면
    
    musicProgressBar.style.width = `${progressWidth}%`;

    // 전체 시간
    musicAudio.addEventListener("loadeddata",() => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });

    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;

});

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth;      // 진행바 전체 길이
    let clickedOffsetX = e.offsetX;                     // 진행바를 기준으로 측정되는 X 좌표값
    let songDuration = musicAudio.duration;             // 오디오 전체 길이
    
    // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
})


// 플레이버튼 클릭
musicPlay.addEventListener("click",() => {
    const isMusicPaused = musicWrap.classList.contains("paused");   // 음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
});

// 이전곡 버튼 클릭
musicPrevBtn.addEventListener("click",() => {
    prevMusic();
    
});

// 다음곡 버튼 클릭
musicNextBtn.addEventListener("click",() => {
    nextMusic();
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});