var aS=$('#list li>a');
// console.log(aS)
aS.each(function(i,el){
	 
	$(el).click(function(){
		
		$($('#list dl')[i]).toggle();
		
		
		
	})
})

$('.show_hide').on('click',function(){
	
		//$('.pinpai').eq($(this).index('.show_hide')).css('height','auto')
		if($('.pinpai').eq($(this).index('.show_hide')).css('height')=='16px'){
			$('.pinpai').eq($(this).index('.show_hide')).css('height','auto')
			$(this).html('收起')
		}else{
			$('.pinpai').eq($(this).index('.show_hide')).css('height','16px')
			$(this).html('更多')
		}
		//console.log($('.pinpai').eq($(this).index('.show_hide')).css('height'))
})

$('.xuan').on('mouseenter',function(){
	$('.xuan .xuan_list').eq($(this).index('.xuan')).show()
})
$('.xuan').on('mouseleave',function(){
	$('.xuan .xuan_list').eq($(this).index('.xuan')).hide()
})

$('.typeNav>.left a').eq(0).siblings().on('mouseenter',function(){
	$(this).addClass('active')
	//$(this).eq(0).addClass('active')
})
$('.typeNav>.left a').eq(0).siblings().on('mouseleave',function(){
	$(this).removeClass('active')
})
$('.typeNav>.left a').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	
})
var oldSrc=$('.changeImg');
//console.log(oldSrc)

// console.log(typedata.man.data);

var se=window.location.search.split('=')[1];
var Tdata=typedata[se].data;
var goods=document.querySelector('.goods');


		for(var i=0;i<Tdata.length;i++){
		var item=document.createElement('div');
	
		//console.log(Tdata[i].id)
		item.className='item';
		item.innerHTML=`
			<a href="typeInfo.html?id=${Tdata[i].id}"><img src="${Tdata[i].src1}" class="changeImg"></a>
			<div class="item_po">
				<img src="${Tdata[i].src2}" >
				<span class="item_span">
					<label>￥</label>
					${Tdata[i].Newprice}
				</span>
			</div>
			<div class="name">
				<a href="">${Tdata[i].pinpai}</a>
				<span><a href="javascript:;">${Tdata[i].typeName}</a></span>
			</div>
			<div class="price">
				<b>￥${Tdata[i].price}</b>
			</div>
			<ul>
				<li><img src="img/720372_00_00.jpg" class="li_img"></li>
				<li><img src="img/720372_50_00.jpg" class="li_img"></li>
				<li><img src="img/720372_70_00.jpg" class="li_img"></li>
			</ul>
		`
		goods.appendChild(item)
		
	}
//分页
var page=document.querySelector('.pages');

var hash=window.location.hash.split('=')[1];
var len=Math.ceil(Tdata.length/40);
// console.log(len,hash)
for(var i=0;i<len;i++){
	var oA=document.createElement('a');
	if((i+1)==hash){
		oA.className='foucs'
	}
	$(oA).addClass('num')
	oA.innerHTML=i+1;
	page.appendChild(oA)
}

var oAs=page.querySelectorAll('.num');
for(var i=0;i<oAs.length;i++){
	oAs[i].onclick=function(){
		window.location.hash='pages='+this.innerHTML;
		$(this).siblings().removeClass('foucs');
		$(this).addClass('foucs')
	}
}
setInner(hash);
// changeIm()
var iH=window.innerHeight;
window.onhashchange=function(){
		hash=window.location.hash.split('=')[1];
		setInner(hash)
	}
function setInner(pages){
	goods.innerHTML=''
	for(var i=0;i<Tdata.length;i++){
		(function(i){
			var item=document.createElement('div');
			if(i>=40*(pages-1)&&i<=40*(pages-1)+39){
			
			item.className='item';
			item.innerHTML=`
				<a href="typeInfo.html?id=${Tdata[i].id}"><img _src="${Tdata[i].src1}" class="changeImg"></a>
				<div class="item_po">
					<img src="${Tdata[i].src2}" >
					<span class="item_span">
						<label></label>
						${Tdata[i].Newprice}
					</span>
				</div>
				<div class="name">
					<a href="">${Tdata[i].pinpai}</a>
					<span><a href="">${Tdata[i].typeName}</a></span>
				</div>
				<div class="price">
					<b>￥${Tdata[i].price}</b>
				</div>
				<ul>
					<li><img src="${Tdata[i].src3}" class="li_img"></li>
					<li><img src="${Tdata[i].src4}" class="li_img"></li>
					<li><img src="${Tdata[i].src5}" class="li_img"></li>
				</ul>
			`
			goods.appendChild(item)
			}
		})(i)
	}
	var changeImg=document.querySelectorAll('.changeImg');
	loadImg(changeImg)
	window.addEventListener('scroll',function(){
		loadImg(changeImg)
		
	})
	changeIm()
}

$('#next_page').on('click',function(){
	window.location.hash='pages='+(parseFloat(hash)+1);
	
	if(parseFloat(hash)+1>len){
		alert('没有下一页了');
		window.history.go(-1)
	}else{
		hash=window.location.hash.split('=')[1];
		$(oAs[hash-1]).addClass('foucs').siblings().removeClass('foucs')
	}
})

$('#last_page').on('click',function(){
	window.location.hash='pages='+len;
	hash=window.location.hash.split('=')[1];
	$(oAs[hash-1]).addClass('foucs').siblings().removeClass('foucs')
})
changeIm()
function changeIm(){
	$('.li_img').on('mouseenter',function(){
		$('.changeImg').eq($(this).parent().parent().index('.goods ul')).attr('src',$('.li_img').eq($(this).index('.li_img')).attr('src'))
	})
	$('.li_img').on('mouseleave',function(){
		$('.changeImg').eq($(this).parent().parent().index('.goods ul')).attr('src',$('.changeImg').eq($(this).parent().parent().index('.goods ul')).attr('_src'))
	})
}
