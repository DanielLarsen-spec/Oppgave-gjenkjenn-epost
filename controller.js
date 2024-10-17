//Denne legger inn inputet i variabelen email og kjører checkIfEmailAdress() funksjonen.
function saveUserInput(input){
    email = input;
    checkIfEmailAdress()
}


/*Denne sjekker om emailen er valid og legger til correct i displayet om det stemmer og
incorrect om det ikke gjør det.
*/
function checkIfEmailAdress(){
    if (email.includes('@') && email.includes('.') && email.indexOf('@') < email.indexOf('.') && !email.includes(' ')) {
        display = correct;
        
    } else{
        display = incorrect;
    }




    updateView()
    
}