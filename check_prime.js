function check_prime(num){
    if (num <=1){
        return false;
    }
    else {
        for(let i = 2 ; i<num; i++){
            if(num%i === 0){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
let result = check_prime(5)
if(result){
    console.log("number is prime")
}
else{
    console.log("number is not prime")
}