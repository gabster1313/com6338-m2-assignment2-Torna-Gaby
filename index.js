// Your code here
function greet(){
    let person = prompt ("what is your name?");
    alert ('Hello,' + person );

    let age = prompt ('How old are you?');
        console.log(parseInt(age));

    let hadbirthday = confirm ('Have you had a birthday this year?');
    console.log(hadbirthday)

    let year = new Date().getFullYear();

    let birthyear;
    if (hadbirthday){
        console.log(birthyear = year - age);
    } else {
        console.log(birthyear = year - age - 1);
    }

    alert('You were born in' +  birthyear);
        
    }
