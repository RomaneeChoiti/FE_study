01_sumTo
/*
sumTo
문제
수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 0)
출력
number 타입을 리턴해야 합니다.
1 + 2 + ... + num
주의 사항
함수 sumTo는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
n * (n + 1) / 2 와 같은 공식의 사용은 금지됩니다.
음수 입력은 들어오지 않습니다.
입출력 예시
1
2
let output = sumTo(10);
console.log(output); // --> 55
힌트
sumTo(n)은 자연수 1부터 n까지의 합을 계산하는 함수입니다.
sumTo(1) = 1
sumTo(2) = 1 + 2 = 3
sumTo(3) = 1 + 2 + 3 = 6
sumTo(4) = 1 + 2 + 3 + 4 = 10
*/
function sumTo(num) {
  //base case
  if (num <= 1) return num;
  //recursive case
  return num + sumTo(num - 1);
}
/*
  //풀이 과정
  //base case -> 문제가 더이상 쪼개지지 않는 순간
  sumTo(1) => 1 <- base case
  sumTo(0) => 0 <- base case
  if(num === 1)return 1
  if(num === 1)return 0
  => 
  if(num <= 1)return num <- base case
  //recursive case -> 문제를 쪼게나가는 방법
  sumTo(5) => 5 + 4 + 3 + 2 + 1
  sumTo(4) => 4 + 3 + 2 + 1
  sumTo(3) => 3 + 2 + 1
  sumTo(2) => 2 + 1
  sumTo(1) => 1
  
  sumTo(5) => 5 + sumTo(4)
  sumTo(4) => 4 + sumTo(3)
  sumTo(3) => 3 + sumTo(2)
  sumTo(2) => 2 + sumTo(1)
  sumTo(1) => 1 <- base case
  sumTo(0) => 0 <- base case
  
  sumTo(num) -> num + sumTo(num-1) <- recursive case
*/

// 04_fibonacci
/*문제
수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

입력
인자 1 : num
number 타입의 num (num은 0 이상 15 이하의 정수)
출력
number 타입을 리턴해야 합니다. (num 번째 피보나치 수)
주의 사항
함수 fibonacci는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
피보나치 수열은 0번부터 시작합니다.*/
//입출력 예시
// let output = fibonacci(5);
// console.log(output); // --> 5

// output = fibonacci(9);
// console.log(output); // --> 34

문재풀이;

09_take
/*
문제
수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 0)
인자 2 : arr
임의의 요소를 갖는 배열
출력
순차적으로 num 개의 요소로 구성된 배열을 리턴해야 합니다.
주의 사항
함수 take는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
입출력 예시
*/
// let output = take(2, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2]

// output = take(5, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2, 1, 3]

문제풀이;
function fibonacci(num) {
  //base case
  if (num <= 1) return num;
  //recursive case
  return fibonacci(num - 1) + fibonacci(num - 2);
}
/*
  //recursive case
  fibonacci(num-1) + fibonacci(num-2)
  fibonacci 앞 뒤 숫자 더하는거
    //base case
    if(num <= 1) return num
    */
   13_findMatryoshka
/*
    findMatryoshka
    문제
    러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.
    
    입력
    인자 1 : matryoshka
    'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
    matryoshka.matryoshka는 null 또는 matryoshka 객체
    matryoshka.size는 중첩될수록 작아집니다.
    인자 2 : size
    number 타입의 수
    출력
    boolean 타입을 리턴해야 합니다.
    주의 사항
    함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
    반복문(for, while) 사용은 금지됩니다.
    입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
    빈 객체를 입력받은 경우, false를 리턴해야 합니다.
    입출력 예시
    const matryoshka = {
    size: 10,
    matryoshka: {
        size: 9,
        matryoshka: null,
    },
    };

    let output = findMatryoshka(matryoshka, 10);
    console.log(output); // --> true

    output = findMatryoshka(matryoshka, 8);
    console.log(output); // --> false
    */
   문제풀이
   function findMatryoshka(matryoshka, size) {
    // base case
    if(matryoshka.size === size)return true
    // recursive case
    if(matryoshka.matryoshka)return findMatryoshka(matryoshka.matryoshka, size)
    return false
  }
//   // recursive case
//   마트료시카가 안에 마트료시카가 또 있을때 마트료시카를 열어보는것
//   마트료시카 안에 마트료시카가 있는지 볼려면 findMatryoshka를 사용
  
//   // base case
//   내가 찾는 사이즈의 마트료시카가 있을때 true
//   없을때  false
14_unpackGiftbox
/*
unpackGiftbox
문제
선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

입력
인자 1 : giftBox
문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열 (입출력 예시 참고)
문자열은 선물 상자에 들어있는 각 선물의 이름을 의미합니다.
배열은 더 작은 선물 상자를 의미합니다.
인자 2 : wish
string 타입의 문자열
출력
boolean 타입을 리턴해야 합니다.
주의 사항
함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.
입출력 예시
const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true
*/
function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    for(let gift of giftBox){
      // base case
      if(gift===wish)return true
      // recursive case(또 다른 배열이 나올때)
      if(Array.isArray(gift)){
        //리턴을 하지 않음 
        //그 이유는 배열 안에 배열인데 리턴을 하면 [1,2[3,4]5] 5까지 안가고 [3,4]의 결과만 나온다
        //해서 if문을 또 작성한다
        if(unpackGiftbox(gift, wish) === true)return true
      }
    }return false
  }
//   // recursive case
//   더 작은 선물 상자가 나왔을때 (또 다른 배열이 나올때)
//   // base case
//   내가 찾는 선물이 있을때 -> true
//   내가 찾는 선물이 없을때 -> false
15_flattenArr
/*
flattenArr
문제
다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

입력
인자 1 : arr
양의 정수 또는 배열을 요소로 갖는 다차원 배열 (입출력 예시 참고)
출력
배열을 리턴해야 합니다.
주의 사항
함수 flattenArr는 재귀함수의 형태로 작성합니다.
Array Method flat()과 flatMap() 사용은 금지됩니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
입출력 예시
let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]
*/
function flattenArr(arr) {
    //recursive case -> 배열을 풀어주는 방법
    for(let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        let front = arr.slice(0,i)
        let middle = arr[i]
        let back = arr.slice(i+1)
        return flattenArr([...front, ...middle, ...back])
      }
    }
    // base case 더 이상 배열을 풀어줄 애가 없을때
    return arr
  }
//   // recursive case -> 배열을 풀어주는 방법
//   ([0, [1], 2, [3, 4], 5])
//   앞에 있는 애들 -> [0]
//   풀어줘야하는 애들 -> [1]
//   뒤에 있는 애들 -> [2, [3, 4], 5]
//   [...앞에 있는 애들, ...풀어줘야하는 애들, ...뒤에 있는 애들]
//   =>[0, 1, 2, [3, 4], 5]
//   앞에 있는 애들 -> [0, 1, 2]
//   풀어줘야하는 애들 -> [3, 4]
//   뒤에 있는 애들 -> [5]
//   [...앞에 있는 애들, ...풀어줘야하는 애들, ...뒤에 있는 애들]
//   =>[0, 1, 2, 3, 4, 5]
//   // base case 더 이상 배열을 풀어줄 애가 없을때
//   return [0, 1, 2, 3, 4, 5]
  
  
  
