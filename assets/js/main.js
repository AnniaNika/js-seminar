window.addEventListener("scroll", function() {
	const scrollTop = this.pageYOffset;
	document.body.classList.remove("scroll-down-1", "scroll-down-2");
	if(scrollTop > 100 && scrollTop < 300) {
			//document.body.classList.remove("scroll-down-2");
			document.body.classList.add("scroll-down-1");
	} else if(scrollTop >= 300) {
			//document.body.classList.remove("scroll-down-1");
			document.body.classList.add("scroll-down-2");
	} else {
			//document.body.classList.remove("scroll-down-1", "scroll-down-2");
	}
});