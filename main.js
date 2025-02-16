let diary = "";

function saveHandler() {
    let date = $("#date").val();
    let text = $("#text").val();
    let mood = $("#mood").val();

    diary = `<a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${text}</h5>
            <small class="text-body-secondary">${date}</small>
            </div>
            <small class="text-body-secondary">${mood}</small>
        </a>` + diary;

    $("#result").html(diary);

    localStorage.setItem("diary", diary)
}

$(document).ready(function() {
    // "diary" 키의 값을 읽어옴
    diary = localStorage.getItem("diary");

    // 초기 null 예외처리
    if (diary == null) {
        diary = "";
    }

    // html문서에서 id가 result인 요소에 diary 내용 표시
    $("#result").html(diary)
    // html문서에서 id가 save인 요소를 클릭하면 saveHandler 함수 호출
    $("#save").click(saveHandler);
});