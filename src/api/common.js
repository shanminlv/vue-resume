export function moveArr(target,index,num){
	if(!(target instanceof Array))return;
	if(target.length==1)return;
	var obj=target[index],
		index=parseInt(index),
		num=parseInt(num);
	if(index==0&&num==-1)return;
	if(index==target.length&&num==1)return;
	if(num==-1){
		target.splice(index-1,0,obj);
		target.splice(index+1,1)
	}else if(num==1){
		target.splice(index+2,0,obj);
		target.splice(index,1)
	}
}

export function add(arr,index){
	if(!(arr instanceof Array))return;
	var obj=JSON.parse(JSON.stringify(arr[index]));
	arr.splice(index+1,0,obj);
}

export function del(arr,index){
	if(!(arr instanceof Array))return;
	arr.splice(index,1);
}

export function copy(obj){
	return JSON.parse(JSON.stringify(obj));
}

export function scaleCanvas(oCanvas, iWidth, iHeight) {
	if (iWidth && iHeight) {
		var oSaveCanvas = document.createElement("canvas");
		oSaveCanvas.width = iWidth;
		oSaveCanvas.height = iHeight;
		oSaveCanvas.style.width = iWidth+"px";
		oSaveCanvas.style.height = iHeight+"px";

		var oSaveCtx = oSaveCanvas.getContext("2d");

		oSaveCtx.drawImage(oCanvas, 0, 0, oCanvas.width, oCanvas.height, 0, 0, iWidth, iHeight);
		return oSaveCanvas;
	}
	return oCanvas;
}

export function js_getDPI() {
    var arrDPI = new Array;
    if (window.screen.deviceXDPI) {
        arrDPI[0] = window.screen.deviceXDPI;
        arrDPI[1] = window.screen.deviceYDPI;
    }
    else {
        var tmpNode = document.createElement("DIV");
        tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
        document.body.appendChild(tmpNode);
        arrDPI[0] = parseInt(tmpNode.offsetWidth);
        arrDPI[1] = parseInt(tmpNode.offsetHeight);
        tmpNode.parentNode.removeChild(tmpNode);    
    }
    return arrDPI;
}

export function exportPDF(domId,js_getDPI,name) {  
    //html2canvas官网的标准方法  
    html2canvas(document.getElementById(domId), {  
        onrendered: function(canvas) {            
            //将图片转换成：base64编码的jpg图片。  
            var strDownloadMime = "image/octet-stream";
            var imgData = canvas.toDataURL('image/jpeg');
            var canWidth = canvas.width;  
            var canHeight = canvas.height; 
            var arrDPI = js_getDPI();//获取显示器DPI（这个方法没贴出来）  
            var dpiX = 96;  
            var dpiY = 96;  
            if(arrDPI.length>0){  
                dpiX = arrDPI[0];  
                dpiY = arrDPI[1];  
            }  
            //l:横向， p：纵向；单位： in:英寸，mm毫米；画布大小：a3,a4,leter,[]（当内容为数组时，为自定义大小）  
            var doc = new jsPDF('l', 'in', [(canWidth+10)/dpiX,(canHeight+10)/dpiY]);//设置PDF宽高为要显示的元素的宽高，将像素转化为英寸 
            doc.addImage(imgData, 'png', 7/dpiX,5/dpiY); //写入位置：x:5, y:5 单位:英寸 
            var fileName=name?(name+".pdf"):"简历.pdf" 
            doc.save(fileName);  
        },    
        background: "#fff", //这里给生成的图片默认背景，不然的话，如果html根节点没有设置背景的话，会用黑色填充。  
        taintTest: false,  
        allowTaint: true //避免一些不识别的图片干扰，默认为false，遇到不识别的图片干扰则会停止处理html2canvas  
    });  
};

export function exportImg(domId,scaleCanvas) {  
    //html2canvas官网的标准方法  
    html2canvas(document.getElementById(domId), {  
        onrendered: function(canvas) {     
            var strDownloadMime = "image/octet-stream";
            var imgData = canvas.toDataURL('image/jpeg');
            var canWidth = canvas.width;  
            var canHeight = canvas.height; 
            var image=document.createElement('img');
            image.src=imgData;
            var oScaledCanvas = scaleCanvas(image, canWidth, canHeight);
			var strData = oScaledCanvas.toDataURL("image/png");
            window.location.href=strData.replace("image/png", strDownloadMime);
           
        },    
        background: "#FFFFFF", //这里给生成的图片默认背景，不然的话，如果html根节点没有设置背景的话，会用黑色填充。  
        taintTest: false,  
        allowTaint: true //避免一些不识别的图片干扰，默认为false，遇到不识别的图片干扰则会停止处理html2canvas  
    });  
};

