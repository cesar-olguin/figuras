function AddDiv(){
	var Obj=document.createElement("div");
	var bgColor=document.getElementById("IdColorBack").value;
	var ancho=document.getElementById("IdAncho").value;
	var alto=document.getElementById("IdAlto").value;
	var borde=document.getElementById("IdBorde").value;
	var bordeColor=document.getElementById("IdColorBorde").value;
	console.log(ancho);
	Obj.style.width=ancho+"px";
	Obj.style.height=alto+"px";
	Obj.style.backgroundColor=bgColor;
	Obj.style.borderWidth=borde+"px";
	Obj.style.borderStyle="solid";
	Obj.style.borderColor=bordeColor;
	Obj.style.display="inline-block";
	document.getElementById("SecContainer").appendChild(Obj);
	Obj.addEventListener("click",DivSelect);
}

function DivSelect(sender){
	if (DivObj!=undefined)
	DivObj.style.borderStyle="solid";
	DivObj=sender.target;
	DivObj.style.borderStyle="dotted";
	document.getElementById("IdColorBack").value= RGBToHex(DivObj.style.backgroundColor);
	document.getElementById("IdAncho").value=DivObj.style.width.replace("px","");
	document.getElementById("IdAlto").value=DivObj.style.height.replace("px","");
	document.getElementById("IdBorde").value=DivObj.style.borderWidth.replace("px","");
	document.getElementById("IdColorBorde").value= RGBToHex(DivObj.style.borderColor);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function RGBToHex(a) {
	a=a.replace("rgb(","").replace(")","").replace(" ","").replace(" ","").split(",")
	return "#" + componentToHex(parseInt(a[0])) + componentToHex(parseInt(a[1])) + componentToHex(parseInt(a[2]));
}
