
let all = prompt (' введите сколько раз сработает цикл')
let sum = 0;
let even = 0;
for (let i = 0;  i <=all; i++){
   sum += i
   if(i % 2 === 0){
    even+=i;
   }
}
console.log('сумма чётных чисел : ' + even);
