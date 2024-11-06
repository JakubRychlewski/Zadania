$("img").on({
    "mouseover": function() {
        $(this).css({
            'transform': 'scale(1.5)',
            'z-index': 2,
            'transition': 'all 0.5s',
            'display': 'inline-block'
        });
        $(this).next(".opis").fadeIn(200).stop( true, true ).fadeIn();
    },
    "mouseout": function() {
        $(this).css({
            'transform': 'scale(1.0)',
            'z-index': 1,
            'transition': 'all 0.5s',
            'display': 'inline-block'
        });
        $(this).next(".opis").fadeOut(200).stop( true, true ).fadeOut();

    }
});

