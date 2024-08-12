// ., Call Variables
const form = document.querySelector('form');
const title = document.getElementById('title');
const description = document.getElementById('description');
const price = document.getElementById('price')
const cardDiv = document.getElementById('card-div');

let arr = [];

// ./. Form Button Function
form.addEventListener('submit',(event)=>{
    event.preventDefault();
console.log(title.value);
console.log(description.value);
console.log(price.value);
let obj ={
    title:title.value,
    description:description.value,
    price:price.value
}

arr.push(obj);
console.log(arr)
renderCards()

})

function renderCards(){
cardDiv.innerHTML = '';
arr.map((item)=>{
cardDiv.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
<div class="card-body">
  <h2 class="card-title">${item.title}</h2>
  <p>${item.description}</p>
  <h1>${item.price}</h1>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>`
})

}



// ./.  For loop , map array ke upper or aik array ke upper forEach