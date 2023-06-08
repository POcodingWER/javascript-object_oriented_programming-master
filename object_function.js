var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
//call 값을 저장 bind 함수로 값을저장
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("sum.call(lee)", sum.call(lee, ': '));  
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum);