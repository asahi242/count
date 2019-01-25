window.onload = function clickAction(){
	var submit = document.getElementById("submit");
	var flag = true;
	if(flag){
	suijishu();
	var i = fuhao();
	flag = false;
	}
	submit.onclick = function(){
		var panduan = jisuan(i);
		suijishu();
		i = fuhao();
		fenshu(panduan);
	}
}
function fenshu(panduan){
		var score = document.getElementById("score");
		var level = document.getElementById("level");
		
		if(panduan){
			score.firstChild.nodeValue = parseInt(score.firstChild.nodeValue) + parseInt(level.firstChild.nodeValue);
		}else{
			score.firstChild.nodeValue -= level.firstChild.nodeValue;
		}
		
		if(score.firstChild.nodeValue==5*level.firstChild.nodeValue){
			score.firstChild.nodeValue = 0;	
			alert("恭喜升级!");
			level.firstChild.nodeValue++;
		}
		if(score.firstChild.nodeValue<0){
			alert("降级了!");
			level.firstChild.nodeValue--;
			score.firstChild.nodeValue = 5*level.firstChild.nodeValue;
		}
		if(level.firstChild.nodeValue==0){
			alert("游戏失败!");
			level.firstChild.nodeValue = 1;
			score.firstChild.nodeValue = 0;
		}
	}
function jisuan(i){
	var xianshi = document.getElementById("xianshi");
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	var num3 = document.getElementById("num3");
	var sumNum = 0;
	if(i==0){
		sumNum = parseInt(num1.value) + parseInt(num2.value);
	}else if(i==1){
		sumNum = parseInt(num1.value) - parseInt(num2.value);
	}else if(i==2){
		sumNum = parseInt(num1.value) * parseInt(num2.value);
	}else{
		sumNum = parseInt(num1.value) / parseInt(num2.value);
	}
	
	if(parseInt(num3.value)==sumNum){
		xianshi.firstChild.nodeValue = "成功!";
		num3.value = "";
		
		return true;
	}else{
		xianshi.firstChild.nodeValue = "失败!";
		num3.value = "";
		
		return false;
	}
}
function suijishu(){
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	var level = document.getElementById("level");
	if(level.firstChild.nodeValue<3){
		num1.value = parseInt(Math.random()*10);
		num2.value = parseInt(Math.random()*10);
	}else if(level.firstChild.nodeValue>=3&&level.firstChild.nodeValue<5){
		num1.value = parseInt(Math.random()*10);
		num2.value = parseInt(Math.random()*20);
	}else if(level.firstChild.nodeValue>=5&&level.firstChild.nodeValue<7){
		num1.value = parseInt(Math.random()*40);
		num2.value = parseInt(Math.random()*10);
	}else if(level.firstChild.nodeValue>=7&&level.firstChild.nodeValue<10){
		num1.value = parseInt(Math.random()*50);
		num2.value = parseInt(Math.random()*50);
	}else{
		num1.value = parseInt(Math.random()*100);
		num2.value = parseInt(Math.random()*100);
	}
	
}
function fuhao(){
	var item = document.getElementById("item");
	var i = parseInt(Math.random()*10%4);
	//alert(i);
	if(i==0){
		item.setAttribute("src","img/jia.png");
		item.setAttribute("title","jia");
		return i;
	}else if(i==1){
		item.setAttribute("src","img/jian.png");
		item.setAttribute("title","jian");
		return i;
	}else if(i==2&&level.firstChild.nodeValue>3){
		item.setAttribute("src","img/cheng.png");
		item.setAttribute("title","cheng");
		return i;
	}else if(i==3&&level.firstChild.nodeValue>5){
		item.setAttribute("src","img/chu.png");
		item.setAttribute("title","chu");
		return i;
	}else{
		item.setAttribute("src","img/jia.png");
		item.setAttribute("title","jia");
		return 0;
	}
}