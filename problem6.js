const genratedRandomNumber = Math.floor(Math.random() * 10);
const guessnumber = prompt("Guess the Number: ");
if(guessnumber==genratedRandomNumber){
    alert(`yes.`);
}
else{
    alert(`No`);
}