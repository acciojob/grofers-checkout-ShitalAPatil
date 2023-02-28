// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);

const calculateTotalBtn = document.getElementById('calculate-total-btn');
		calculateTotalBtn.addEventListener('click', calculateTotal);

		function calculateTotal() {
			const prices = document.querySelectorAll('.price');
			let totalPrice = 0;
			prices.forEach(price => {
				totalPrice += parseFloat(price.textContent);
			});
			const totalPriceCell = document.getElementById('ans');
			totalPriceCell.textContent = totalPrice.toFixed(2);
		}