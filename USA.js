window.onload = function() { //page chargée, alors lancer fonction
var States=['Alabama',"Alaska","Arizona","Arkansas","Californie","Caroline du Nord","Caroline du Sud","Colorado","Connecticut","Dakota du Nord",
"Dakota du Sud", "Deleware","Floride","Géorgie","Hawaï","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiane","Maine","Maryland",
"Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New York","Nouveau-Mexique",
"Ohio","Oklahoma","Oregon","Pennsylvanie","Rhode Island","Tennessee","Texas","Utah","Vermont","Virginie","Virginie-Occidentale","Washington",
"Wisconsin","Wyoming"]; 
var tableauImage=["Alabama.png","Alaska.png","Arizona.png","Arkansas.png","Californie.png","Caroline du Nord.png","Caroline du Sud.png","Colorado.png",
"Connecticut.png","Dakota du Nord.png","Dakota du Sud.png", "Delaware.png","Floride.png","Géorgie.png","Hawaï.png","Idaho.png","Illinois.png","Indiana.png",
"Iowa.png","Kansas.png","Kentucky.png","Louisiane.png","Maine.png","Maryland.png","Massachusetts.png","Michigan.png","Minnesota.png","Mississippi.png",
"Missouri.png","Montana.png","Nebraska.png","Nevada.png","New Hampshire.png","New Jersey.png","New York.png","Nouveau-Mexique.png","Ohio.png",
"Oklahoma.png","Oregon.png","Pennsylvanie.png","Rhode Island.png","Tennessee.png","Texas.png","Utah.png","Vermont.png","Virginie.png",
"Virginie Occidentale.png","Washington.png","Wisconsin.png","Wyoming.png"];
var position=[787,564,141,702,236,526,658,543,82,387,938,483,922,542,386,406,1040,260,501,164,500,254,1001,362,919,694,866,564,402,782,233,249,720,381,779,354,632,329,535,435,823,421,
659,627,1073,122,967,347,1048,236,803,274,611,204,720,596,652,412,341,165,515,345,164,363,1045,202,1013,319,978,226,365,542,846,362,558,524,116,209,957,294,1059,255,778,479,520,654,
264,388,1021,199,950,395,890,396,138,108,702,252,362,292];
var city=['Montgomery','Juneau','Phoenix','Little rock','Sacramento','Raleigh','Columbia','Denver','Hartford','Bismarck','Pierre','Dover','Tallahasee','Atlanta','Honolulu','Boise','Springfield','Indianapolis','Des Moines','Topeka','Franckfort','Bâton-rouge','Augusta',
'Annapolis','Boston','Lansing','Saint Paul','Jackson','Jefferson City','Helena','Lincoln','Carson City','Concord','Trenton','Albany','Santa Fe','Colombus','Oklahoma City','Salem','Harrisburg','Providence','Nashville','Austin',
'Salt Lake City','Montepelier','Richmond','Charleston','Olympia','Madison','Cheyenne'];

o=0; //initialisation des variables
p=0;

flag=true; //prend "true" ou "false"
start1=false;
start2=false;
start3=false;

player = document.querySelector('#audioPlayer');
canvas=document.getElementById("carte"); //premier canvas (carte)
ctx=canvas.getContext("2d");
canvas2=document.getElementById("reponses"); //second canvas (partie gauche)
ctx2=canvas2.getContext("2d");

chaine();
function chaine(){ //fonction page d'accueil

	ctx.clearRect(0,0, 1200, 1000); //nettoyage du 1er canvas
	ctx2.clearRect(0,0, 1000, 1000);
	ctx.fillStyle = "white"; //couleur de remplissage du 1er canvas
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.font = "20pt Calibri,Geneva,Arial"; //taille et code police 2è canvas
    ctx2.strokeStyle = "rgb(0,0,0)"; //couleur bordures 2è canvas
    ctx2.fillStyle = "rgb(0,20,180)"; //couleur police
    ctx2.fillText("Drapeaux", 50, 100); //affichage texte 2è canvas
	ctx2.fillText("Etat", 50, 270);
	ctx2.fillText("Capitales", 50, 450);
	ctx.font = "50px Calibri,Geneva,Arial"; //taille et code police
	ctx.fillStyle = "red";
	ctx.fillText("Règles du jeu", 420, 50);
	ctx.fillStyle = "black";
	ctx.font = "30px Calibri,Geneva,Arial";
	ctx.fillText("Drapeaux : Vous devez choisir entre 3 drapeaux d'Etat.", 20, 100); //règles du jeu avec leur emplacement dans le 1er canvas
	ctx.fillText("La carte désigne un Etat, trouvez le drapeau correspondant.", 157, 140);
	ctx.fillText("Etat : Vous devez choisir entre 3 noms d'Etat.", 20, 270);
	ctx.fillText("La carte désigne un Etat, trouvez le nom correspondant.", 97, 310);
	ctx.fillText("Capitales : Vous devez choisir entre 3 noms d'Etat.", 20, 450);
	ctx.fillText("La carte désigne une capitale, trouvez le nom de l'Etat correspondant.", 152, 490);

        function getMousePos(evt) { //permet d'obtenir coordonnées souris
        var rect = reponses.getBoundingClientRect(); // renvoi les propriétés css associées au canvas
        return {
          y: evt.clientY -rect.top 
             }
        }
		
      reponses.addEventListener('mousemove', function(evt) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt); // déclaration fonction permettant de donner les coordonnées de la souris
		reponses.addEventListener("click",menu); //au click, je lance la fonction ci-dessous
 function menu (){
 if(flag){
	if (mousePos.y>=0 && mousePos.y<=175){ //si position souris en ordonnées est comprise entre 0 et 175
		drapeaux();                        //alors je lance la fonction drapeaux
		flag=false;
	}
	if (mousePos.y>=177 && mousePos.y<=351){
		Etat();
		flag=false;
	}
	if (mousePos.y>=353 && mousePos.y<=528){
		capitales();
		flag=false;
	}
	if (mousePos.y>=530 && mousePos.y<=600){
		
	}
 }
 }
 },false);

function drapeaux(){ //fonction 1er programme

	start1=true;
	mousePos =550; 
	ctx2.clearRect(0,0, 1000, 1050); //nettoyage du 2è canvas
r=Math.floor(Math.random()*50); //calcul d'un nombre aléatoire compris entre 0 et 49
s=Math.floor(Math.random()*50);
t=Math.floor(Math.random()*50);

	while (s==r){ //tant que s=r, je recommence de nouveaux calculs pour r
		r=Math.floor(Math.random()*50);
		}
	while (t==r) {
		t=Math.floor(Math.random()*50);
		}
	while (s==t) {
		s=Math.floor(Math.random()*50);
		}
	
console.log("r="+r); //afficher r dans le débogueur
console.log("s="+s);
console.log("t="+t);
u=Math.floor(Math.random()*3); //u bonne réponse, soit 0,1,ou 2
	if (u==0){
		vx=position[2*r]; //aller chercher les abscisses dans le tableau position
		vy=position[2*r+1]; //aller chercher les ordonnées dans le même tableau
		}
	if (u==1){
		vx=position[2*s];
		vy=position[2*s+1];
		}
	if (u==2){
		vx=position[2*t];
		vy=position[2*t+1];
		} 
console.log(u); //afficher u dans le débogueur
console.log(vx,vy); //afficher les coordonnées du point
Img = new Image(); // image à charger 
Img.src="CapitalesUSA.jpg"; // image dans canvas    
Img.addEventListener("load",Trace); //au chargement, je lance Trace

var Img0 = new Image(); //1ère image, nouvelle image
Img0.src = "Drapeaux/"+tableauImage[r]; //je vais chercher mes images dans le dossier Drapeaux
Img0.addEventListener("load",Trace);

var Img1 = new Image();
Img1.src = "Drapeaux/"+tableauImage[s];
Img1.addEventListener("load",Trace);

var Img2 = new Image();
Img2.src = "Drapeaux/"+tableauImage[t];
Img2.addEventListener("load",Trace);

function trait() //fonction qui met des cadres 
{
ctx2.clearRect(0,0, 1000, 750);
 ctx2.fillStyle = "white"; //couleur de fond du canvas 2
	ctx2.fillRect(0, 0, canvas.width, canvas.height); 
ctx2.beginPath();
ctx2.lineWidth=3;
ctx2.moveTo(0,176); //un "serpent" pour faire une ligne
ctx2.lineTo(247,176);
ctx2.lineTo(247,352);
ctx2.lineTo(-1,352);
ctx2.lineTo(-1,528);
ctx2.lineTo(247,528);
ctx2.strokeStyle = "black"; //la ligne est noire
ctx2.stroke();
}
trait();

function circle() //fonction cercle
{
ctx.clearRect(0,0, 1200, 1000);
ctx.globalCompositeOperation='destination-over'; //le cercle est au premier plan (devant la carte)
ctx.beginPath(); 
ctx.arc(vx,vy,4,0,Math.PI*2,true); 	//point placé sur la carte
ctx.fillStyle = "blue"; //couleur de remplissage
ctx.fillText("ICI", vx-20, vy-15);
ctx.strokeStyle = "blue"; //couleur des contours
ctx.fill(); 
ctx.stroke();
}
circle();

	ctx2.font = "20pt Calibri,Geneva,Arial";
    ctx2.strokeStyle = "rgb(0,0,0)";
    ctx2.fillStyle = "rgb(0,20,180)";
    ctx2.fillText("Score         /10", 50, 800); //affiche la limite du score
    ctx2.fillText(p, 135, 800); //affiche le score
	
 function Trace(){
 ctx.drawImage(Img,0,0,1200,819); //coordonnées du 1er canvas
 ctx2.drawImage(Img0,0,0,246,175); //coordonnées de 3 drapeaux
 ctx2.drawImage(Img1,0,177,246,175);
 ctx2.drawImage(Img2,0,353,246,175);
 }

 function getMousePos(evt2) {
        var rect = reponses.getBoundingClientRect(); //obtient les coordonnées du client
        return {
          y: evt2.clientY -rect.top
             }
        }

      reponses.addEventListener('mousemove', function(evt2) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt2); // déclaration fonction permettant de donner les coordonnées de la souris
	 reponses.addEventListener("click",hasard);
 function hasard (){
	 if (start1){
	if (mousePos.y>=0 && mousePos.y<=175){ //définit les zones en ordonnées
		Verif0();
	}
	if (mousePos.y>=177 && mousePos.y<=351){
		Verif1();
	}
	if (mousePos.y>=353 && mousePos.y<=528){
		Verif2();
	}
	if (mousePos.y>=530 && mousePos.y<=600){
		
	}
	 }
 }
 },false);
function Verif0() //fonction qui vérifie le résultat du click
 {
 var w=0;
	if (w==u){ //si résultat bon
 repV();       //alors je lance repV
	}else{     //sinon
 repF();       //je lance repF
}
}

 function Verif1()
 {
 var w=1
	if (w==u){
 repV();
	}else{
 repF();
}
}

 function Verif2()
 {
 var w=2
	if (w==u){
 repV();
	}else{
 repF();
}
}
function repV () //réponse vraie
{
start1=false;
player.play();
	o=o+1; //compte le nombre de réponses données
	p=p+1; //compte le nombre de réponses vraies
	ctx2.clearRect(0,750, 1000, 1000);
	 ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.fillStyle = "blue";
	ctx2.fillText("Score         /10", 50, 800);
	ctx2.fillText(p, 135, 800);
	ctx2.fillText("Bonne réponse !", 30, 600);
		if (o==10){              //si jeu terminé
    window.setTimeout(FIN, 1500);//alors après 3s, je lance FIN
	}else{
    window.setTimeout(drapeaux, 1500); //sinon je relance drapeaux
 }
 }
 
 function repF () //réponse fausse
 {
start1=false;
	o=o+1; 
	ctx2.fillText("Faux, la réponse est :", 10, 600); //texte explicatif de l'erreur
	ctx2.fillText("Le drapeau n°", 10, 630);
	ctx2.fillText(u+1, 170, 630); //j'affiche le bon résultat
		if (o==10){
    window.setTimeout(FIN, 3000);
 }else{
 window.setTimeout(drapeaux, 4000);
 }
 }
 
 function FIN (){
	 start1=false;
 ctx.clearRect(0,0, 1200, 1000);
 ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
 mousePos = 0; //j'initialise la position de la souris
 ctx2.clearRect(0,0, 1000, 1000);
  ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.fillStyle = "blue";
	ctx.font = "80px Calibri,Geneva,Arial";
 ctx2.fillText("FIN", 100, 400); //je marque FIN
 ctx2.fillText("Score         /10", 50, 800);
 ctx.fillStyle = "red";
 ctx.font = "40px Calibri,Geneva,Arial";
 ctx.globalCompositeOperation='source-over';
 ctx.fillText("Menu", 300, 400); //j'affiche le menu dans le premier canvas
 ctx.fillText("Recommencer", 600, 400); //je peux sinon recommencer le même jeu
 ctx2.fillText(p, 135, 800);
 
 function getMousePos(evt2) {
        var rect = carte.getBoundingClientRect(); // renvoi les propriétés css associées au canvas
        return {
		  x: evt2.clientX -rect.left,
          y: evt2.clientY -rect.top 
             }
        }
      carte.addEventListener('mousemove', function(evt2) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt2); // déclaration fonction permettant de donner les coordonnées de la souris
	 carte.addEventListener("click",choix);
	function choix (){ //je choisis entre menu et recommencer
	if (mousePos.x>=300 && mousePos.x<=500 && mousePos.y>=350 && mousePos.y<=450){ //enfonction de la position de la souris
		chaine();
		o=0;
		p=0;
		flag=true;
	}
	if (mousePos.x>=600 && mousePos.x<=800 && mousePos.y>=350 && mousePos.y<=450){
		drapeaux();
		o=0;
		p=0;
	}
	}
 },false);
 }
}
function Etat(){
start2=true;

    ctx2.clearRect(0,0, 1000, 1050);
	mousePos =550;
r=Math.floor(Math.random()*50);
s=Math.floor(Math.random()*50);
t=Math.floor(Math.random()*50);

	while (s==r){
		r=Math.floor(Math.random()*50);
		}
	while (t==r) {
		t=Math.floor(Math.random()*50);
		}
	while (s==t) {
		s=Math.floor(Math.random()*50);
		}
	
u=Math.floor(Math.random()*3);
	if (u==0){
		vx=position[2*r];
		vy=position[2*r+1];
		}
	if (u==1){
		vx=position[2*s];
		vy=position[2*s+1];
		}
	if (u==2){
		vx=position[2*t];
		vy=position[2*t+1];
		} 

var Img = new Image(); // image à charger 
Img.src="CapitalesUSAvierge.jpg"; // image dans canvas    
Img.addEventListener("load",Trace);

function trait()
{
ctx2.clearRect(0,0, 1000, 750);
 ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
ctx2.beginPath();
ctx2.lineWidth=3;
ctx2.moveTo(0,176);
ctx2.lineTo(247,176);
ctx2.lineTo(247,352);
ctx2.lineTo(-1,352);
ctx2.lineTo(-1,528);
ctx2.lineTo(247,528);
ctx2.strokeStyle = "black"; 
ctx2.stroke();
}
trait();

function circle()
{
ctx.clearRect(0,0, 1200, 1000);
ctx.globalCompositeOperation='destination-over';
ctx.beginPath(); 
ctx.arc(vx,vy,4,0,Math.PI*2,true); 	//point placé sur la carte
ctx.fillStyle = "blue"; //couleur de remplissage
ctx.fillText("ICI", vx-13, vy-8);
ctx.strokeStyle = "blue"; //couleur des contours
ctx.fill(); 
ctx.stroke();
}
circle();

    ctx2.font = "20pt Calibri,Geneva,Arial";
    ctx2.strokeStyle = "rgb(0,0,0)";
    ctx2.fillStyle = "rgb(0,20,180)";
    ctx2.fillText("Score         /10", 50, 800);
	    ctx2.fillText(p, 135, 800);
	
 function Trace(){
 ctx2.fillText(States[r], 10, 100);
 ctx2.fillText(States[s], 10, 270);
 ctx2.fillText(States[t], 10, 450);
 ctx.drawImage(Img,0,0,1202,826);
 }

 function getMousePos(evt2) {
        var rect = reponses.getBoundingClientRect(); // renvoi les propriétés css associées au canvas
        return {
          y: evt2.clientY -rect.top 
             }
        }

      reponses.addEventListener('mousemove', function(evt2) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt2); // déclaration fonction permettant de donner les coordonnées de la souris
	 reponses.addEventListener("click",zut);
 function zut (){
	 if (start2){
	if (mousePos.y>=0 && mousePos.y<=175){
		Verif0();
	}
	if (mousePos.y>=177 && mousePos.y<=351){
		Verif1();
	}
	if (mousePos.y>=353 && mousePos.y<=528){
		Verif2();
	}
	if (mousePos.y>=530 && mousePos.y<=600){
	}
	 }
 }
 },false);

function Verif0(){
 var w=0;
	if (w==u){
 repV();
	}else{
 repF();
}
}

 function Verif1(){
 var w=1;
	if (w==u){
 repV();
	}else{
 repF();
}
}

 function Verif2(){
 var w=2;
	if (w==u){
 repV();
	}else{
 repF();
}
}
function repV (){
start2=false;
player.play();
	o=o+1;
	p=p+1;
	ctx2.clearRect(0,750, 1000, 1000);
	 ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.fillStyle = "blue";
	ctx2.fillText("Score         /10", 50, 800);
	ctx2.fillText(p, 135, 800);
	ctx2.fillText("Bonne réponse !", 30, 600);
		if (o==10){
    window.setTimeout(FIN, 1500);
	}else{
    window.setTimeout(Etat, 1500);
 }
 }
 
 function repF (){
start2=false;
	o=o+1;
	ctx2.fillText("Faux, la réponse est :", 10, 600);
	if(u==0){
	ctx2.fillText(States[r], 10, 630);}
	if(u==1){
	ctx2.fillText(States[s], 10, 630);}
	if(u==2){
	ctx2.fillText(States[t], 10, 630);}
		if (o==10){
    window.setTimeout(FIN, 3000);
 }else{
 window.setTimeout(Etat, 4000);
 }
 }
 function FIN (){
	 start2=false;
 ctx.clearRect(0,0, 1200, 1000);
  ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
  mousePos = 0;
 ctx2.clearRect(0,0, 1000, 1000);
  ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.fillStyle = "blue";
	ctx.font = "80px Calibri,Geneva,Arial";
 ctx2.fillText("FIN", 100, 400);
 ctx2.fillText("Score         /10", 50, 800);
 ctx.font = "40px Calibri,Geneva,Arial";
 ctx.globalCompositeOperation='source-over';
 ctx.fillStyle = "red";
 ctx.fillText("Menu", 300, 400);
 ctx.fillText("Recommencer", 600, 400);
 ctx2.fillText(p, 135, 800);
 
 function getMousePos(evt2) {
        var rect = carte.getBoundingClientRect(); // renvoi les propriétés css associées au canvas
        return {
		  x: evt2.clientX -rect.left,
          y: evt2.clientY -rect.top 
             }
        }

      carte.addEventListener('mousemove', function(evt2) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt2); // déclaration fonction permettant de donner les coordonnées de la souris
	 carte.addEventListener("click",choix);
	function choix (){
	if (mousePos.x>=300 && mousePos.x<=500 && mousePos.y>=350 && mousePos.y<=450){
		chaine();
		o=0;
		p=0;
		flag=true;
	}
	if (mousePos.x>=600 && mousePos.x<=800 && mousePos.y>=350 && mousePos.y<=450){
		Etat();
		o=0;
		p=0;
	}
	}
 },false);
 }
}
function capitales(){
start3=true;

	mousePos =550;
	ctx2.clearRect(0,0, 1000, 1000);
r=Math.floor(Math.random()*50);
s=Math.floor(Math.random()*50);
t=Math.floor(Math.random()*50);

	while (s==r){
		r=Math.floor(Math.random()*50);
		}
	while (t==r) {
		t=Math.floor(Math.random()*50);
		}
	while (s==t) {
		s=Math.floor(Math.random()*50);
		}

u=Math.floor(Math.random()*3);

		v1x=position[2*r];
		v1y=position[2*r+1];
	
		v2x=position[2*s];
		v2y=position[2*s+1];
	
		v3x=position[2*t];
		v3y=position[2*t+1];

Img = new Image(); 
Img.src="CapitalesUSA.jpg";  
Img.addEventListener("load",Trace);

function rond(){
ctx.clearRect(0,0, 1200, 1000);
ctx.globalCompositeOperation='destination-over';
ctx.beginPath(); 
ctx.arc(v1x,v1y,6,0,Math.PI*2,true); 	
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath(); 
ctx.arc(v2x,v2y,6,0,Math.PI*2,true); 	
ctx.fill(); 
ctx.stroke();

ctx.beginPath(); 
ctx.arc(v3x,v3y,6,0,Math.PI*2,true); 	
ctx.fill(); 
ctx.stroke();
}
rond();

  ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	
    ctx2.font = "20pt Calibri,Geneva,Arial";
    ctx2.strokeStyle = "rgb(0,0,0)";
    ctx2.fillStyle = "rgb(0,20,180)";
    ctx2.fillText("Score         /10", 50, 800);
	    ctx2.fillText(p, 135, 800);

 function Trace(){
  if(u==0){
 ctx2.fillText(city[r], 10, 250);
  }
  if(u==1){
 ctx2.fillText(city[s], 10, 250);
  }
  if(u==2){
 ctx2.fillText(city[t], 10, 250);
  }
 ctx.drawImage(Img,0,0,1200,819);
 }
 
 function getMousePos(evt2) {
        var rect = carte.getBoundingClientRect(); // renvoi les propriétés css associées au canvas
        return {
		  x: evt2.clientX -rect.left,
          y: evt2.clientY -rect.top 
             }
        }

      carte.addEventListener('mousemove', function(evt2) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt2); // déclaration fonction permettant de donner les coordonnées de la souris
	 carte.addEventListener("click",boucle);
 function boucle (){
	 if (start3){
	if (mousePos.x>=v1x-3 && mousePos.x<=v1x+3 && mousePos.y>=v1y-3 && mousePos.y<=v1y+3){
		Verif0();
	}
	if (mousePos.x>=v2x-3 && mousePos.x<=v2x+3 && mousePos.y>=v2y-3 && mousePos.y<=v2y+3){
		Verif1();
	}
	if (mousePos.x>=v3x-3 && mousePos.x<=v3x+3 && mousePos.y>=v3y-3 && mousePos.y<=v3y+3){
		Verif2();
	}
	 }
 }
 },false);

function Verif0()
 {
 var w=0;
	if (w==u){
 repV();
	}else{
 repF();
}
}

 function Verif1()
 {
 var w=1;
	if (w==u){
 repV();
	}else{
 repF();
}
}

 function Verif2()
 {
 var w=2;
	if (w==u){
 repV();
	}else{
 repF();
}
}

function repV (){
start3=false;
player.play();
	ctx.clearRect(0,0, 1200, 1000);
	o=o+1;
	console.log("o="+o);
	p=p+1;
	ctx2.clearRect(0,750, 1000, 1000);
	 ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(Img,0,0,1200,819);
	ctx2.fillStyle = "blue";
	ctx2.fillText("Score         /10", 50, 800);
	ctx2.fillText(p, 135, 800);
	ctx2.fillText("Bonne réponse !", 30, 600);
if (u==0){
ctx.beginPath(); 
ctx.globalCompositeOperation='source-over';
ctx.arc(v1x,v1y,6,0,Math.PI*2,true); 	
ctx.fill(); 
ctx.stroke();
}
if (u==1){
ctx.beginPath(); 
ctx.globalCompositeOperation='source-over';
ctx.arc(v2x,v2y,6,0,Math.PI*2,true); 
ctx.fill(); 
ctx.stroke();
}
if (u==2){
ctx.beginPath(); 
ctx.globalCompositeOperation='source-over';
ctx.arc(v3x,v3y,6,0,Math.PI*2,true); 
ctx.fill(); 
ctx.stroke();
}
		if (o==10){
    window.setTimeout(FIN, 1500);
	}else{
    window.setTimeout(capitales, 1500);
 }
 }
 
 function repF (){
start3=false;
	ctx.clearRect(0,0, 10000, 10000);
	o=o+1;
	ctx.drawImage(Img,0,0,1200,819);
	ctx2.fillText("Faux, la réponse est ", 10, 600);
	ctx2.fillText("sur la carte", 10, 630);
	console.log(u)
if (u==0){
	ctx.globalCompositeOperation='source-over';
	ctx.beginPath();
ctx.arc(v1x,v1y,6,0,Math.PI*2,true); 	
ctx.fill(); 
ctx.stroke();
}
if (u==1){
	ctx.globalCompositeOperation='source-over';
	ctx.beginPath();
ctx.arc(v2x,v2y,6,0,Math.PI*2,true); 
ctx.fill(); 
ctx.stroke();
}
if (u==2){
	ctx.globalCompositeOperation='source-over';
	ctx.beginPath();
ctx.arc(v3x,v3y,6,0,Math.PI*2,true); 
ctx.fill(); 
ctx.stroke();
}
		if (o==10){
    window.setTimeout(FIN, 3000);
	}else{
    window.setTimeout(capitales, 3000);
 }
 }
 function FIN (){
	start3=false;
 ctx.clearRect(0,0, 1200, 1000);
  ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
 mousePos = 0;
 ctx2.clearRect(0,0, 1000, 1000);
  ctx2.fillStyle = "white";
	ctx2.fillRect(0, 0, canvas.width, canvas.height);
	ctx2.fillStyle = "blue";
	ctx.font = "80px Calibri,Geneva,Arial";
 ctx2.fillText("FIN", 100, 400);
 ctx2.fillText("Score         /10", 50, 800);
 ctx.font = "40px Calibri,Geneva,Arial";
 ctx.globalCompositeOperation='source-over';
 ctx.fillStyle = "red";
 ctx.fillText("Menu", 300, 400);
 ctx.fillText("Recommencer", 600, 400);
 ctx2.fillText(p, 135, 800);
 
 function getMousePos(evt2) {
        var rect = carte.getBoundingClientRect(); // renvoi les propriétés css associées au canvas
        return {
		  x: evt2.clientX -rect.left,
          y: evt2.clientY -rect.top 
             }
        }

      carte.addEventListener('mousemove', function(evt2) { // écouteur d'évenements sur déplacement souris
        mousePos = getMousePos(evt2); // déclaration fonction permettant de donner les coordonnées de la souris
	 carte.addEventListener("click",choix);
	function choix (){
	if (mousePos.x>=300 && mousePos.x<=500 && mousePos.y>=350 && mousePos.y<=450){
		chaine();
		o=0;
		p=0;
		flag=true;
	}
	if (mousePos.x>=600 && mousePos.x<=800 && mousePos.y>=350 && mousePos.y<=450){
		capitales();
		o=0;
		p=0;
	}
	}
 },false);
 }
}
 }
	}