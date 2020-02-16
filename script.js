window.addEventListener('DOMContentLoaded', function() {
	
	"use strict"

	let menu = document.querySelector('.menu'),
		menuLink = document.querySelectorAll('.menu_link'),
		tabs = document.querySelectorAll('.content');

	function hideContent(a) {
		for (let i = a; i < tabs.length; i++) {
			tabs[i].classList.remove('show');
			tabs[i].classList.add('hide');
		}
	}

	hideContent(1);

	function showContent(b) {
		if (tabs[b].classList.contains('hide')) {
			tabs[b].classList.remove('hide');
			tabs[b].classList.add('show');
		}
	}

	menu.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('menu_link')) {
			for (let i = 0; i < menuLink.length; i++) {
				if (target == menuLink[i]) {
					hideContent(0);
					showContent(i);
					break;
				}
			}
		}
	});

});
