/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
//python -m http.server


function sleep_in(weekday,vacation) {
    if (weekday && vacation) {
        return true;
    }
    if (!weekday && !vacation) {
        return true;
    }
    if (weekday && !vacation) {
        return false;
    }
    if (!weekday && vacation) {
        return true;
    }
    }




function monkey_trouble(monkey1,monkey2) {
    if (monkey1 && monkey2) {
        return true;
    }
    if (!monkey1 && !monkey2) {
        return true;
    }
    if (monkey1 && !monkey2) {
        return false;
    }
    if (!monkey1 && monkey2) {
        return false; 
    }
}




    function string_times(str,num) {
    let alkfd = "";
    for (let i = 0; i < num; i++ ) {
        alkfd = alkfd+str;
    }
    return alkfd;
}
function front_times(str,num) {
    let text = ""
    let result = str.substring(0, 3);
    for (let i=0; i < num; i++ ) {
         text = text+result
    }
    return text

}
function string_bits(str) {
    let text = ""
     for (let i = 0; i<str.length; i+=2) {
    text+=str[i]
   }
   return text

}
function caughtSpeeding(speed,isBirthday) {
    if (speed <= 60) {
        return 0
    }
    if (speed >= 60 && speed <= 65 && !isBirthday) {
        return 1
    }
    if (speed >= 60 && speed <= 65 && isBirthday) {
        return 0
    }
    if (speed > 65 && speed <= 80) {
        return 1
    }
    if (speed > 65 && speed > 81 && !isBirthday) {
        return 2

}
if (speed >= 81 && speed <= 85 && isBirthday) {
        return 1
}
}
function fizz_buzz(num) {
    let str = num + "!"
    if (num % 3 == 0 & num % 5 != 0) {
        return "Fizz";
    } 
     if (num % 5 == 0 && num % 3 != 0) {
        return "Buzz"
    }  
    if (num % 3 == 0 && num % 5 == 0 ) {
        return "FizzBuzz"
    }
    if (num % 3 !=0 && num % 5 !=0) {
        return str
    }

}
function specialEleven(num) {
    if (num % 11 ==0 || num % 11 == 1) {
        return true
    }
    else {
        return false
    }
}
function withoutDoubles(die1,die2,noDoubles) {
    if (noDoubles && die1 == die2) {
        if (die1 == 6) {
            return 7
        }
        else {
            return die1 + die2 + 1
        }
    }
    else {
        return die1 + die2
    }
}   
function left2(str) {
    let result = str.substring(0, 2);
    let result2 = str.substring(2, str.length);
    return result2 + result
}