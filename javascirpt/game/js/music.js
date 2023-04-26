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


let musicIndex = 2;     //현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;  //뮤직 파일
}

// 플레이버튼 클릭
musicPlay.addEventListener("click",() => {
    alert("ddd");
})

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});