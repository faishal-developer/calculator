let btn = document.getElementsByTagName('button')
let input = document.getElementsByTagName('input')
let inputArr = [...input]
let btnArr = [...btn]

let inputValue=''
btnArr.forEach((v,i)=>{
  v.addEventListener('click',function(e){
    inputValue += e.target.value;
    if(v.value === 'clr') inputValue='' 
    if(v.value === '=') inputValue = calculate(inputValue) 
    input[0].value=inputValue;
  })
})

input[0].addEventListener('keyup',function(e){
   if(e.key === 'Enter' || e.key==='='){
    inputValue = calculate(e.target.value)
    input[0].value = inputValue
   } 
})



function calculate(str) {
    let strToNumber=str.match(/\d+(\.)?(\d+)?/g)
    if(/\//.test(str)) return Number(strToNumber[0]) / Number(strToNumber[1])
    if(/\*/.test(str)) return Number(strToNumber[0]) * Number(strToNumber[1])
    if(/\-/.test(str)) return Number(strToNumber[0]) - Number(strToNumber[1])
    if(/\+/.test(str)) return Number(strToNumber[0]) + Number(strToNumber[1])
}
