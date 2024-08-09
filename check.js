document.addEventListener('DOMContentLoaded', function() {
    const summaryTableBody = document.querySelector('#summaryTable tbody');
    const summaryTotalPrice = document.getElementById('summaryTotalPrice');

    const order = JSON.parse(localStorage.getItem('order')) || [];
    let totalPrice = 0;

    order.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.item}</td><td>${item.category}</td><td>${item.amount}</td><td>$${item.price.toFixed(2)}</td>`;
        summaryTableBody.appendChild(row);
        totalPrice += item.price;
    });

    summaryTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

    document.getElementById('payButton').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;
        const card = document.getElementById('card').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;


        let errorMessage = '';
        
        if (!name) {
            errorMessage += 'Name is required.\n';
        }
        if (!email) {
            errorMessage += 'Email is required.\n';
        }
        if (!address) {
            errorMessage += 'Address is required.\n';
        }
        if (!city) {
            errorMessage += 'City is required.\n';
        }
        if (!zip) {
            errorMessage += 'ZIP code is required.\n';
        }
        if (!card) {
            errorMessage += 'Card number is required.\n';
        }
        if (!expiry) {
            errorMessage += 'Expiry date is required.\n';
        }
        if (!cvv) {
            errorMessage += 'CVV is required.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            const deliveryDate = new Date();
            deliveryDate.setDate(deliveryDate.getDate()); // Assume a 7-day delivery period
            alert(`Thank you for your purchase at A-MART! Your order will be delivered on ${deliveryDate.toDateString()}.`);
        }
    });
});