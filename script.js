//using regex and replace method 
//https://www.youtube.com/watch?v=7a-a6lKoyIQ&list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch&index=16&ab_channel=TheCodingTrain
//also see https://www.youtube.com/watch?v=AKuW48WeNMA&list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch&index=17&ab_channel=TheCodingTrain
//you can also put a callback function for the second paramater 


console.log('hello world')
const form = document.querySelector(".form")
const text = document.querySelector(".text")
const submit = document.querySelector(".submit")

submit.addEventListener("click", submitEvent, false);
function submitEvent() {
    // console.log("clicked")
    const textValue = text.value;    
    const lispText = textValue.replace(/[sz]/g, "th")
    const output = document.createTextNode(lispText)
    form.appendChild(output)
    const br = document.createElement('br')
    form.append(br)
    text.value = ""
}