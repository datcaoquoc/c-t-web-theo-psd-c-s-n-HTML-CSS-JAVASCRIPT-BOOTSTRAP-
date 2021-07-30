$(document).ready(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 400) {
            $('.sp').addClass('hieuung1');
        } else {
            $('.sp').removeClass('hieuung1');
        }
        if (pos_body > 400) {
            $('.text-title-1').addClass('hieuung-text-title-1');
        } else {
            $('.text-title-1').removeClass('hieuung-text-title-1');
        }
        if (pos_body > 400) {
            $('.text-content-1').addClass('hieuung-text-title-1');
        } else {
            $('.text-content-1').removeClass('hieuung-text-title-1');
        }
        if (pos_body > 400) {
            $('.text-content-1').addClass('hieuung-text-title-1');
        } else {
            $('.text-content-1').removeClass('hieuung-text-title-1');
        }
        if (pos_body > 1100) {
            $('.hinhanhcon1').addClass('hinh');
        } else {
            $('.hinhanhcon1').removeClass('hinh');
        }
        if (pos_body > 1100) {
            $('.text-title-2').addClass('sc1');
        } else {
            $('.text-title-2').removeClass('sc1');
        }
        if (pos_body > 1100) {
            $('.text-content-2').addClass('sc2');
        } else {
            $('.text-content-2').removeClass('sc2');
        }
        if (pos_body > 1100) {
            $('.btn1').addClass('sc3');
        } else {
            $('.btn1').removeClass('sc3');
        }
        if (pos_body > 1800) {
            $('.spp').addClass('img-section-3');
        } else {
            $('.spp').removeClass('img-section-3');
        }
        if (pos_body > 1800) {
            $('.text-title-3').addClass('img3');
        } else {
            $('.text-title-3').removeClass('img3');
        }
        if (pos_body > 1800) {
            $('.text').addClass('img3');
        } else {
            $('.text').removeClass('img3');
        }
        if (pos_body > 2400) {
            $('.text2').addClass('hieuung-text-2');
        } else {
            $('.text2').removeClass('hieuung-text-2');
        }
        if (pos_body > 2400) {
            $('.hinhanhcon2').addClass('hieuung-text-2');
        } else {
            $('.hinhanhcon2').removeClass('hieuung-text-2');
        }
        if (pos_body > 4000) {
            $('.text6').addClass('text6-hieuung');
        } else {
            $('.text6').removeClass('text6-hieuung');
        }
    });
});