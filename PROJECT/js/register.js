const salon={
    name:"The Fashon Pet",
    address:{
        street:"Av.university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[{
        petName:"scooby",
        petAge:50,
        petGender:"Male",
        petBreed:"dane",
        service:"Full Service",
        ownerName:"Shaggy",
        contactPhone:"555-555-555"
    }
    ] 
    [{
        petName:"Scrapy",
        petAge:50,
        petGender:"Male",
        petBreed:"dane",
        service:"Full Service",
        ownerName:"Shaggy",
        contactPhone:"555-555-555"
    }
  ]
  [{
    petName:"Speedy",
    petAge:50,
    petGender:"Male",
    petBreed:"dane",
    service:"Full Service",
    ownerName:"Shaggy",
    contactPhone:"555-555-555"
}
]  [{
    petName:"Kuasimodo",
    petAge:50,
    petGender:"Male",
    petBreed:"dane",
    service:"Full Service",
    ownerName:"Shaggy",
    contactPhone:"555-555-555"
}
]
}

var {name,address:{street,number}}=salon;// object destructuring
document.getElementById(' footer-info').innerHTML=`
     <p> ${name}${street}${number}</p>`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}

// CREATE THE OBJET CONSTRUCTOR 
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.breed=breed;
     this.service=service;
     this.ownerName=ownerName;
     this.contactPhone=contactPhone;
    }
}

//create pets name
var pet1= new Pet("scooby",50,"male","Male","Dane","Grooming", "Shaggy","5555555");
var pet2= new Pet("scrappy ",50,"male","mixed","Dane","Full service", "Shaggy","5555555");
var pet3= new Pet("Speedy  ",70,"male","mixed","Dane","Full service", "Shaggy","8888-888-888");
salon.pets.push(pet1);
salon.pet.push(pet2);
// CREATE THE REGISTER FUNCTION
var inputName=document.getElementById('petName');
var inputAge=document.getElementById('petAge');
var inputGender=document.getElementById('petGender');
var inputBreed=document.getElementById('petService');
var imputService=document.getElementById('ownerName');
var imputOwner=document.getElementById('ownerName');
var inputPhone=document.getElementById('ownerPhone');


      //read from the inputs and store the information into vars 
    function register(){
        console.log(inputName.nodeValue,inputAge.value,inputGender.value,inputBreed.value,input.service.value,inputOwner.value,inputphone.value )
      //create a generic objet and pass the info of the vars 

      // push the objet into the array

      // clear the inputs 
}
function clear(){

}

