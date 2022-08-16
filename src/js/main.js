jQuery(function () {
    // появление кнопки "наверх" при прокрутке
    jQuery(window).on("scroll", function (e) {
        if (jQuery(this).scrollTop() > 700) {
            jQuery(".js-to-top").stop().fadeIn(300);
        } else {
            jQuery(".js-to-top").stop().fadeOut(300);
        }
    });

    // прокрутка к верху страницы
    jQuery(".js-to-top").on("click", function (e) {
        e.preventDefault();
        jQuery("body,html").animate(
            {
                scrollTop: 0,
            },
            800
        );
        return false;
    });

    // плавный скролл от меню до блока
    jQuery(".nav-link").on("click", function (e) {
        e.preventDefault();
        let clickTarget = jQuery(this).attr("href");

        jQuery("body,html").animate(
            {
                scrollTop: jQuery(clickTarget).offset().top
            },
            800
        );
        return false;
    });
});
