let p ;
var x;//moving speed
var changeDirection;




function preload(){
  
  imga = loadImage('./pictures/p5jspictures/aliens.png');
  grass = loadImage('./pictures/p5jspictures/grass.png');
  land = loadImage('./pictures/p5jspictures/grassland.png');
  
  x = 1;
    changeDirection = false;
	//this variable acts as a "switch" that decides which direction
	//the circle is going based on it's position
}

var txt ="Homosapien human the theremin is theirs, ok? yes, it is. This is a theremin Humans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and large, complex brains. This has enabled the development of advanced tools, culture, and language. Humans are highly social and tend to live in complex social structures composed of many cooperating and competing groups, from families and kinship networks to political states. Social interactions between humans have established a wide variety of values, social norms, and rituals, which bolster human society. Curiosity and the human desire to understand and influence the environment and to explain and manipulate phenomena have motivated humanity's development of science, philosophy, mythology, religion, and other fields of study. Although some scientists equate the term humans with all members of the genus Homo, in common usage it generally refers to Homo sapiens, the only extant member. Anatomically modern humans emerged around 300,000 years ago in Africa, evolving from Homo heidelbergensis and migrating out of Africa, gradually replacing local populations of archaic humans. For most of history, all humans were nomadic hunter-gatherers. The Neolithic Revolution, which began in Southwest Asia around 13,000 years ago (and separately in a few other places), saw the emergence of agriculture and permanent human settlement. As populations became larger and denser, forms of governance developed within and between communities, and a number of civilizations have risen and fallen. Humans have continued to expand, a global population of over 7.9 billion as of March 2022. Genes and the environment influence human biological variation in visible characteristics, physiology, disease susceptibility, mental abilities, body size, and life span. Though humans vary in many traits (such as genetic predispositions and physical features), any two humans are at least 99% genetically similar. Humans are sexually dimorphic: Generally, men have greater body strength, and women have a higher body fat percentage. At puberty, humans develop secondary sex characteristics. Women are capable of pregnancy, undergo menopause and become infertile at around the age of 50. Humans are omnivorous, capable of consuming a wide variety of plant and animal material, and have used fire and other forms of heat to prepare and cook food since the time of H. erectus. They can survive for up to eight weeks without food, and three or four days without water. Humans are generally diurnal, sleeping on average seven to nine hours per day. Childbirth is dangerous, with a high risk of complications and death. Often, both the mother and the father provide care for their children, who are helpless at birth. Humans have a large and highly developed prefrontal cortex, the region of the brain associated higher cognition. They are intelligent, capable of episodic memory, have flexible facial expressions, self-awareness and a theory of mind. The human mind is capable of introspection, private thought, imagination, volition and forming views on existence. This has allowed great technological advancements and complex tool development possible through reason and the transmission of knowledge to future generations. Language, art and trade are defining characteristics of humans. Long-distance trade routes might have led to cultural explosions and resource distribution that gave humans an advantage over other similar species. ";
var porder = 0;//determine the number of things in one group//
var pngrams = {};
var paragraphbutton; 

function setup() { 

    //put this sketch in the div in html main//
  let c = createCanvas(400, 400);
  c.parent("sketch");
  
  for(var p = 0; p <= txt. length - porder; p++){
    var paragraphgramp = txt.substring(p, p + porder);//this determine the selection starts from where to where//
    
    if (!pngrams [paragraphgramp])  {
        pngrams[paragraphgramp] = []; 
    }
    pngrams [paragraphgramp].push(txt.charAt(p + porder));  
  }
  
  paragraphbutton = createButton("Hsmaaesia, please give me a name");
  paragraphbutton.mousePressed(paragraphmarkovIt);
  paragraphbutton.position(0,0);
  console.log(pngrams);

  
}

function draw() {
  background(40,68,94);
  
  image(land,0,270,400,130);
  noStroke();
  quad(50, 390, x+20,90, x+80, 90, 350, 390);
  fill(144,255,110,40);
  image(imga,x,10,100,100); 
	if(x>300){
		changeDirection=true}
	//if the circle passes the right side, change the direction
	//effects of direction change happen below
	else if (x<=0){
		changeDirection=false}
	//if the circle passes the left side (or becomes equal to 0)
	//changes the direction, effects are in the next if statement below
	
	if (x>=0 && changeDirection == false){
		x=x+1}
	//if x is greater than OR equal to 0, move right
	else if(changeDirection == true){
		x=x-1}
	//once the switch is changed, x must have been bigger than width
	//move circle back to the left
   image(grass,0,350,400,50);
  
}






function paragraphmarkovIt() {
  
  var paragraphGram = txt.substring(0, porder); //start from 0 to 3//
  var presult = paragraphGram;
  
  for(var p = 0; p < 10; p++){ 
 
  var ppossibilities = pngrams[paragraphGram];   //what posible can the next character be//
  var paragraphnext = random(ppossibilities);
  presult += paragraphnext;
    var lenn = presult.length;
    paragraphGram = presult.substring(lenn- porder, lenn);  
   }
  
  createP(presult);

}


