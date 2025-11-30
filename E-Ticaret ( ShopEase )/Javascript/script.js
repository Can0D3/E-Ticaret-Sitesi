document.addEventListener('DOMContentLoaded', function () {
	// Hamburger menu toggle
	const menuToggle = document.getElementById('menuToggle');
	const navLinks = document.getElementById('navLinks');
	
	if (menuToggle && navLinks) {
		menuToggle.addEventListener('click', function() {
			menuToggle.classList.toggle('active');
			navLinks.classList.toggle('active');
		});
		
		// Close menu when link clicked
		navLinks.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', function() {
				menuToggle.classList.remove('active');
				navLinks.classList.remove('active');
			});
		});
	}
	
	// Carousel functionality
	const images = Array.from(document.querySelectorAll('.carousel-inner img'));
	if (!images.length) return;

	let current = images.findIndex(img => img.classList.contains('active'));
	if (current === -1) current = 0;

	function show(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
		});
	}

	function next() {
		current = (current + 1) % images.length;
		show(current);
	}

	function prev() {
		current = (current - 1 + images.length) % images.length;
		show(current);
	}

	// Buttons
	const btnNext = document.querySelector('.carousel-btn.next');
	const btnPrev = document.querySelector('.carousel-btn.prev');
	if (btnNext) btnNext.addEventListener('click', next);
	if (btnPrev) btnPrev.addEventListener('click', prev);

	document.addEventListener('keydown', function (e) {
		const tag = (e.target && e.target.tagName) || '';
		if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

		if (e.key === 'ArrowRight') {
			next();
		} else if (e.key === 'ArrowLeft') {
			prev();
		}
	});

	images.forEach(img => img.addEventListener('click', next));
});

