let $=(q)=>document.querySelector(q)
let btn=$("button")
let p=$('p')
let input=$('input')
if (!input.value){input.value='/.netlify/functions/test'}
let url=input.value
btn.addEventListener('click', async () => {
    let res = await fetch(url);
    let object = await res.text();
    p.textContent= object
    console.log(object)
})