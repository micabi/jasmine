function add(a,b){
  return a + b;
}

function sayHello(){
  return "Hello";
}

function fuzzBuzz(number){
  if(number%3 === 0 && number%5 === 0){
    return "FuzzBuzz";
  }
  if(number%3 === 0){
    return "Fuzz";
  }
  if(number%5 === 0){
    return "Buzz";
  }
  if(!number%3 === 0 && !number%5 === 0){
    return number;
  }
}
