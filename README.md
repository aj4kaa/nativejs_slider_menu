#  Easy native JavaScript slider(switched by menu items)

Для плавной анимации добавить в свой.css, табам класс "fade" например. И прописать анимацию.

///////////////////////////////

.fade {
	animation-name: fade;
	animation-duration: 2.5s;
}
@keyframes fade {
	from {
		opacity: 0.1;
	}
	to {
		opacity: 1;
	}
}

///////////////////////////////

В скрипте добавляются классы ".hide" и ".show", для правильной работы им надо задать минимум:

///////////////////////////////

.hide {
	display: none;
}

.show {
	display: block;
}

///////////////////////////////
