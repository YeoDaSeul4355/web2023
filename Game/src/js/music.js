function music() {
    const allMusic = [
        {
            name: "1. 2 Baddies",
            artist: "NCT 127",
            img: "music__view01",
            audio: "music_audio01",
        },
        {
            name: "2. Child",
            artist: "MARK",
            img: "music__view02",
            audio: "music_audio02",
        },
        {
            name: "3. Roller Coaster",
            artist: "Red Velvet",
            img: "music__view03",
            audio: "music_audio03",
        },
        {
            name: "4. Love Song",
            artist: "NCT 127",
            img: "music__view04",
            audio: "music_audio04",
        },
        {
            name: "5. I'll Make You Cry",
            artist: "aespa",
            img: "music__view05",
            audio: "music_audio05",
        },
        {
            name: "6. Obbsession",
            artist: "EXO",
            img: "music__view06",
            audio: "music_audio06",
        },
        {
            name: "7. Privacy",
            artist: "Baekhyun",
            img: "music__view07",
            audio: "music_audio07",
        },
        {
            name: "8. Glitch Mode",
            artist: "NCT DREAM",
            img: "music__view08",
            audio: "music_audio08",
        },
        {
            name: "9. Ditto",
            artist: "New Jeans",
            img: "music__view09",
            audio: "music_audio09",
        },
        {
            name: "10. kitsch",
            artist: "IVE",
            img: "music__view10",
            audio: "music_audio10",
        },
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
    const musicProgressCurrent = musicWrap.querySelector(
        ".progress .timer .current"
    );
    const musicProgressDuration = musicWrap.querySelector(
        ".progress .timer .duration"
    );
    const musicRepeat = musicWrap.querySelector("#control-repeat");
    const musicListBtn = musicWrap.querySelector("#control-list");
    const musicList = musicWrap.querySelector(".music__list");
    const musicListUl = musicWrap.querySelector(".music__list ul");
    const musicListClose = musicWrap.querySelector(".music__list h3 .close");

    let musicIndex = 1; //현재 음악 인덱스
    
    // 폴더 클릭하면 나타나게
    document.querySelector(".icon1").addEventListener("click", () => {
        document.querySelector(".music__inner").classList.remove("hide");
    });

    // 닫기 버튼 누르면 없어지게
    document.querySelector(".music__close").addEventListener("click", () => {
        document.querySelector(".music__inner").classList.add("hide");
        pauseMusic(); // Pause the currently playing music
    });


    // 음악 재생
    const loadMusic = (num) => {
        musicName.innerText = allMusic[num - 1].name; //뮤직 이름
        musicArtist.innerText = allMusic[num - 1].artist; //뮤직 아티스트
        musicView.src = `images/${allMusic[num - 1].img}.png`; //뮤직 이미지
        musicView.alt = allMusic[num - 1].name; //뮤직 이미지 alt
        musicAudio.src = `audio/${allMusic[num - 1].audio}.mp3`; //뮤직 파일
    };

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
        musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--;

        loadMusic(musicIndex);
        playMusic();
        playListMusic();
    };

    // 다음 곡
    const nextMusic = () => {
        // 첫 번째 방법
        // musicIndex++;
        // if(musicIndex == 10) musicIndex = 0;

        // 두 번째 방법 (삼항 연산자)
        musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++;

        loadMusic(musicIndex);
        playMusic();
        playListMusic();
    };

    // 뮤직 진행 바
    musicAudio.addEventListener("timeupdate", (e) => {
        // console.log(e);
        const currentTime = e.target.currentTime; // 현재 재생되는 시간
        const duration = e.target.duration; // 오디오의  총 길이
        let progressWidth = (currentTime / duration) * 100; // 전체길이에서 현재 진행되는 시간을 백분위로 나누면

        musicProgressBar.style.width = `${progressWidth}%`;

        // 전체 시간
        musicAudio.addEventListener("loadeddata", () => {
            let audioDuration = musicAudio.duration;
            let totalMin = Math.floor(audioDuration / 60);
            let totalSec = Math.floor(audioDuration % 60);
            if (totalSec < 10) totalSec = `0${totalSec}`;
            musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
        });

        // 진행 시간
        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
        if (currentSec < 10) currentSec = `0${currentSec}`;
        musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
    });

    // 진행 버튼 클릭
    musicProgress.addEventListener("click", (e) => {
        let progressWidth = musicProgress.clientWidth; // 진행바 전체 길이
        let clickedOffsetX = e.offsetX; // 진행바를 기준으로 측정되는 X 좌표값
        let songDuration = musicAudio.duration; // 오디오 전체 길이

        // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
        musicAudio.currentTime =
            (clickedOffsetX / progressWidth) * songDuration;
    });

    // 반복 버튼 클릭
    musicRepeat.addEventListener("click", () => {
        let getAttr = musicRepeat.getAttribute("class");

        switch (getAttr) {
            case "repeat":
                musicRepeat.setAttribute("class", "repeat-one");
                musicRepeat.setAttribute("title", "한곡 반복");
                break;
            case "repeat-one":
                musicRepeat.setAttribute("class", "shuffle");
                musicRepeat.setAttribute("title", "랜덤 반복");
                break;
            case "shuffle":
                musicRepeat.setAttribute("class", "repeat");
                musicRepeat.setAttribute("title", "전체 반복");
                break;
        }
    });

    // 음악이 끝나면
    musicAudio.addEventListener("ended", () => {
        let getAttr = musicRepeat.getAttribute("class");

        switch (getAttr) {
            case "repeat":
                nextMusic();
                break;
            case "repeat-one":
                playMusic();
                break;
            case "shuffle":
                let randomIndex = Math.floor(
                    Math.random() * allMusic.length + 1
                ); // 랜덤 인덱스 생성

                do {
                    randomIndex = Math.floor(
                        Math.random() * allMusic.length + 1
                    );
                } while (musicIndex == randomIndex);

                musicIndex = randomIndex; // 현재 인덱스를 랜덤 인덱스로 변경

                loadMusic(randomIndex);
                playMusic();
                break;
        }
        playListMusic();
    });

    // 플레이버튼 클릭
    musicPlay.addEventListener("click", () => {
        const isMusicPaused = musicWrap.classList.contains("paused"); // 음악 재생중
        isMusicPaused ? pauseMusic() : playMusic();
    });

    // 이전곡 버튼 클릭
    musicPrevBtn.addEventListener("click", () => {
        prevMusic();
    });

    // 다음곡 버튼 클릭
    musicNextBtn.addEventListener("click", () => {
        nextMusic();
    });

    // 뮤직 리스트 버튼
    musicListBtn.addEventListener("click", () => {
        musicList.classList.add("show");
    });
    // 뮤직 리스트 닫기 버튼
    musicListClose.addEventListener("click", () => {
        musicList.classList.remove("show");
    });

    // 뮤직 리스트 구현하기
    for (let i = 0; i < allMusic.length; i++) {
        let li = `
        <li data-index="${i + 1}">
            <img class="img" src="images/${allMusic[i].img}.png" alt="${
            allMusic[i].name
        }">
            <span class="title">
                <strong>${allMusic[i].name}</strong>
                <em>${allMusic[i].artist}</em>
                <audio class="${allMusic[i].audio}" src="audio/${
            allMusic[i].audio
        }.mp3"></audio>
            </span>
            <span class="audio-duration" id="${allMusic[i].audio}">3:04</span>
        </li>
    `;

        // musicListUl.innerHTML += li;
        musicListUl.insertAdjacentHTML("beforeend", li);

        // 리스트의 음악 시간 불러오기
        let liAudioDuration = musicListUl.querySelector(
            `#${allMusic[i].audio}`
        ); // 리스트에서 시간을 표시할 선택자
        let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`); // 리스트에서 오디오 파일 선택
        liAudio.addEventListener("loadeddata", () => {
            let audioDuration = liAudio.duration;
            let totalMin = Math.floor(audioDuration / 60);
            let totalSec = Math.floor(audioDuration % 60);
            if (totalSec < 10) totalSec = `0${totalSec}`;
            liAudioDuration.innerText = `${totalMin}:${totalSec}`;
            liAudioDuration.setAttribute(
                "data-duration",
                `${totalMin}:${totalSec}`
            );
        });
    }

    //뮤직리스트를 클릭하면 재생
    function playListMusic() {
        const musicListAll = musicListUl.querySelectorAll("li"); // 뮤직 리스트 목록
        for (let i = 0; i < musicListAll.length; i++) {
            let audioTag = musicListAll[i].querySelector(".audio-duration");
            musicListAll[i].addEventListener("click", function () {
                clicked(this);
            });
            if (musicListAll[i].classList.contains("playing")) {
                musicListAll[i].classList.remove("playing");
                let dataAudioDuration = audioTag.getAttribute("data-duration");
                audioTag.innerText = dataAudioDuration;
            }
            if (musicListAll[i].getAttribute("data-index") == musicIndex) {
                musicListAll[i].classList.add("playing");
                audioTag.innerText = "재생중";
            }
        }
    }
    playListMusic();

    // 뮤직 리스트를 클릭하면
    function clicked(el) {
        let getIndex = el.getAttribute("data-index");
        musicIndex = getIndex;
        loadMusic(musicIndex);
        playMusic();
        playListMusic();
    }

    window.addEventListener("load", () => {
        loadMusic(musicIndex);
        playListMusic();
    });

    
}

export default music;
