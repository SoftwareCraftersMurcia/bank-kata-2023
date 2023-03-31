<?php

declare(strict_types=1);

namespace KataTests;

use Kata\Deposit;
use PHPUnit\Framework\TestCase;

class DepositTest extends TestCase
{
    public function test_amount(): void
    {
        $deposit = new Deposit(500);

        self::assertEquals(500, $deposit->amount);
    }

    public function test_type(): void
    {
        $deposit = new Deposit(500);

        self::assertEquals('deposit', $deposit->type());
    }
}
