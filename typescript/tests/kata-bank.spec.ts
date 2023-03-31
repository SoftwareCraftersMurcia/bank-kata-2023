import { Account } from "../src/account";

describe.skip(`Given a client makes a deposit of 1000 on 20/01/2022
        And a deposit of 2000 on 23/01/2022
        And a withdrawal of 500 on 24/01/2022`, () => {
  it("When she prints her bank statement", () => {
    jest.spyOn(global.console, "log");
    const account = new Account();

    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    account.printStatement();

    const expected = `DATE | AMOUNT | BALANCE
24/01/2012 | 500.00 | 2500.00
23/01/2012 | 2000.00 | 3000.00
20/01/2012 | 1000.00 | 1000.00`;
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});

describe(`Deposits and printStatement`, () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(global.console, "log").mockImplementation();
  });

  it("should return account movements", () => {
    const account = new Account();

    account.printStatement();

    expect(console.log).toHaveBeenCalledWith("DATE | AMOUNT | BALANCE");
  });

  it("should print the first deposit", () => {
    const account = new Account();

    account.deposit(1000);
    account.printStatement();

    const expectedLines = [
      "DATE | AMOUNT | BALANCE",
      "20/01/2012 | 1000.00 | 1000.00",
    ];
    expect(console.log).toHaveBeenCalledWith(expectedLines.join("\n"));
  });
});
