<?php

declare(strict_types=1);

namespace KataTests;

use Kata\Account;
use Kata\Deposit;
use Kata\Operations;
use Kata\Withdraw;
use PHPUnit\Framework\TestCase;

class OperationTest extends TestCase
{
    public function test_add_operations(): void
    {
        $operations = new Operations();
        $operations->add(new Deposit(500));
        $operations->add(new Withdraw(600));

        $expected = [
            new Deposit(500),
            new Withdraw(600),
        ];

        $this->assertEquals($expected, $operations->getOperations());
    }
}
