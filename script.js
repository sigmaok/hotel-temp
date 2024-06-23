function showBorder(blockId) {
	var blocks = document.querySelectorAll('.block');


	blocks.forEach(function(block) {
		block.style.border = '2px solid transparent';
		block.style.backgroundColor = '#F6FCFA';
		block.style.marginTop = "0px";
		block.style.boxShadow = "0px 0px 0px 0px #42424233"
		block.style.color = "#101828"
		block.children[1].style.marginTop = "50px";
		block.children[2].children[1].style.color = "#606772"
		block.children[2].children[0].style.color = "#101828"
		block.children[2].children[2].style.color = "#6D7589"	
		block.children[3].style.display = "none"
		block.children[0].style.display = "none"	
	});
	var block = document.getElementById(blockId);
	block.style.backgroundColor = '#7188AA8C';
	block.style.marginTop = "-20px";
	block.style.boxShadow = "0px 10px 19px 0px #42424233"
	block.children[1].style.marginTop = "0px"
	block.children[2].children[0].style.color = "white"
	block.children[2].children[1].style.color = "white"
	block.children[2].children[2].style.color = "white"
	block.children[3].style.display = "flex"
	block.children[0].style.display = "flex"

}

function changeStyle(blockId) {
	var blocks = document.querySelectorAll('.news-block');


	blocks.forEach(function(block) {	
		block.style.backgroundColor = '#FFFFFF';
		block.style.boxShadow = "0px 10px 19px 0px #42424233"
		block.style.boxShadow = "0px 0px 0px 0px #42424233"
		block.style.marginTop = "0px"
		block.children[1].children[0].children[0].children[1].style.color = "#797979"
		block.children[1].children[0].children[1].children[1].style.color = "#797979"
		block.children[1].children[1].children[0].style.color = "#131313"
		block.children[1].children[2].children[0].style.color = "#9B9B9B"
		block.children[1].children[3].children[0].style.color = "#596B86"
		block.children[1].children[4].style.display = "none"
	});
	var block = document.getElementById(blockId);
	block.style.backgroundColor = '#7188AA8C';
	block.style.boxShadow = "0px 10px 19px 0px #42424233"
	block.style.marginTop = "-20px"
	block.children[1].children[0].children[0].children[1].style.color = "#FFFFFF"
	block.children[1].children[0].children[1].children[1].style.color = "#FFFFFF"
	block.children[1].children[1].children[0].style.color = "#FFFFFF"
	block.children[1].children[2].children[0].style.color = "#FFFFFF"
	block.children[1].children[3].children[0].style.color = "#FFFFFF"
	block.children[1].children[4].style.display = "flex"
}