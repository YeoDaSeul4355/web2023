const tetrisWrap = document.querySelector(".tetris__wrap");
const tetrisView = tetrisWrap.querySelector(".tetris__play .view ul");
const tetrisStart = tetrisWrap.querySelector(".tetris__start");
const tetrisClose = tetrisWrap.querySelector(".tetris__close");
const tetrisOver = tetrisWrap.querySelector(".tetris__over");
let tetrisScore = tetrisWrap.querySelector(".user__score");
let tetrisSpeed = tetrisWrap.querySelector(".speed__score");
let overScore = tetrisWrap.querySelector(".t_score");
let tetrisBgm = new Audio("../audio/tetris_bg.mp3");
let tetrisOverBgm = new Audio("../audio/tetris_over.mp3");

const line_rows = 20; //가로
const line_cols = 16; //세로
const blocks = {
    Tmino: [
        [
            [2, 1],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [1, 2],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [1, 2],
            [0, 1],
            [2, 1],
            [1, 1],
        ],
        [
            [2, 1],
            [1, 2],
            [1, 0],
            [1, 1],
        ],
    ],
    Imino: [
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ],
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ],
    ],
    Omino: [
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
    ],
    Zmino: [
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [0, 1],
            [1, 1],
            [0, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [0, 1],
            [1, 1],
            [0, 2],
        ],
    ],
    Smino: [
        [
            [1, 0],
            [2, 0],
            [0, 1],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 2],
        ],
        [
            [1, 0],
            [2, 0],
            [0, 1],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 2],
        ],
    ],
    Jmino: [
        [
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 0],
            [1, 0],
            [0, 1],
            [0, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [2, 1],
        ],
    ],
    Lmino: [
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [0, 1],
        ],
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [0, 1],
            [1, 1],
            [2, 0],
            [2, 1],
        ],
    ],
};

document.querySelector(".tetris__close").addEventListener("click", () => {
    document.querySelector(".tetris__wrap").classList.add("hide");
});
document.querySelector(".icon2").addEventListener("click", () => {
    document.querySelector(".tetris__wrap").classList.remove("hide");
});

let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;
let stopTetris = false;
let setTetrisTime = "";
let setTetrisSpeed = 1;

const movingItem = {
    //블록의 정보 변수
    type: "",
    direction: 0,
    top: 0,
    left: 4,
};
// 시작하기
function init() {
    tempMovingItem = { ...movingItem };
    newLine(); //라인만들기
    // generateNewBlock();
    // renderBlocks(); //블록 만들기
}
// 라인 만들기
function newLine() {
    const tetrisRows = tetrisView.childNodes;
    const numRows = tetrisRows.length;
    if (numRows < line_rows) {
        const numLinesToAdd = line_rows - numRows;
        for (let i = 0; i < numLinesToAdd; i++) {
            const li = document.createElement("li");
            const ul = document.createElement("ul");
            for (let j = 0; j < line_cols; j++) {
                const subLi = document.createElement("li");
                ul.prepend(subLi);
            }
            li.prepend(ul);
            tetrisView.prepend(li);
        }
    } else if (numRows > line_rows) {
        const numLinesToRemove = numRows - line_rows;
        for (let i = 0; i < numLinesToRemove; i++) {
            tetrisView.lastChild.remove();
        }
    }
}
// 블록 만들기
function renderBlocks(moveType = "") {
    const { type, direction, top, left } = tempMovingItem;
    // console.log(type, direction, top, left);
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach((moving) => {
        moving.classList.remove(type, "moving");
    });
    blocks[type][direction].some((block) => {
        const x = block[0] + left;
        const y = block[1] + top;
        // console.log({ tetrisView });
        const target = tetrisView.childNodes[y]
            ? tetrisView.childNodes[y].childNodes[0].childNodes[x]
            : null;
        const isAvailable = checkEmpty(target);
        if (isAvailable) {
            target.classList.add(type, "moving");
        } else {
            tempMovingItem = { ...movingItem };
            setTimeout(() => {
                renderBlocks();
                if (moveType === "top") {
                    seizeBlock();
                }
            });
            return true;
        }
    });
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
}

//블록 쌓임 감지하기
function seizeBlock() {
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach((moving) => {
        moving.classList.remove("moving");
        moving.classList.add("seized");
    });

    // 줄 제거
    checkMatch();
}

// 한 줄 제거하기
function checkMatch() {
    const childNodes = tetrisView.childNodes;

    //게임오버
    childNodes[0].children[0].childNodes.forEach((li) => {
        if (li.classList.contains("seized")) {
            stopTetris = true;
            tetrisOverBgm.play();
            tetrisGameover();
        }
    });

    childNodes.forEach((child) => {
        let matched = true;
        child.children[0].childNodes.forEach((li) => {
            if (!li.classList.contains("seized")) {
                matched = false;
            }
        });
        if (matched) {
            child.remove();
            newLine();
            score++;
            tetrisScore.innerText = score;

            // 속도 조절
            switch (score) {
                case 5:
                    duration = 250;
                    setTetrisSpeed++;
                    tetrisSpeed.innerText = setTetrisSpeed;
                    break;
                case 10:
                    duration = 150;
                    setTetrisSpeed++;
                    tetrisSpeed.innerText = setTetrisSpeed;
                    break;
                case 15:
                    duration = 50;
                    setTetrisSpeed++;
                    tetrisSpeed.innerText = setTetrisSpeed;
                    break;
            }
        }
    });
    //이상이 없으면 새블록 만들어 주기
    generateNewBlock();
}
function generateNewBlock() {
    // 시간초 초기화
    clearInterval(downInterval);

    // 블록 내려오기
    downInterval = setInterval(() => {
        moveBlock("top", 1);
    }, duration);

    // 블록 랜덤으로
    const blockArray = Object.entries(blocks);
    const randomIndex = Math.floor(Math.random() * blockArray.length);
    movingItem.type = blockArray[randomIndex][0];

    // 초기화
    movingItem.top = 0;
    movingItem.left = 4;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem };
    renderBlocks();
}

// 빈칸 확인하기
function checkEmpty(target) {
    if (!target || target.classList.contains("seized")) {
        return false;
    }
    return true;
}
// 블록 움직이기
function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
}
// 모양 변경하기
function changeDirection() {
    const direction = tempMovingItem.direction;
    direction === 3
        ? (tempMovingItem.direction = 0)
        : (tempMovingItem.direction += 1);
    renderBlocks();
}
// 스페이스바 누르기
function dropBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock("top", 1);
    }, 10);
}

//게임 시작하기
function tetrisStartGo() {
    tetrisStart.classList.add("hide");
    generateNewBlock();
    tetrisBgm.play();
    tetrisBgm.loop = true;
    setTetrisTime = setInterval(timeTetris, 1000);
}
//게임 오버
function tetrisGameover() {
    tetrisOver.classList.add("show");
    overScore.innerHTML = `당신의 점수는 ${score}점 입니다!`;
    tetrisBgm.pause();
    tetrisBgm.currentTime = 0;
    tetrisTime = 0;
}
//게임 재시작하기
function tetrisRe() {
    const restartMino = tetrisView.querySelectorAll("li > ul > li");
    restartMino.forEach((li) => {
        li.className = "";
    });
    stopTetris = false;
    generateNewBlock();
    tetrisBgm.play();
    score = 0;
    tetrisScore.innerText = 0;
    duration = 500;
    setTetrisSpeed = 1;
    tetrisSpeed.innerText = 1;
    tetrisOverBgm.currentTime = 0;
}

document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 32:
            dropBlock();
            break;
        case 38:
            changeDirection();
            break;
        default:
            break;
    }
});

//시작버튼 누르면 게임시작
tetrisStart.addEventListener("click", () => {
    tetrisStartGo();
});

//재시작 버튼 클릭
document.querySelector(".t_replay_btn").addEventListener("click", () => {
    tetrisRe();
    tetrisOver.classList.remove("show"); // 게임 오버 화면 숨기기
    tetrisOverBgm.pause();
});

//게임창 끄기
tetrisClose.addEventListener("click", () => {
    document.querySelector(".tetris__wrap").classList.add("hide");
    tetrisGameover();
    stopTetris = true;
    tetrisStart.classList.add("hide");
});
init();
