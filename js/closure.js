


const bank = owner => {
    balance = 0;
    return {
        deposite: amount => {
            balance += amount;
            return balance;
            
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
            
        }
    }
}
const MofizBnak = bank('mofiz');
console.log(MofizBnak.deposite(100));
console.log(MofizBnak.deposite(100));
console.log(MofizBnak.deposite(200));
console.log(MofizBnak.deposite(300));
console.log(MofizBnak.withdraw(300));
console.log(MofizBnak.withdraw(100));

