import {Account} from "../src/account";

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

        expect(console.log).toBeCalledWith();
    });
});

describe(`Account.printStatement()`, () => {
    it('should return account movements', () => {
        jest.spyOn(global.console, 'log').mockImplementation()
        const account = new Account();

        account.printStatement();

        expect(console.log).toBeCalledWith('DATE | AMOUNT | BALANCE');
    });
});
