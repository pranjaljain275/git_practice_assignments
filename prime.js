
function prime (num) {
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i=0){
            count++;
        }
    }if(count==2){
        return true;
    }
    return false;
}

let answer = prime (13);
if (answer = true) {
    console.log("The number is Prime");
   } else {
    console.log("The number isnot Prime");
   }