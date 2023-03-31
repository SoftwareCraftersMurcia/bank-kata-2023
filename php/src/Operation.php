<?php

declare(strict_types=1);

namespace Kata;

abstract class Operation
{
    public function __construct(
        public int $amount
    ) {
    }

    abstract function type(): string;
}
