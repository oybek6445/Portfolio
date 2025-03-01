/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formning default submit harakatini to'xtatish
    
    const message = document.getElementById("message").value;
    const ism = document.getElementById("ism").value;
    const email = document.getElementById("email").value;

    console.log("Ism:", ism);
    console.log("Email:", email);
    console.log("Xabar:", message);
});

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});