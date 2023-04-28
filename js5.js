const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

const handleClick = function(event){
    console.log("저를 클릭하셨나요?");
}

btn2.addEventListener('click',handleClick); //함수를 메소드에 인자로 전달
//인자로 전달되는 함수 ==> 콜백함수
//이점 => event handler 여러개 등록 가능
btn2.addEventListener('click',function(){
    console.log("또 다른 핸들러가 추가 등록되었다!")
});

// 여러개의 핸들러를 다발적으로 등록할 수 있다.
// onclick : 속성 사용하면 여러개의 핸들러 등록 안되고 마지막만 덮어씌워진다


// btn2.removeEventListener('click',handleClick) //등록된 핸들러 제거할 수 있다

const handleClick2 = function(event){
    console.log(event);
} //이벤트 객체 모두 나옴


const handleClick3 = function(event){
    console.log(event.target);
}
btn1.addEventListener('click',handleClick3);
btn2.addEventListener('click',handleClick3);
btn3.addEventListener('click',handleClick3);
//target을 각각 확인할 수 있다. 이벤트가 발생한 순간의 타깃 표현하기 때문에 결과 다 다르게 나타난다
