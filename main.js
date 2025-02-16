let diary = "";
let emojis = ['👍', '⭐', '😍', '😊', '❤️'];
let emoji = '👍'

function saveHandler() {
    let date = $("#date").val();
    let text = $("#text").val();

    if (date == "") {
        alert("date를 선택하세요.")
        return false
    }
    if (text == "") {
        alert("긍정확언을 입력하세요.")
        return false
    }
    diary = `<a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${text}</h5>
            <small class="text-body-secondary">${date}</small>
            </div>
            <small class="text-body-secondary">${emoji}</small>
        </a>` + diary;

    $("#result").html(diary);

    localStorage.setItem("diary", diary)
    // 저장하고 reset
    $("#date").val("");
    $("#text").val("");
}
function emojiSelected(event, value){
    // console.log(value)
    if (value == 1) {
        emoji = '👍';
    } else if (value == 2) {
        emoji = '⭐'
    } else if (value == 3) {
        emoji = '😍';
    } else if (value == 4) {
        emoji = '😊';
    } else if (value == 5) {
        emoji = '❤️';
    }
}

$(document).ready(function() {
    $("#emoji").emoji({
        emojis: emojis,
        callback: emojiSelected
    });

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