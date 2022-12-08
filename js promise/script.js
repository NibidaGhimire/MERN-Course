let EA=[]

function EvenArray(num){
    
    return new Promise((resolve,reject)=>{
        // if(num!==Number){
        //     reject("Illegal input")
        // }
        if(typeof num=="number"){
            for(let i=0;i<=num;i++ ){
    
                if(i%2===0 && i!==0 ){
                    resolve(EA.push(i))
                }
            }   
        }
        reject("Illegal Exception")
    })
}

EvenArray(10).then(console.log(EA)).catch(err=>console.log(err))
 
    