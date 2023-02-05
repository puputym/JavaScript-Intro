const prompt = require('prompt-sync')();
function pangkatDua(input){
    if(input%2==1){
        console.log("Tidak bisa input bilangan ganjil")
    }else if(input<0){
        console.log("Tidak bisa input bilangan negatif")

    }else{
       var pangkat = Math.sqrt(input)
       console.log("Hasil pangkat inputan =  " + pangkat);
    }
 }
 
 //pangkatDua(2)// maka akan  menghasilkan Pangkat 2
pangkatDua (prompt('Enter a number: '))