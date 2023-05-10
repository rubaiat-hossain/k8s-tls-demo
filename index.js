const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the payment page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/payment.html');
});

// Handle payment submission
app.post('/pay', (req, res) => {
  const { cardNumber, cardExpiry, cvv } = req.body;

  if (!cardNumber || !cardExpiry || !cvv) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Mock payment processing logic
  const paymentSuccess = Math.random() > 0.1;

  if (paymentSuccess) {
    res.status(200).json({ message: 'Payment processed successfully', status: 'success' });
  } else {
    res.status(400).json({ message: 'Payment failed', status: 'failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
