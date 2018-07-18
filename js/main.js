(function (){
	var btn = document.querySelector('#btn');
	var menuList = document.querySelector('nav');
	btn.addEventListener('click', showMenu);

	function showMenu(){
		if(menuList.classList.contains('active')){
			menuList.classList.remove('active');
		}else{
			menuList.classList.add('active');	
		}
	}
})()