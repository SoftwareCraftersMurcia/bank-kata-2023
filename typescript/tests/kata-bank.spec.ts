
class Account {
    printStatement() {
        console.log('DATE | AMOUNT | BALANCE')
    }
    withdraw(arg0: number) {
        throw new Error("Method not implemented.");
    }
    deposit(arg0: number) {
        throw new Error("Method not implemented.");
    }
  // Implement
}

describe.skip(`Given a client makes a deposit of 1000 on 20/01/2022
        And a deposit of 2000 on 23/01/2022
        And a withdrawal of 500 on 24/01/2022`, () => {
    it('When she prints her bank statement', () => {
        jest.spyOn(global.console, 'log')
        const account = new Account();
        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500);
        account.printStatement();
        // Then she would see at the terminal
        expect(console.log).toBeCalledWith();
    });
});

describe(`Account.printStatement()`, () => {
    it('should return account movements', () => {
        jest.spyOn(global.console, 'log').mockImplementation()
        const account = new Account();
        account.printStatement();
        // Then she would see at the terminal
        expect(console.log).toBeCalledWith('DATE | AMOUNT | BALANCE');
    });
});
