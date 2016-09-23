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
        $game = $('.game');
    $("input[name='level']").on('change', function() {
        level = this.value;
    });
    $("input[name='colorvalue']").on('change', function() {
        color_val = this.value;
    });

    function start() {
        $game.html('');
        render(level);
        console.log(level);
    }

    function render(val) {
        var h = (3 / val) * 100,
            color_arr = colors(val, color_val),
            i = 0;
        color_ans.text(color_arr[Math.round(Math.random() * val)]);
        for (; i < val; i++) {
            $game
                .append('<div id = "' + i + '" class = game__block></div>')
                .find('#' + i)
                .css('background-color', color_arr[i])
                .css('height', h + '%');;
        }
    };

    function colors(val, cv) {
        var arr = [];
        if (cv === "RGB") {
            for (var i = 0; i < val; i++) {
                arr.push('rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')');
            }
            return arr;
        }
    };

    function checkWinner(type, user) {

    };
    return {
        start: start
    }
})();