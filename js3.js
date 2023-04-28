'use scrict';

// variable : 변수.
// Es6 : 전세계적으로 js 개발자들이 이용하는 문법 가르쳐준다는 것. Es6 = js 인 것
// let 변수 정의 -> 하나의 메모리 어딘가에 저장. 추후 다른 값 넣기도
// cosnt와 달리 mutable. 데이터타입 변경 가능

let globalName = '전역변수는 박스 내외에서 모두 출력 가능';
{
    let namee = '박스 내에서 정의한 변수는 변수 밖에서 출력되지 않음'
    console.log(namee);
    console.log(globalName);
}
//console.log(namee); =>error
console.log(globalName);

// var 변수 정의 -> 이제 쓰지 않음

// const 변수 정의 -> 한 번 할당하면 값이 절대 바뀌지 않는다.
// 값 할당한 뒤로는 절대!! 다시는!! 값이 변경되지 않는다. 데이터타입도 변경 불가
//immutable
//바뀌지 않기 때문에 보안에 장점
//변경되어야 할 이유 없다면 웬만해서는 const 쓰는 것이 좋음.

const daysInWeek = 7;

//variable types
//자바스크립트에서는 function도 데이터타입의 하나
//퍼스트클래스펑션 : 함수도 다른 데이터처럼 변수 할당 가능, 함수 인자, 리턴 등 다 됨

const count = 17;
const size = 17.1;
console.log(count, size);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // + 해야 하는 번거로움 줄임

//boolean
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; //아무 값도 지정 x 텅텅 비었는지도 정의 x
console.log(`value: ${x}, type:${typeof x}`);

//symbol 고유한 식별자 필요하거나 동시다발적으로 일어나는 상황에 고유한 값 지정해주고 싶을 떄
const symbol = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol === symbol2)

//동일한 스트링으로 작성되었어도 다른 심볼이다

//자바스크립트 : 다이나믹 --> 타입 선언하지 않고 파일 동작할 때 값에 따라 변수 타입 변경 가능
//다수 엔지니어들이 프로젝트 만들 때는 불리할수도

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text= '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);

//object
const jiyun = {name: 'jiyun', age:20};
jiyun.age = 21;
console.log(jiyun)

