$('btn').ready(function(){
    $(".order_btn").click(function () {
        if ($("#order").is(":hidden")) {
            $("#order").slideDown('slow');
            $(".order_btn").addClass("close")
            $("#delivery, #about, #pay, #promo").slideUp('slow')
            $(".deliver_btn,.about_btn,.pay_btn,.promo_btn").removeClass("close", 500)

        } else {
            $("#order").slideUp('slow');
            $(".order_btn").removeClass("close")
       
        }
    });
    $(".deliver_btn").click(function () {
        if ($("#delivery").is(":hidden")) {
            $("#delivery").slideDown('slow');
            $(".deliver_btn").addClass("close")
            $("#order, #about, #pay, #promo").slideUp('slow')
            $(".order_btn,.about_btn,.pay_btn,.promo_btn").removeClass("close", 500)

        } else {
            $("#delivery").slideUp('slow');
            $(".deliver_btn").removeClass("close")
        }
    });
    $(".about_btn").click(function () {
        if ($("#about").is(":hidden")) {
            $("#about").slideDown('slow');
            $(".about_btn").addClass("close")
            $("#order, #delivery, #pay, #promo").slideUp('slow')
            $(".order_btn,.deliver_btn,.pay_btn,.promo_btn").removeClass("close", 500)

        } else {
            $("#about").slideUp('slow');
            $(".about_btn").removeClass("close")
        }
    });
    $(".pay_btn").click(function () {
        if ($("#pay").is(":hidden")) {
            $("#pay").slideDown('slow');
            $(".pay_btn").addClass("close")
            $("#order, #delivery, #about, #promo").slideUp('slow')
            $(".order_btn,.deliver_btn,.about_btn,.promo_btn").removeClass("close", 500)

        } else {
            $("#pay").slideUp('slow');
            $(".pay_btn").removeClass("close")
        }
    });
    $(".promo_btn").click(function () {
        if ($("#promo").is(":hidden")) {
            $("#promo").slideDown('slow');
            $(".promo_btn").addClass("close")
            $("#order, #delivery, #about, #pay").slideUp('slow')
            $(".order_btn,.deliver_btn,.about_btn,.pay_btn").removeClass("close", 500)

        } else {
            $("#promo").slideUp('slow');
            $(".promo_btn").removeClass("close")
        }
    });
});

