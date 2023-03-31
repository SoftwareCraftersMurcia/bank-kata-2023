<?php

declare(strict_types=1);

namespace Kata;

final class Withdraw extends Operation
{
    public function type(): string
    {
        return 'withdraw';
    }
}
