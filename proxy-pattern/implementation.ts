interface IBankAccount {
  withdraw(amount: number): void;
}

class BankAccount implements IBankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, Remaining balance: ${this.balance}`);
    }
  }
}

class BankAccountProxy implements IBankAccount {
  private realAccount: BankAccount;

  initialBalance: number;
  private isAuthenticated: boolean;
  constructor(initialBalance: number, isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
    this.realAccount = new BankAccount(initialBalance);
  }

  withdraw(amount: number) {
    if (!this.isAuthenticated) {
      console.log("Access denied! Please login first.");
      return;
    }
    // Delegate to real object
    this.realAccount.withdraw(amount);
  }
}

const account1 = new BankAccountProxy(1000, false);
account1.withdraw(200); // Access denied

const account2 = new BankAccountProxy(1000, true);
account2.withdraw(200); // Withdrawn: 200, Remaining balance: 800
account2.withdraw(900); // Insufficient balance!
