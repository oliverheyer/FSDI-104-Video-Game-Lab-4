
class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
       
        this.id=id;
    
    }

display = function(){
    

document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`;

}
attack = function(opponent, item){
    let newEnergy = opponent.energy - item.iHitPoints;
     opponent.energy=newEnergy;
     opponent.display();
    document.getElementById('console').innerHTML=`${this.name} is attacking ${opponent.name} with ${item.iName} 
    ${item.img}`;

     if(opponent.energy<=0){
        document.getElementById(opponent.id).innerHTML="You are out";
        document.getElementById(this.id).innerHTML=`Combatant ${this.name} Wins!`;
        
     } 
    
     
     
 }

}
class Item{
    constructor(iName,iHitPoints,img){
        this.iHitPoints=iHitPoints;
        this.iName=iName;
        this.img=img;
    }
}


const item1 = new Item('Hypersonic',20,'<img class="item" src="img/item1.jpeg">');
const item2 = new Item('Fire Arrow',15,'<img class="item" src="img/item2.jpg">');
const item3 = new Item('CH',10,'<img class="item" src="img/item3.jpg">');
const item4 = new Item('fireballs',10,'<img class="item" src="img/item4.jpeg">');
const item5 = new Item('Bus',10,'<img class="item" src="img/item5.jpeg">');
const item6 = new Item('subzero',10,'<img class="item" src="img/item6.jpeg">');
const item7 = new Item('knife',10,'<img class="item" src="img/weapon1.jpg">');


const items=[item1,item2,item3,item4,item5,item6,item7];


//general function
const reset = function(){
    c1.energy=100;
    c2.energy=100;
    c1.display();
    c2.display();

}

function selectItem(){
    let selection = Math.floor(Math.random() * 7);
    return items[selection];
}



let c1 = new Character("Raiden",100,"c1");
let c2 = new Character("Scorpion",100,"c2");

c1.display();
c2.display();




















