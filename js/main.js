(function (){
	let btn = document.querySelector('.btn-menu');
	let menuList = document.querySelector('nav');
	let btnClose = document.querySelector('.btn-close');
	btn.addEventListener('click', showMenu);
	btnClose.addEventListener('click', showMenu);

	function showMenu(){
		if(menuList.classList.contains('active')){
			menuList.classList.remove('active');
		}else{
			menuList.classList.add('active');	
		}
	}

})()