


//1

let fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);



//2

let count = (ar) => {
    let obj = {};
    for (let i = 0; i < ar.length; i++) {
        if (obj.hasOwnProperty(ar[i])) {
            obj[ar[i]] += 1;
        } else {
            obj[ar[i]] = 1;
        }
    }
    return obj;
}
count([1,2,"Sushil",1,2,"Sushil","Sushil"]);
