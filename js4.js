// 4주 //
// 비슷한 것들을 묶어두는 것 : 자료구조
// 동일한 타입의 데이터만 담을 수 있다? x 다이나믹 랭귀지라서 한 바구니 안에 다양한 종류의 데이터 담을 수 있다. 그러나 좋지 않음

// 인덱스 : 0부터 시작
// 한 배열 안에는 동일한 타입만 담는 것이 좋음

const arr1 = new Array();
const arr = [1,2];

const fruits = ['사과','바나나']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined

// looping
//print all fruits

for (let i = 0; i<fruits.length; i++ ){
    console.log(fruits[i]);
}

//for each
//정해진 액션 수행. 배열에 들어있는 각 객체에 수행. 우리가 전달한 함수를 밸류 하나하나마다 호출
//전달한 함수를 밸류마다 호출
fruits.forEach((fruits) => console.log(fruits));

//아이템을 밸류 제일 뒤에 넣거나 지우고 싶을 떄 : push, pop

fruits.push('딸기','복숭아')
fruits.pop();
fruits.pop();

// 앞에서부터
fruits.unshift('딸기','레몬');
console.log(fruits);

//shift : 앞에서부터 빠짐 => 뒤에서부터 작동해서 공간 만든 다음 작업되기 때문에 배열 길이 길수록 느려짐. 가능하면 팝과 푸시 사용

fruits.shift();
fruits.shift();
console.log(fruits);

//splice

fruits.push('사과','복숭아','레몬')
fruits.splice(1,1); //1만 쓰면 그 뒤에 다 지워짐
console.log(fruits);
fruits.splice(1,1,'사과','수박'); //딸기부터 하나만 지우고 나서 사과랑 수박 넣겠다
console.log(fruits);

const fruits2 = ['배','포도']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//Searching
