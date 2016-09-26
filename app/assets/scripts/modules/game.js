var $ = require('jquery');
var game = (function() {
    /*need game object to have: start function to start the game
    -_render the squares
    -randomly generate colors and attach them to the blocks
    -take the answer and the game color value and return true or false
    */
    var color_ans = $(".header__color span");
    var color_arr = [],
        level = $("input[name='level']").val(),
        color_val = $("input[name='colorvalue']").val(),
        $blocks = $('.game__block'),
        $game = $('.game'),
        winning_answer = '';
    $("input[name='level']").on('change', function() {
        level = this.value;
    });
    $("input[name='colorvalue']").on('change', function() {
        color_val = this.value;
    });

    function start() {
        //hide all game blocks
        $blocks.hide();
        render(level);
        console.log(level);
    }

    function render(val) {
        //show only the game blocks that are allow
        var h = (3 / val) * 100,
            color_arr = colors(val),
            i = 0,
            input = '';
        if (color_val === "RGB") {
            color_ans.text(color_arr[Math.round(Math.random() * val)]);
        } else if (color_val === "CYMK") {
            color_ans.text(rgb2cymk(color_arr[Math.round(Math.random() * val)]));
        } else {
            color_ans.text(rgb2hex(color_arr[Math.round(Math.random() * val)]));
        }

        for (; i < val; i++) {
            $game
                .find('#' + i)
                .show()
                .css('background-color', color_arr[i])
                .css('height', h + '%');;
        }
    };

    function colors(val) {
        var arr = [],
            i = 0;
        for (; i < val; i++) {
            arr.push('rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')');
        }
        return arr;
    };

    function checkWinner(user) {
        if (color_val === "RGB") {
            if (color_ans.text() === user) {
                return true;
            }
            return false
        } else if (color_val === "CYMK") {
            if (color_ans.text() === rgb2cymk(user)) {
                return true;
            }
            return false;
        } else {
            if (color_ans.text() === rgb2hex(user)) {
                return true;
            }
            return false;
        }
    };

    function rgb2hex(rgb) {
        var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
            i = 0,
            user = rgb.split(/\D+/g).splice(1, 3),
            input = [];
        for (; i < user.length; i++) {
            var num = 0;
            num = Math.round(user[i] / 16);
            input.push(hex[num]);
            input.push(hex[Math.round(num / 16)]);
        }
        return input.join('');
    }

    function rgb2cymk(rgb) {
        var y = rgb.split(/\D+/g)
            .splice(1, 3)
            .map(function(a) { return 1 - (a / 255) })
            .sort()[0],
            user = rgb.split(/\D+/g)
            .splice(1, 3)
            .map(function(a) { return 1 - (a / 255) }),
            cymk = [],
            i = 0;
        cymk.push(Math.round((1 - user[0] - y) / (1 - y)) * 100);
        cymk.push(Math.round((1 - user[1] - y) / (1 - y)) * 100);
        cymk.push(Math.round(y * 100));
        cymk.push(Math.round((1 - user[2] - y) / (1 - y)) * 100);
        return cymk.join(', ');

    }
    return {
        start: start,
        checkWinner: checkWinner
    }
})();

module.exports = game;