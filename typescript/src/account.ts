export class Account {
  movements: number[] = [];

  printStatement() {
    const lines = ["DATE | AMOUNT | BALANCE"];
    this.movements.forEach((movement) => {
      lines.push(
        `20/01/2012 | ${movement.toFixed(2)} | ${movement.toFixed(2)}`
      );
    });
    console.log(lines.join("\n"));
  }

  withdraw(arg0: number) {
    throw new Error("Method not implemented.");
  }

  deposit(amount: number) {
    this.movements.push(amount);
  }
}
