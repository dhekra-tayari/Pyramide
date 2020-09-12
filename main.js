var nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(nombre);
if(nombre>25)
console.log("veuillez entrer un nombre inférieur à 25");
else 
{
    console.log("voila la pyramide:");


for(var i=0;i<nombre;i++) {
    var output="";
        for(var j=0;j<nombre-i;j++) {
            output+=" ";
        }
        for(var k=0;k<=i;k++) {    
           output += "* ";
        }
        console.log(output);  
    }  
}
