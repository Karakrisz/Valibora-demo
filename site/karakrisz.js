/* WHEN DOCUMENT READY */
$(document).ready(function () {
    Mymenu()
});

/* FUNCTIONS */
function Mymenu() {
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $(".karakrisz-navbar-brand").addClass("p");
        } else {
            $(".karakrisz-navbar-brand").removeClass("p");
        }
    });
};