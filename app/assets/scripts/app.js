var $ = require('jquery'),
    game = require('./modules/game');
$(document).ready(function() {
    //this should be removed so that if a player changes this it does not interfere with the game play
    var $blocks = $('.game__block');
    $('.header__start').on('click', function() {
        game.start();
    });
    $blocks.on('click', function() {
        if (game.checkWinner($(this).css('background-color'))) {
            console.log('winner');
        } else {
            console.log('keep trying');
        };
    })
});