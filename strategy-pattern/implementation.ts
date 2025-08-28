// The Strategy Pattern is a behavioral design pattern that defines a family of algorithms,
// encapsulates each one, and makes them interchangeable.

interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card: ${this.cardNumber}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;
  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal: ${this.email}`);
  }
}

class CryptoPayment implements PaymentStrategy {
  private walletAddress: string;
  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using Crypto: ${this.walletAddress}`);
  }
}

// context class
class ShoppingCart {
  private paymentStrategy!: PaymentStrategy;

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

const cart = new ShoppingCart();

// Use Credit Card
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout(100);

// Switch to PayPal
cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
cart.checkout(200);

// Switch to Crypto
cart.setPaymentStrategy(new CryptoPayment("0xABC123DEF456"));
cart.checkout(300);
