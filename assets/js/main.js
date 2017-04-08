/* SMOOTH SCROLL */
$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if (target.length) {
		event.preventDefault();
		$('html, body').stop().animate( {
			scrollTop: target.offset().top
		}, 800);
	}
});

/* LINE SCROLL */
var line = document.querySelector("#line-top");
addEventListener("scroll", function() {
	var max = document.body.scrollHeight - innerHeight;
	var percent = (pageYOffset / max) * 100;
	line.style.width = percent + "%";
});

/* NAV HAMBURGUER */
window.addEventListener('DOMContentLoaded', function(e) {
	document.querySelector('.nav.hamburguer')
		.addEventListener('click', function (e) {
			document.querySelector('.nav.menu').classList.toggle('opened')
		}, false);
}, false);