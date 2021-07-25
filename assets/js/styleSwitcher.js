﻿
/*=============================================================
    Authour URI: #
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDIT US AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainAppNew = {

        main_fun: function () {

            /*=====================================
             THEME SWITCHER SCRIPTS 
            ===================================*/
            jQuery('#switch-panel').click(function () {
                if (jQuery(this).hasClass('show-panel')) {
                    jQuery('.switcher').css({ 'left': '-50px' });
                    jQuery('#switch-panel').removeClass('show-panel');
                    jQuery('#switch-panel').addClass('hide-panel');
                } else if (jQuery(this).hasClass('hide-panel')) {
                    jQuery('.switcher').css({ 'left': 0 });
                    jQuery('#switch-panel').removeClass('hide-panel');
                    jQuery('#switch-panel').addClass('show-panel');
                }
            });

            $('#black').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/black.css');
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/blue.css');
            });
            $('#green').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/green.css');
            });
            $('#red').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/red.css');
            });
            $('#yellow').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/yellow.css');
            });
            $('#orange').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/orange.css');
            });
            $('#brown').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/brown.css');
            });
            $('#grey').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/grey.css');
            });
        },

        initialization: function () {
            mainAppNew.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainAppNew.main_fun();
    });

}(jQuery));
