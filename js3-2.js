let counter = 2;
const preIncrement = ++counter; //하나를 증가한 다음에 값 할당
console.log(preIncrement)

const postIncrement = counter++; //변수에 할당한 다음 하나 증가
console.log(postIncrement)
console.log(counter)


//logical operators : ||(or) , &&(and) , !(not)

const val1 = false; //얘가 true로 바뀌면 true 부터 반환. 그래서 check()같은 함수는 뒤에 쓰는 것이 좋다.
const val2 = 4 < 2;

// or ==> 처음으로 true가 나오면 멈춤!!!

console.log(`or: ${val1 || val2 || check()}`); //셋 중 하나라도 참이면 true 반환 (f/f/t)

function check() {
    for (let i = 0; i <10; i++){
    console.log('으악');
    }
    return true;
}

//and

console.log(`or: ${val1 && val2 && check()}`); //heavy oper : 뒤에가 좋음

function check() {
    for (let i = 0; i <10; i++){
    console.log('으악');
    }
    return true;
}

//not
console.log(!val1);

//equality

const strfive = '5';
const numfive = 5;

// ==  :type conversion
console.log(strfive == numfive);
console.log(strfive != numfive);

// ===  : no type conversion : 다른 타입까지 고려 (얘로 검사하는 것이 좋다)
console.log(strfive === numfive);
console.log(strfive !== numfive);

//object equality

const jiyun1 = {namee : 'jiyun'};
const jiyun2 = {namee : 'jiyun'};
const jiyun3 = jiyun1;

console.log(jiyun1 == jiyun2);
console.log(jiyun1 === jiyun2);
console.log(jiyun1 === jiyun3);

//if문

const namee = 'df'
if (namee === 'jiyun') {
    console.log('welcome');
} else if (namee === 'coder'){
    console.log('amaizing');
} else {
    console.log('unknown');
}

//ternaty operator
console.log(namee === 'jiyun' ? 'yes':'no' );


//switch

const browser = 'IE'
switch (browser){
    case 'IE':
        console.log('go away')
    case 'Chrome':
    case 'FireFox':
        console.log('i love u');
        break;
    default:
        console.log('same all');
        break;
}

//Loops

let i = 3;
while (i>0){
    console.log(`while : ${i}`);
    i--;
}

// do while
// 먼저 블럭 실행한 다음 조건 맞는지 아닌지 검사
//블럭 먼저 실행하고 싶으면 do, 조건 맞을때만 실행하고 싶으면 while

do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);


// for loop

for (i=3; i>0; i--) {
    console.log(`for: ${i}`);
}

//블럭 안에 지역변수 let 선언
for (let i=3; i>0; i = i-2) {
    console.log(`inline var for : ${i}`);
}

//nested loop => 되도록이면 안쓰는 것이 좋다
