<?php
declare(strict_types=1);

namespace KataTests;

use PHPUnit\Framework\TestCase;

class BankTest extends TestCase
{
    public function test_bank(): void
    {
        $account = new Account();
        $account->deposit(1000);
        $account->deposit(2000);
        $account->withdraw(500);

        $account->printStatement();

        $expected = <<<TXT
DATE | AMOUNT | BALANCE
24/01/2012 | 500.00 | 2500.00
23/01/2012 | 2000.00 | 3000.00
20/01/2012 | 1000.00 | 1000.00
TXT;
        $this->expectOutputString($expected);
    }
}
