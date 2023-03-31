<?php

declare(strict_types=1);

namespace KataTests;

use Kata\Account;
use Kata\Operations;
use PHPUnit\Framework\TestCase;

class OperationTest extends TestCase
{
    public function test_add_operations(): void
    {
        $operations = new Operations();
        $operations->add(['deposit', 500]);
        $operations->add(['withdraw', 600]);

        $expected = [
            ['deposit', 500],
            ['withdraw', 600],
        ];

        $this->assertEquals($expected, $operations->getOperations());
    }
}
