

//const 는 할당이 안되는 변수를 만든다.
//let은 할당이 되는 변수를 만든다.
//객체 데이터
const objectData = {
  key : 'value',
  name : 'sss'
}
console.log(objectData.key) // value
console.log(objectData['key'])


//배열 데이터
const arrayData = [9,7,6]
console.log(arrayData[1])

//함수 종료
function hello(name) {
  const message = 'hello' + name + '!'
  console.log(message)
  return console.log('이 부분은 실행되지 않아요!')
}
hello('hh') //hello hh 로 console 메세지 생성됨!
hello('mm') //hello mm!


//////
const itemEls = document.querySelectorAll('.item') //querySelectorAll 전체 요소 찾기
const btnEl = document.querySelector('.btn') //한개의 요소 찾기
const colors = ['royalblue', 'orange', 'tomato']

btnEl.addEventListener('click', function(){ //each 가각이다.
  itemEls.forEach(function(itemEl , index /*매개변수 지정*/){ //각각의 아이템에 접근하여 함수를 실행하여라. 총 3개
      console.log(index, itemEl); //div.item 1 / div.item 2 호출
      itemEl.style.backgroundColor = 'royalblue' //div 전체 색상 변경
      itemEl.style.backgroundColor = colors[2]//div 전체 색상 변경 토마토 색상 변경됨
      itemEl.style.backgroundColor = colors[index]//div 각각의 색상 변경됨.
  })

  btnEl.innerHTML = '클릭했어요' //btn 버튼내 텍스트 변경..   
  btnEl.innerHTML = '<span>생김</span>' //btn 버튼내 텍스트 변경..

}) //익명함수당.


function 함수이름(변수) {
  if(조건) {
    return
    //명령들
  }
}
함수이름(데이터)

el.style.backgroundcolor = 'red'
//el.style.CSS 속성 = '값'
//HTML 요소에 CSS 지정(CSS속성은 낙타 표기법으로 작성)
//el.addEventListener('click', 함수)


//github.com/ParkYoungWoong/mbti-job-hiding-inside-me
//https://prismatic-monstera-4c9d6a.netlify.app/