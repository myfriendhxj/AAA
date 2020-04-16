var oImgSrc=jinxuanData.src;
//console.log(oImgSrc);
var jinxuan=document.querySelector('.jinxuan');
var jinxuanContent=jinxuan.querySelector('.content');
//console.log(jinxuanContent)
for(var i=0;i<oImgSrc.length;i++){
	var oAs=document.createElement('a');
	oAs.href='#'
	oAs.innerHTML='<img _src='+oImgSrc[i]+'>';
	jinxuanContent.appendChild(oAs)
}
var img=jinxuanContent.querySelectorAll('img');
var iH=window.innerHeight;

loadImg(img)
window.addEventListener('scroll',function(){
	loadImg(img)
})


//今日热卖
var todayHot=document.querySelector('.todayHot');
var todayHotContent=todayHot.querySelector('.content');
var HotData=todyHotData.data;

for(var i=0;i<HotData.length;i++){
	var item=document.createElement('div');
	item.className='item';
	item.innerHTML=`
		<a href="typeInfo.html?id=${HotData[i].id}"><img _src="${HotData[i].src1}" class='todayimg'></a>
		<div class="item_po">
			<img src="${HotData[i].src2}" >
			<span class="item_span">
				<label>￥</label>
				${HotData[i].Newprice}
			</span>
		</div>
		<div class="name">
			<a href="">${HotData[i].pinpai}</a>
			<span><a href="">${HotData[i].typeName}</a></span>
		</div>
		<div class="price">
			<b>￥${HotData[i].price}</b>
		</div>
	`
	todayHotContent.appendChild(item)
}
var todayimgs=todayHotContent.querySelectorAll('.todayimg');

loadImg(todayimgs);
window.addEventListener('scroll',function(){
	loadImg(todayimgs)
})
//首页男装
var manDa=manData.data;
var man=document.querySelector('.man');
var manContent=man.querySelector('.content');

for(var i=0;i<manDa.length;i++){
	var item=document.createElement('div');
	item.className='item';
	item.innerHTML=`
		<a href="typeInfo.html?id=${manDa[i].id}"><img _src="${manDa[i].src1}" class='manimg'></a>
		<div class="item_po">
			<img src="${manDa[i].src2}" >
			<span class="item_span">
				<label>￥</label>
				${manDa[i].Newprice}
			</span>
		</div>
		<div class="name">
			<a href="">${manDa[i].pinpai}</a>
			<span><a href="">${manDa[i].typeName}</a></span>
		</div>
		<div class="price">
			<b>￥${manDa[i].price}</b>
		</div>
	`
	manContent.appendChild(item)
}
var manimgs=manContent.querySelectorAll('.manimg');
loadImg(manimgs);
window.addEventListener('scroll',function(){
	loadImg(manimgs)
})

//女装
 var womanDa=womanData.data;
var woman=document.querySelector('.woman');
var womanContent=woman.querySelector('.content');

for(var i=0;i<womanDa.length;i++){
	var item=document.createElement('div');
	item.className='item';
	item.innerHTML=`
		<a href="typeInfo.html?id=${womanDa[i].id}"><img _src="${womanDa[i].src1}" class='womanimg'></a>
		<div class="item_po">
			<img src="${womanDa[i].src2}" >
			<span class="item_span">
				<label>￥</label>
				${womanDa[i].Newprice}
			</span>
		</div>
		<div class="name">
			<a href="">${womanDa[i].pinpai}</a>
			<span><a href="">${womanDa[i].typeName}</a></span>
		</div>
		<div class="price">
			<b>￥${womanDa[i].price}</b>
		</div>
	`
	womanContent.appendChild(item)
}
var womanimgs=womanContent.querySelectorAll('.womanimg');

loadImg(womanimgs);
window.addEventListener('scroll',function(){
	loadImg(womanimgs)
})

//首页儿童
var kidDa=kidData.data;

var chlid=document.querySelector('.chlid');
var chlidContent=chlid.querySelector('.content');
for(var i=0;i<kidDa.length;i++){
	var item=document.createElement('div');
	item.className='item';
	item.innerHTML=`
		<a href="typeInfo.html?id=${kidDa[i].id}"><img _src="${kidDa[i].src1}" class='kidimg'></a>
		<div class="item_po">
			<img src="${kidDa[i].src2}" >
			<span class="item_span">
				<label>￥</label>
				${kidDa[i].Newprice}
			</span>
		</div>
		<div class="name">
			<a href="">${kidDa[i].pinpai}</a>
			<span><a href="">${kidDa[i].typeName}</a></span>
		</div>
		<div class="price">
			<b>￥${kidDa[i].price}</b>
		</div>
	`
	chlidContent.appendChild(item)
}
var kidimgs=chlidContent.querySelectorAll('.kidimg');

loadImg(kidimgs);
window.addEventListener('scroll',function(){
	loadImg(kidimgs)
})
//鞋包
var shoeDa=shoeData.data;
var shoe=document.querySelector('.shoe');
var shoeContent=shoe.querySelector('.content');
for(var i=0;i<shoeDa.length;i++){
	var item=document.createElement('div');
	item.className='item';
	item.innerHTML=`
		<a href="typeInfo.html?id=${shoeDa[i].id}"><img _src="${shoeDa[i].src1}" class='shoeimg'></a>
		<div class="item_po">
			<img src="${shoeDa[i].src2}" >
			<span class="item_span">
				<label>￥</label>
				${shoeDa[i].Newprice}
			</span>
		</div>
		<div class="name">
			<a href="">${shoeDa[i].pinpai}</a>
			<span><a href="">${shoeDa[i].typeName}</a></span>
		</div>
		<div class="price">
			<b>￥${shoeDa[i].price}</b>
		</div>
	`
	shoeContent.appendChild(item)
}
var shoeimgs=shoeContent.querySelectorAll('.shoeimg');

loadImg(shoeimgs);
window.addEventListener('scroll',function(){
	loadImg(shoeimgs)
})


var oImg=$('.warp img');
oImg.on('mouseenter',function(){
	$(this).css('opacity',0.8);
})
oImg.on('mouseleave',function(){
	$(this).css('opacity',1);
})
