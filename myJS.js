window.onload=function(){
	
	var headOne=["新闻","体育","NBA","娱乐","财经","股票","汽车","科技","手机","数码","女人","论坛","视频","旅游","健康", "房产","应用","酒香","时尚","前沿"];
	//加载导航栏headOne数据;
	tableDateLoad("headOne",headOne,false);
	
	var bodyTab=["首页","聚合","排行","图片","国内","国际","社会","评论","深度","数据","中东","旅游","宗教","娱乐","媒体"];
	tableDateLoad("bodyTab",bodyTab,true);
	
	//二级联动select省市
	sltCity();
	
	//用户登录成功，已对密码和账号进行验证
	loginName();
	
	//图片的变化
	picLoad();
	
	//tab窗口的跳转
	jumpIframe();
};
//加载导航栏类型数据,是否有边框
function tableDateLoad(div,array,bool){
	var html="<table><tr>";
	for(var i=0;i<array.length-1;i++)
		html+="<td>"+array[i]+"</td>";	
	if(bool==false)
		html+="<td style='border-right:none'>"+array[array.length-1]+"</td>";
	else
		html+="<td>"+array[array.length-1]+"</td>";
	
	html+="</tr></table>";
	$(div).innerHTML=html;
};

//二级联动select省市
function sltCity(){
	var citys=[
		{province:"广东",city:[
								{name:"广州"},
								{name:"珠海"},
								{name:"中山"},
								{name:"深圳"},
								{name:"东莞"},
								{name:"汕头"}
		]},
		{province:"海南",city:[
								{name:"三亚"},
								{name:"海口"},
								{name:"琼州"}
		]},
		{province:"广西",city:[
								{name:"北海"},
								{name:"桂林"},
								{name:"南宁"},
								{name:"柳州"},
								{name:"玉林"},
		]},
		
	];
	//alert(citys[0].city[3].name);
	var htmlPro="<option>请选择*</option>";
	for(var i=0;i<citys.length;i++){
		htmlPro+="<option>"+citys[i].province+"</option>";
	}
	$("sltPro").innerHTML=htmlPro;
	$("sltCity").innerHTML="<option>车辆所在市*</option>"; 
	$("sltPro").onchange=function(){
		var index=$("sltPro").selectedIndex;
		if(index==0){
			$("sltCity").innerHTML="<option>车辆所在市*</option>";  
		}else if(index==1){
			var htmlCity="";
			for(var i=0;i<citys[0].city.length;i++){
				htmlCity+="<option>"+citys[0].city[i].name+"</option>";
			}
			$("sltCity").innerHTML=htmlCity;
		}else if(index==2){
			var htmlCity="";
			for(var i=0;i<citys[1].city.length;i++){
				htmlCity+="<option>"+citys[1].city[i].name+"</option>";
			}
			$("sltCity").innerHTML=htmlCity;
		}else if(index==3){
			var htmlCity="";
			for(var i=0;i<citys[2].city.length;i++){
				htmlCity+="<option>"+citys[2].city[i].name+"</option>";
			}
			$("sltCity").innerHTML=htmlCity;
		}
	};
};

//用户登录成功
function loginName(){
	var obj=$("login").getElementsByTagName("input");
	//alert(obj[1].type);
	obj[3].onclick=function(){
		
		if(checkLogin()!=false){
			$("span2").childNodes[1].style.display="none";
			var html="<p id='loginName'>"+obj[0].value+"</p>";
			$("span2").innerHTML=html;
			$("login").style.display="none";
		}
	};
};
//检查登录用户以及密码是否合格
function checkLogin(){
	var obj=$("login").getElementsByTagName("input");
	if(obj[0].value=="" || obj[1].value==""){
		alert("账号或者密码不能为空");
		return false;
	}
		

	if(obj[0].value!=""){
		var testMail=/^([a-zA-Z0-9-_])+@([a-zA-Z0-9-_])+([\.a-zA-Z0-9-_])+$/;
		if(testMail.test(obj[0].value)==false){
			alert("非法邮箱名！");
			obj[0].select();
			return false;
		}
	}
	
	if(obj[1].value!=""){
		var x=obj[1].value.length;
		if(x<6){
			alert("密码长度不能小于六位");
			obj[1].select();
			return false;
		}else{
			var testPassword=new RegExp("^[a-zA-Z]{"+x+"}$");
			//alert(testPassword.test(obj[1].value));
			if(testPassword.test(obj[1].value)|| isNaN(obj[1].value)==false){
				alert("密码不能为纯数字或者纯字母！");
				obj[1].select();
				return false;
			}
		}
	}
};

//图片改动，标签以及文字信息跟随改动
var pic=[{id:1,src:"img/1.jpg",
			title:"一网打尽，中国的AI独角兽全姓“马”了，马云的马……",
			words:"除了商汤科技、旷视科技，阿里投资的AI公司还包括寒武纪、深鉴科技， Kneron等。公开信息显示，过去2年，阿里在AI芯片领域至少已经投资了5家公司。"},
			{id:2,src:"img/2.jpg",
			title:"微软终于修复了Windows计算器中存在10年之久的计算错误问题",
			words:"微软的工作人员经过努力，已经成功在Windows 10 Redstone 5 build 17639这个版本解决了“完全平方数的平方根”问题。"},
			{id:3,src:"img/3.jpg",
			title:"光电子芯片将于明年上市：速度更快 能耗更低",
			words:"外媒称，脱胎于美国麻省理工学院的企业Ayar Labs正在把光学和电子学技术结合在一起，以制造速度更快、效率更高的计算机。"},
			{id:4,src:"img/4.jpg",
			title:"调查：浏览器排名 全家桶类别未能上榜",
			words:"你最常用的浏览器是什么？是不是也同时在电脑上装载至少两个浏览器？是不是想知道你安装的浏览器排名第几？"},
			{id:5,src:"img/5.jpg",
			title:"全球最慢火车：8个小时才开290公里，乘客却抱怨司机开太快",
			words:"火车算是全球使用率最高的交通工具了，无论是货运还是客运，人们都希望能行驶的再快一些，所以才有了如今的动车和高铁。"}
	];
function picLoad(){
	//加载当前新闻图片窗口数据
	$("newsDetail").childNodes[1].innerHTML+=pic[0].title;
	$("newsDetail").childNodes[3].innerHTML+=pic[0].words;
	$("pic").childNodes[0].src="img/1.jpg";
	var htmlDiv="";
	for(var i=0;i<pic.length;i++){
		htmlDiv+="<div></div>";
	}
	//alert($("picNum").childNodes[0]);
	$("picNum").childNodes[1].innerHTML=htmlDiv;
	$("picNum").getElementsByTagName("div")[0].style.backgroundColor="black";
	//当鼠标放到图片上时，新闻开始切换
	$("pic").onmouseover=startPic;//开始
	$("pic").onmouseout=stopPic;//停止
};

var t=0;
var n=1;
function startPic(){
	$("pic").childNodes[0].src="img/"+n+".jpg";
	$("newsDetail").childNodes[1].innerHTML=pic[n-1].title;
	$("newsDetail").childNodes[3].innerHTML=pic[n-1].words;
	$("picNum").childNodes[3].innerHTML=pic[n-1].id;
	
	if(n==1){
		$("picNum").getElementsByTagName("div")[n-1].style.backgroundColor="black";
		$("picNum").getElementsByTagName("div")[4].style.backgroundColor="white";
	}
		
	if(n>1){
		
		$("picNum").getElementsByTagName("div")[n-1].style.backgroundColor="black";
		$("picNum").getElementsByTagName("div")[n-2].style.backgroundColor="white";
	}
	if(n==5){
		$("picNum").getElementsByTagName("div")[4].style.backgroundColor="black";
	}
	n++;
	if(n>5){
		n=1;
	}
	t=setTimeout("startPic()",1000);
};
function stopPic(){
	clearTimeout(t);
};
//窗口的跳转
function jumpIframe(){
	var tab=$("bodyTab").getElementsByTagName("table")[0].getElementsByTagName("td");
	//alert(tab.length);
	tab[0].onclick=function(){
		$("bodyMain").style.display="block";
		$("iframe").style.display="none";
	}
	for(var i=1;i<tab.length;i++){
		tab[i].onclick=function(){
			$("iframe").style.display="block";
			$("iframe").getElementsByTagName("iframe")[0].src="http://www.baidu.com";
		}
	}
}
function $(id){
	return document.getElementById(id);
};


