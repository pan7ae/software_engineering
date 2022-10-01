function chooseCategory(elem) {
	let category = document.getElementsByClassName('category-link');
	for (i = 0; i < category.length; i++) {
		category[i].classList.remove('category-active');
	}
	elem.classList.add('category-active');
}