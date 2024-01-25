document
  .querySelector("#newtask input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNewTask();
    }
  });

document.querySelector("#push").onclick = function () {
  addNewTask();
};

function addNewTask() {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("리스트를 작성해주세요!");
  } else {
    // 현재 입력된 값을 가져옴
    const newTaskValue = document.querySelector("#newtask input").value;

    // 새로운 항목을 생성
    const newTaskHTML = `
        <div class="task">
            <span id="taskname">
                ${newTaskValue}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;

    // 기존의 tasks에 최신순으로 쌓기
    document
      .querySelector("#tasks")
      .insertAdjacentHTML("afterbegin", newTaskHTML);

    // 삭제 버튼
    const current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    // 완료 토글 기능
    const tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    // 입력 필드 초기화
    document.querySelector("#newtask input").value = "";
  }
}
