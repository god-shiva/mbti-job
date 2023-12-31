import { questions /*해당 배열데이터만 가져온다*/ } from './data.js' // 해당 js 파일 가져오다.

// 질문 화면의 각 요소를 찾아요!
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0 // 현재 질문 번호
let mbti = '' // MBTI 결과

// 화면에 질문을 랜더링하는 함수에요!
function renderQuestion() { //render 출력 Question 질문
  // const question = questions[0] //객체데이터에 n번째임.
  const question = questions[currentNumber]
  questionEl.innerHTML = question.question
  numberEl.innerHTML = question.number 
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}
// 다음 질문으로 넘어가는 함수에요!
function nextQuestion(choiceNumber) {
  // 더 이상 질문이 없으면, 결과 페이지를 보여줘요!
  if (currentNumber === questions.length - 1) { //9번째일때 마지막페이지로 이동한다.
    showResultPage()
    return
  }
  const question = questions[currentNumber] //현재 질문
  mbti = mbti + question.choices[choiceNumber].value //음 mbti에 초이스값 할당
  //mbti = 'i' + 'n' // 'in' 3번째 0번째 값을 가져오면 // 'inf'가 된다.

  currentNumber = currentNumber + 1
  renderQuestion()
}
// 결과 페이지로 이동!
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti //쿼리스트링방식으로 출력 ?mmm=123
}

// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드에요!
choice1El.addEventListener('click', function () {
  nextQuestion(0) //0은 choiceNumber로 이동
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

// 첫 번째 질문을 렌더링해요!
renderQuestion()
