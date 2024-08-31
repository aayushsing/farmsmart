const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle payment requests
app.post('/api/checkout', (req, res) => {
    const { paymentMethod, amount, orderId } = req.body;

    // Handle different payment methods
    switch (paymentMethod) {
        case 'UPI':
            // Process UPI payment
            break;
        case 'Google Pay':
            // Process Google Pay payment
            break;
        case 'PhonePe':
            // Process PhonePe payment
            break;
        case 'Card':
            // Process Card payment
            break;
        case 'Net Banking':
            // Process Net Banking payment
            break;
        default:
            return res.status(400).send({ message: 'Invalid payment method' });
    }

    // Simulate payment processing
    // Integrate with actual payment gateway API here

    res.send({ success: true, message: 'Payment processed successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
document.getElementById('payment-form').onsubmit = function(event) {
    event.preventDefault();

    // Simulate payment processing
    const paymentSuccess = Math.random() > 0.5; // Randomly succeed or fail

    const statusMessage = document.getElementById('payment-status');
    if (paymentSuccess) {
        statusMessage.textContent = 'Payment successful! Thank you for your purchase.';
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = 'Payment unsuccessful. Please try again.';
        statusMessage.style.color = 'red';
    }

    closePaymentModal();
};
document.getElementById('open-payment-modal').onclick = function() {
    document.getElementById('payment-modal').style.display = 'block';
};

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('payment-modal')) {
        closePaymentModal();
    }
};
document.querySelectorAll('input[name="payment-method"]').forEach(function(element) {
    element.addEventListener('change', function() {
        // Hide all payment method inputs
        document.querySelectorAll('.payment-method-input').forEach(function(input) {
            input.style.display = 'none';
        });
             // Show inputs for selected payment method
             const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
             if (selectedMethod === 'upi') {
                 document.getElementById('upi-id').style.display = 'block';
             } else if (selectedMethod === 'google-pay') {
                 document.getElementById('google-pay-number').style.display = 'block';
             } else if (selectedMethod === 'phone-pay') {
                 document.getElementById('phone-pay-number').style.display = 'block';
             } else if (selectedMethod === 'card') {
                 document.getElementById('card-number').style.display = 'block';
                 document.getElementById('card-expiry').style.display = 'block';
                 document.getElementById('card-cvc').style.display = 'block';
             } else if (selectedMethod === 'net-banking') {
                 document.getElementById('bank-name').style.display = 'block';
                 document.getElementById('account-number').style.display = 'block';
                 document.getElementById('ifsc-code').style.display = 'block';
             }
         });
     });

     document.getElementById('payment-form').onsubmit = function(event) {
         event.preventDefault();

         // Simulate payment processing
         const paymentSuccess = Math.random() > 0.5; // Randomly succeed or fail

         const statusMessage = document.getElementById('payment-status');
         if (paymentSuccess) {
             statusMessage.textContent = 'Payment successful! Thank you for your purchase.';
             statusMessage.style.color = 'green';
         } else {
             statusMessage.textContent = 'Payment unsuccessful. Please try again.';
             statusMessage.style.color = 'red';
         }

         closePaymentModal();
     };

     // Trigger change event on page load to show initial state
     document.querySelector('input[name="payment-method"]:checked').dispatchEvent(new Event('change'));
     document.getElementById('open-payment-modal').onclick = function() {
        document.getElementById('payment-modal').style.display = 'block';
    };

    function closePaymentModal() {
        document.getElementById('payment-modal').style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById('payment-modal')) {
            closePaymentModal();
        }
    };

    // Show/hide payment fields based on selected payment method
    document.querySelectorAll('input[name="payment-method"]').forEach(function(element) {
        element.addEventListener('change', function() {
            // Hide all payment method inputs and remove required attributes
            document.querySelectorAll('.payment-method-input').forEach(function(input) {
                input.style.display = 'none';
                input.removeAttribute('required');
            });

            // Show inputs for selected payment method and set required attributes
            const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
            if (selectedMethod === 'upi') {
                const upiInput = document.getElementById('upi-id');
                upiInput.style.display = 'block';
                upiInput.setAttribute('required', 'true');
            } else if (selectedMethod === 'google-pay') {
                const googlePayInput = document.getElementById('google-pay-number');
                googlePayInput.style.display = 'block';
                googlePayInput.setAttribute('required', 'true');
            } else if (selectedMethod === 'phone-pay') {
                const phonePayInput = document.getElementById('phone-pay-number');
                phonePayInput.style.display = 'block';
                phonePayInput.setAttribute('required', 'true');
            } else if (selectedMethod === 'card') {
                document.getElementById('card-number').style.display = 'block';
                document.getElementById('card-expiry').style.display = 'block';
                document.getElementById('card-cvc').style.display = 'block';
                document.getElementById('card-number').setAttribute('required', 'true');
                document.getElementById('card-expiry').setAttribute('required', 'true');
                document.getElementById('card-cvc').setAttribute('required', 'true');
            } else if (selectedMethod === 'net-banking') {
                document.getElementById('bank-name').style.display = 'block';
                document.getElementById('account-number').style.display = 'block';
                document.getElementById('ifsc-code').style.display = 'block';
                document.getElementById('bank-name').setAttribute('required', 'true');
                document.getElementById('account-number').setAttribute('required', 'true');
                document.getElementById('ifsc-code').setAttribute('required', 'true');
            }
        });
    });

    document.getElementById('payment-form').onsubmit = function(event) {
        event.preventDefault();

        // Simulate payment processing
        const paymentSuccess = Math.random() > 0.5; // Randomly succeed or fail

        const statusMessage = document.getElementById('payment-status');
        if (paymentSuccess) {
            statusMessage.textContent = 'Payment successful! Thank you for your purchase.';
            statusMessage.style.color = 'green';
        } else {
            statusMessage.textContent = 'Payment unsuccessful. Please try again.';
            statusMessage.style.color = 'red';
        }

        closePaymentModal();
    };

    // Trigger change event on page load to show initial state
    document.querySelector('input[name="payment-method"]:checked').dispatchEvent(new Event('change'));