$(document).ready(function() {
    //this should be removed so that if a player changes this it does not interfere with the game play
    var $blocks = $('.game__block');
    $('.header__start').on('click', function() {
        game.start();
    });
});