const contenitoreCubi = document.getElementById("contenitore")



for (let i=1; i<=100; i++){

    if (i % 3 == 0 && i % 5 !== 0){

        console.log("Fizz")

        contenitoreCubi.innerHTML += `<div class="col-1"><div class="quadrato"><span> Fizz </span></div></div>`

    } else if (i % 5 == 0 && i % 3 !== 0){

        console.log("Buzz")

        contenitoreCubi.innerHTML += `<div class="col-1"><div class="quadrato"><span> Buzz </span></div></div>`
    
    } else if (i % 3 == 0 && i % 5 == 0){

        console.log("FizzBuzz")

        contenitoreCubi.innerHTML += `<div class="col-1"><div class="quadrato"><span> FizzBuzz </span></div></div>`
    
    } else{

        console.log(i)

        contenitoreCubi.innerHTML += `<div class="col-1"><div class="quadrato"><span>${i}</span></div></div>`
    }
}