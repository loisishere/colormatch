$(document).ready(function() {
    var color_ans = $(".header__color p");
    var color_arr = [],
        level = "3",
        color_val = "RGB",
        $blocks = $('.game__block');
    $("input[name='level']").on('change', function() {
        level = this.value;

    });
    $("input[name='colorvalue']").on('change', function() {
        color_val = this.value;
    });
    var game = {
        'blocksInit': function(val, cv) {
            var h = (3 / val) * 100;
            var color_arr = this.colors(val, cv);
            color_ans.text(color_arr[Math.round(Math.random() * val)]);
            $blocks.each(function(i) {
                $(this).show();
                $(this).css('background-color', color_arr[i]);
                $(this).css('height', h + '%');
                if (i >= val) {
                    $(this).hide();
                }
            });
            //console.log($blocks.eq(3).css('background-color'));
        },
        colors: function(val, cv) {
            var arr = [];
            if (cv === "RGB") {
                for (var i = 0; i < val; i++) {
                    console.log(i);
                    arr.push('rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')');
                }
                return arr;
            }
        }
    }

    $('.header__start').on('click', function() {
        game.blocksInit(level, color_val);
    });
    $blocks.on('click', function() {
        if ($(this).css('background-color') === color_ans.text()) {
            $blocks.css('background-color', color_ans.text());
            color_ans.text('winner!');

        }
    });
});