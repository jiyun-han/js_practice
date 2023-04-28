'use strict';

function add(a,b){
    return a+b;
}

function print(){
    console.log('print');
} //아무런 인자도 갖지 않는 함수

//인자는 함수 호출하는 사람들로부터 필요한 데이터 받아오기 위해 의미있게 정의

const sum = add(3,4);
console.log(sum);

//함수도 오브젝트 중 하나.

const doSomething = add; //둘 다 똑같은 함수를 가르키고 있다.
const result = doSomething(2,3);
console.log(result);

function devide(num1, num2){
    return num1 / num2;
}

function surprise(operator){
    const result = operator(2,3);
    console.log(result);
}

surprise(add); // add(2,3)를 수행하는 것과 동일하다
surprise(devide);