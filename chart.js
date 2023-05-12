
function renderChart(){
const cartItems = document.getElementById("cart-items");

cartItems.innerHTML = "";
chart.forEach((course) => {
  console.log(`Course ${course.id}: ${course.title} - ${course.price}`);
  cartItems.innerHTML += `
  <tr>
  <td><img src="${course.image}" alt="Image A"></td>
  <td> ${course.title} </td>
  <td>$ ${course.current_price}</td>
  <button class="remove-btn"  onclick="removeItemFromChartById(chart, ${course.id})">Remove Item</button>
</tr>
  `
});

updateTotal(getCurrentPriceTotal(chart));
}

renderChart();


//remove buy it
function removeItemFromChartById(chart, id) {
 console.log("clicked start");
  const index = chart.findIndex(item => item.id === id);
  if (index !== -1) {
    chart.splice(index, 1);
  }
  saveChartToLocalStorage(chart) 
    console.log("clicked end");
  renderChart();
  setCartValue(chart.length)

}


function getCurrentPriceTotal(chart) {
  let total = 0;
  for (let i = 0; i < chart.length; i++) {
    total += chart[i].current_price;
  }
  return total.toFixed(2);
}



function updateTotal(newTotal) {
  const totalElement = document.getElementById("total");
  if (totalElement) {
    totalElement.innerHTML = newTotal;
    localStorage.setItem('amount', newTotal);
  } else {
    console.error("Element with id 'total' not found.");
  }
}
