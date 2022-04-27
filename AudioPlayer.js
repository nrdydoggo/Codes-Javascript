
PlayerFunction();
var i;
function PlayerFunction()
{
$("#PlayerFunction")[0].src = $("#playlist li a")[0];       
$("#playlist li a").click(function(e)
    {
    // 음악 링크를 클릭했을 때 원본 소스 링크로 이동하는 것을 방지
    e.preventDefault();
    // 링크를 클릭하면 해당 곡이 플레이어에서 재생되게함(인덱스 값은 건드리지 말 것)
    $("#PlayerFunction")[0].src = this;
    });
}