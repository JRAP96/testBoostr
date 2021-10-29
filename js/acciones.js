const lienzo=document.querySelector("#lienzo");
const ctx=lienzo.getContext('2d');
const lienzo2=document.querySelector("#lienzo2");
const ctx2=lienzo2.getContext('2d');
const datos=document.querySelector("#datos");
const parrafo1=document.querySelector("#parrafo1");
const Dibujar=document.querySelector("#Dibujar");
const Borrar=document.querySelector("#Borrar");
const Dibujar2=document.querySelector("#Dibujar2");
const Dibujar3=document.querySelector("#Dibujar3");
const Dibujar4=document.querySelector("#Dibujar4");
const Borrar2=document.querySelector("#Borrar2");
const borrar2=document.getElementById("borrar2");

/* Para activar los Popovers a nivel general en todo el codigo */
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


function maquetar() {
    let datos1=datos.value;
    let Datos=datos1.split(",");
    for (let i = 0; i < Datos.length; i++) {
        if (Datos[i]==='') {
            Datos.splice(i,1);
        }
    }
    function comparar(a,b) {
        return a-b;
    }
    let DatosOrd=Datos.sort(comparar);
    parrafo1.innerText=`Datos ordenados: ${DatosOrd}`;

    return DatosOrd;
}

function maquetar1() {
    let DatosOrde=maquetar();
    let long=DatosOrde.length/2;
    let posmed=Math.floor(long);
    let vposmed=DatosOrde[posmed];
    function isEven(value) {
        if (value%2==0) {
            return true;
        } else
        return false;
    }
    let a = {x:5, y:480} // el punto a como objeto
    let b = {x:695, y:480}  // el punto b como objeto
    let n = 20;
    ctx.font="15pt Verdana";
	ctx.fillStyle = "black";
    ctx.lineWidth = 1;
	ctx.strokeStyle = "#A9333A";
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
	ctx.stroke();
    ctx.strokeStyle = "red";
    for (let i = 0; i <= n; i++) {
    let s = {
    x: ((b.x - a.x) * i / n) + a.x,
    y: ((b.y - a.y) * i / n) + a.y,
    vpmx: ((b.x - a.x) * (vposmed / n)) + a.x
    }
    ctx.beginPath();
    ctx.font="8pt Verdana";
    ctx.arc(s.x, s.y, 3, 0, 2 * Math.PI);
    ctx.fillText(i.toString(),s.x-5,s.y+15);
    ctx.stroke();
    if(isEven(DatosOrde.length)===true){
        ctx.font="10pt Verdana";
        ctx.fillText(vposmed.toString(),s.vpmx,150);
        ctx.fillText(DatosOrde[posmed-1].toString(),s.vpmx-35,150);
        for (let j = posmed-2, k=1; j>=0; j--, k++) {
            ctx.font="10pt Verdana";
            ctx.fillText(DatosOrde[j].toString(),s.vpmx-35-(k*35),150+(k*35));
        }
        for (let k = posmed+1,j=1; k<DatosOrde.length;k++,j++){
            ctx.font="10pt Verdana";
            ctx.fillText(DatosOrde[k].toString(),s.vpmx+(j*35),150+(j*35));
        }
        ctx.beginPath();
        ctx.moveTo(s.vpmx,a.y+20);
        ctx.lineTo(s.vpmx,0);
        ctx.moveTo(s.vpmx-35,a.y+20);
        ctx.lineTo(s.vpmx-35,0);
        ctx.lineWidth = 1;
	    ctx.strokeStyle = "#EADCA6";
        ctx.stroke();
        ctx.fillText("La mediana es algún valor entre: "+DatosOrde[posmed-1].toString()+" y "+vposmed.toString(),30,40)
    } else {
        ctx.font="10pt Verdana";
        ctx.fillText(vposmed.toString(),s.vpmx,150);
        for (let j = posmed-1, k=1; j>=0; j--, k++) {
            ctx.font="10pt Verdana";
            ctx.fillText(DatosOrde[j].toString(),s.vpmx-(k*35),150+(k*35));
        }
        for (let k = posmed+1,j=1; k<DatosOrde.length;k++,j++){
            ctx.font="10pt Verdana";
            ctx.fillText(DatosOrde[k].toString(),s.vpmx+(j*35),150+(j*35));
        }
        ctx.beginPath();
        ctx.moveTo(s.vpmx,a.y+20);
        ctx.lineTo(s.vpmx,0);
        ctx.lineWidth = 1;
	    ctx.strokeStyle = "#EADCA6";
        ctx.stroke();
        ctx.fillText("La mediana es: "+vposmed.toString(),s.vpmx,50);
    }
    }
}

function maquetar3() {
    ctx2.fillRect(25,25,100,100);
    ctx2.clearRect(45,45,60,60);
    ctx2.strokeRect(50,50,50,50);
}

function maquetar4() {
    ctx2.beginPath();
    ctx2.moveTo(75,40);
    ctx2.bezierCurveTo(75,37,70,25,50,25);
    ctx2.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx2.bezierCurveTo(20,80,40,102,75,120);
    ctx2.bezierCurveTo(110,102,130,80,130,62.5);
    ctx2.bezierCurveTo(130,62.5,130,25,100,25);
    ctx2.bezierCurveTo(85,25,75,37,75,40);
    ctx2.fill();
}

function maquetar5() {
    ctx2.beginPath();
imagen1=new Image(); //iniciar ruta
imagen1.src="https://i.blogs.es/0ca5da/ambulo_polar_wide/1366_2000.jpg"; //nuevo objeto imagen
imagen1.onload=function() { //la imagen debe cargarse
    relleno=ctx2.createPattern(imagen1,"repeat"); //método createPattern
    ctx2.fillStyle=relleno; //imagen como relleno
    x=90; //posición inicial de ventanas.
    y=25;
    ctx2.strokeStyle="maroon"; //estilo línea ventanas
    ctx2.lineWidth=3 //grosor línea ventanas
      for (i=1;i<=10;i++) { //bucles para crear ventanas.
        for (j=1;j<=10;j++) {
          ctx2.strokeRect(x,y,55,40); //contorno ventana
          ctx2.fillRect(x,y,55,40); //relleno ventana
          x+=60; //posicion x para ventana siguiente
        }
        y+=45; //posición y para ventana siguiente
        x=90; //posición x inicio nueva línea.
      }
    }		
}


Dibujar.addEventListener("click",maquetar);
Dibujar.addEventListener("click",maquetar1);
Dibujar2.addEventListener("click",maquetar3);
Dibujar3.addEventListener("click",maquetar4);
Dibujar4.addEventListener("click",maquetar5);
Borrar.addEventListener("click",function(){
    lienzo.width=lienzo.width;
},false);
Borrar2.addEventListener("click",function(){
    lienzo2.width=lienzo2.width;
},false);
borrar2.addEventListener("click",function(){
    lienzo.width=lienzo.width;
},false)

/* Valores de prueba:
2,10,11,12,15,19,18,11,11,10,8,19,19,19
0,1,2,2,1,0,0,1,5,4,6,8,9,4,3,8,7,3
*/