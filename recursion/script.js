
//This is a function for the fibonacci sequence through iteration
function fibs(n){
    //Variable and DS
    let values = [0,1];
    let count = 0;
    //Check for unordinary cases
    if (n == 0 || n == 1) {
        return values.slice(0,n+1);
    } 
    else if (n < 0){
        return "Error out of range";
    }
    //This will fill beyond the 2 original values
    else{
        count = 2;
        while (count < n){

            values.push((values[count-2] + values[count-1]));
            count ++;
        }
        return values;
    }
    
}

//This is a function for the fibonacci sequence recursively
function fibsRec(n){
    if (n == 0){
        return 0;
    } else{
        console.log("This was printed recursively");
        return (n + fibsRec(n-1));
    }
    
}