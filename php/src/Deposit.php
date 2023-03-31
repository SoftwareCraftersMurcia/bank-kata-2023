<?php

declare(strict_types=1);

namespace Kata;

final class Deposit extends Operation
{
    public function type(): string
    {
        return 'deposit';
    }
}
