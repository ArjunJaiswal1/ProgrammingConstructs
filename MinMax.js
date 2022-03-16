var rand = [...Array(5)].map(()=>Math.floor(Math.random()*1000));
console.log(rand);
var min = Math.min(...rand), max =  Math.max(...rand);
console.log("Min value = " + min);
console.log("Max value = " + max);
