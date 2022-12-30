


//1

let fizzBuzz = (n) => {
    let output=[]
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            output.push("Fizz");
        }
        else if (i % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(i);
        }
    }
    return output;
}
fizzBuzz(15);



//2

let count = (ar) => {
    let obj = {};
    for (let i = 0; i < ar.length; i++) {
        if (obj.hasOwnProperty(ar[i])) {
            obj[ar[i]] =obj[ar[i]]+ 1;
        } else {
            obj[ar[i]] = 1;
        }
    }
    return obj;
}
count([1,2,"Sushil",1,2,"Sushil","Sushil"]);




//2

function show(array){
    let cnt={}
    for (const element of array){
        if(cnt[element]){
            cnt[element]=cnt[element]+1;
        }
        else{
            cnt[element]=1;
        }
    }


let output =[]
for(let key in cnt){
    const newObj ={
        input:key,
        count:cnt[key]
    }

    output.push(newObj)
    }
    return output
}

show([1,2,"Sushil",1,2,"Sushil","Sushil"]);