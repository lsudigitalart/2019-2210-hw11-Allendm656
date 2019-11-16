var gate

var mainMay = 0, mainJune = 0, mainJuly = 0, mainAug = 0
var bakeMay = 0, bakeJune = 0, bakeJuly = 0, bakeAug = 0
var blueMay = 0, blueJune = 0, blueJuly = 0, blueAug = 0
var carvMay = 0, carvJune = 0, carvJuly = 0, carvAug = 0
var centMay = 0, centJune = 0, centJuly = 0, centAug = 0
var delmMay = 0, delmJune = 0, delmJuly = 0, delmAug = 0
var edenMay = 0, edenJune = 0, edenJuly = 0, edenAug = 0
var fairMay = 0, fairJune = 0, fairJuly = 0, fairAug = 0
var grenMay = 0, grenJune = 0, grenJuly = 0, grenAug = 0
var joneMay = 0, joneJune = 0, joneJuly = 0, joneAug = 0
var pridMay = 0, pridJune = 0, pridJuly = 0, pridAug = 0
var scotMay = 0, scotJune = 0, scotJuly = 0, scotAug = 0 
var rivrMay = 0, rivrJune = 0, rivrJuly = 0, rivrAug = 0
var zachMay = 0, zachJune = 0, zachJuly = 0, zachAug = 0

function preload(){
  gate = loadTable("EBRP_Library_Gate_Counts.csv")
}

function setup() {
  createCanvas(1600, 705);
//Main
  mainMay = int(gate.get(2, 3))
  mainJune = int(gate.get(3, 3))
  mainJuly = int(gate.get(4, 3))
  mainAug = int(gate.get(1, 3))
//Baker
  bakeMay = int(gate.get(2, 4))
  bakeJune = int(gate.get(3, 4))
  bakeJuly = int(gate.get(4, 4))
  bakeAug = int(gate.get(1, 4))
//Bluebonnet
  blueMay = int(gate.get(2, 5))
  blueJune = int(gate.get(3, 5))
  blueJuly = int(gate.get(4, 5))
  blueAug = int(gate.get(1, 5))
//Carver
  carvMay = int(gate.get(2, 6))
  carvJune = int(gate.get(3, 6))
  carvJuly = int(gate.get(4, 6))
  carvAug = int(gate.get(1, 6))
//Central
  centMay = int(gate.get(2, 7))
  centJune = int(gate.get(3, 7))
  centJuly = int(gate.get(4, 7))
  centAug = int(gate.get(1, 7))
//Delmont Gardens
  delmMay = int(gate.get(2, 8))
  delmJune = int(gate.get(3, 8))
  delmJuly = int(gate.get(4, 8))
  delmAug = int(gate.get(1, 8))
//Eden Park
  edenMay = int(gate.get(2, 9))
  edenJune = int(gate.get(3, 9))
  edenJuly = int(gate.get(4, 9))
  edenAug = int(gate.get(1, 9))
//Fairwood
  fairMay = int(gate.get(2, 10))
  fairJune = int(gate.get(3, 10))
  fairJuly = int(gate.get(4, 10))
  fairAug = int(gate.get(1, 10))
//Greenwell Springs
  grenMay = int(gate.get(2, 11))
  grenJune = int(gate.get(3, 11))
  grenJuly = int(gate.get(4, 11))
  grenAug = int(gate.get(1, 11))

//Jones Creek
  joneMay = int(gate.get(2, 12))
  joneJune = int(gate.get(3, 12))
  joneJuly = int(gate.get(4, 12))
  joneAug = int(gate.get(1, 12))

//Pride
  pridMay = int(gate.get(2, 13))
  pridJune = int(gate.get(3, 13))
  pridJuly = int(gate.get(4, 13))
  pridAug = int(gate.get(1, 13))

//River Center
  rivrMay = int(gate.get(2, 14))
  rivrJune = int(gate.get(3, 14))
  rivrJuly = int(gate.get(4, 14))
  rivrAug = int(gate.get(1, 14))

//Scotlandville
  scotMay = int(gate.get(2, 15))
  scotJune = int(gate.get(3, 15))
  scotJuly = int(gate.get(4, 15))
  scotAug = int(gate.get(1, 15))

//Zachary
  zachMay = int(gate.get(2, 16))
  zachJune = int(gate.get(3, 16))
  zachJuly = int(gate.get(4, 16))
  zachAug = int(gate.get(1, 16))
}

function draw() {
  background(125, 125, 250);
//Text Elements
  fill(0)
  textSize(50)
  text('EBRP Library Gate Count', 5, 45)
  textSize(40)
  strokeWeight(0)
  text('May', 320, 635)
  text('June', 645, 635)
  text('July', 975, 635)
  text('August', 1275, 635)
  textSize(20)
  text('50,000', 120, 120)
  text('43,750', 120, 182.5)
  text('37,500', 120, 245)
  text('31,250', 120, 307.5)
  text('25,000', 120, 370)
  text('18,750', 120, 432.5)
  text('12,500', 120, 495)
  text('6,250', 130, 557.5)
  text('Total: 190,795', 300, 95) //May
  text('Total: 216,376', 625, 95) //June
  text('Total: 195,043', 955, 95) //July
  text('Total: 196,986', 1255, 95) //Aug
  text('1 = Main,', 10, 670)
  text('2 = Baker,', 100, 670)
  text('3 = Bluebonnet,', 200, 670)
  text('4 = Carver,', 350, 670)
  text('5 = Centrel,', 460, 670)
  text('6 = Delmont Gardens,', 580, 670)
  text('7 = Eden park,', 790, 670)
  text('8 = Fairwood,', 930, 670)
  text('9 = Greenwell Springs,', 1070, 670)
  text('10 = Jones Creek,', 1280, 670)
  text('11 = Pride,', 1450, 670)
  text('12 = River Center,', 10, 700)
  text('13 = Scotlandville,', 180, 700)
  text('14 = Zachery', 360, 700)
//Bottom label Row
  strokeWeight(1)
  stroke(0) 
  line(200, 80, 200, 650)
  line(525, 80, 525, 650)
  line(850, 80, 850, 650)
  line(1175, 80, 1175, 650)
  line(1500, 80, 1500, 650)
//Side Label Column
  line(100, 100, 1500, 100)
  line(100, 162.5, 200, 162.5)
  line(100, 225, 200, 225)
  line(100, 287.5, 200, 287.5)
  line(100, 350, 200, 350)
  line(100, 412.5, 200, 412.5)
  line(100, 475, 200, 475)
  line(100, 537.5, 200, 537.55)
  line(100, 600, 1500, 600)
  line(0, 650, 1600, 650)

//May graph
  fill(250)
  rect(220, 600, 20, -mainMay/100)
  rect(240, 600, 20, -bakeMay/100)
  rect(260, 600, 20, -blueMay/100)
  rect(280, 600, 20, -carvMay/100)
  rect(300, 600, 20, -centMay/100)
  rect(320, 600, 20, -delmMay/100)
  rect(340, 600, 20, -edenMay/100)
  rect(360, 600, 20, -fairMay/100)
  rect(380, 600, 20, -grenMay/100)
  rect(400, 600, 20, -joneMay/100)
  rect(420, 600, 20, -pridMay/100)
  rect(440, 600, 20, -rivrMay/100)
  rect(460, 600, 20, -scotMay/100)
  rect(480, 600, 20, -zachMay/100)
//June graph
  rect(545, 600, 20, -mainJune/100)
  rect(565, 600, 20, -bakeJune/100)
  rect(585, 600, 20, -blueJune/100)
  rect(605, 600, 20, -carvJune/100)
  rect(625, 600, 20, -centJune/100)
  rect(645, 600, 20, -delmJune/100)
  rect(665, 600, 20, -edenJune/100)
  rect(685, 600, 20, -fairJune/100)
  rect(705, 600, 20, -grenJune/100)
  rect(725, 600, 20, -joneJune/100)
  rect(745, 600, 20, -pridJune/100)
  rect(765, 600, 20, -rivrJune/100)
  rect(785, 600, 20, -scotJune/100)
  rect(805, 600, 20, -zachJune/100)
//July graph
  rect(870, 600, 20, -mainJuly/100)
  rect(890, 600, 20, -bakeJuly/100)
  rect(910, 600, 20, -blueJuly/100)
  rect(930, 600, 20, -carvJuly/100)
  rect(950, 600, 20, -centJuly/100)
  rect(970, 600, 20, -delmJuly/100)
  rect(990, 600, 20, -edenJuly/100)
  rect(1010, 600, 20, -fairJuly/100)
  rect(1030, 600, 20, -grenJuly/100)
  rect(1050, 600, 20, -joneJuly/100)
  rect(1070, 600, 20, -pridJuly/100)
  rect(1090, 600, 20, -rivrJuly/100)
  rect(1110, 600, 20, -scotJuly/100)
  rect(1130, 600, 20, -zachJuly/100)
//Aug graph
  rect(1195, 600, 20, -mainAug/100)
  rect(1215, 600, 20, -bakeAug/100)
  rect(1235, 600, 20, -blueAug/100)
  rect(1255, 600, 20, -carvAug/100)
  rect(1275, 600, 20, -centAug/100)
  rect(1295, 600, 20, -delmAug/100)
  rect(1315, 600, 20, -edenAug/100)
  rect(1335, 600, 20, -fairAug/100)
  rect(1355, 600, 20, -grenAug/100)
  rect(1375, 600, 20, -joneAug/100)
  rect(1395, 600, 20, -pridAug/100)
  rect(1415, 600, 20, -rivrAug/100)
  rect(1435, 600, 20, -scotAug/100)
  rect(1455, 600, 20, -zachAug/100)

  fill(0)
  noStroke()
  textSize(15)
  text('1', 225, 590)
  text('2', 245, 590)
  text('3', 265, 590)
  text('4', 285, 590)
  text('5', 305, 590)
  text('6', 325, 590)
  text('7', 345, 590)
  text('8', 365, 590)
  text('9', 385, 590)
  text('10', 401, 590)
  text('11', 421, 590)
  text('12', 441, 590)
  text('13', 461, 590)
  text('14', 481, 590)
}
