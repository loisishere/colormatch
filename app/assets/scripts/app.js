$(document).ready(function() {
    var color_blocks = $(".game .game__block");
    var color_arr = [];
    var level = "Easy";
    var color_val = "RGB";
    $("input[name='level']").on('change', function() {
        level = this.value;
    });
    $("input[name='colorvalue']").on('change', function() {
        color_val = this.value;
    });
    $('.header__start').on('click', function() {
        if (level === "Easy") {
            //play easy level
        } else if (level === "Medium") {
            //play Medium level
        } else {
            //play hard level
        }
    })
})