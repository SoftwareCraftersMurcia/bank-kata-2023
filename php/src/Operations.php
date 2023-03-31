<?php

declare(strict_types=1);

namespace Kata;

class Operations
{
    private array $operations = [];

    public function add(array $array): void
    {
        $this->operations[] = $array;
    }

    public function getOperations(): array
    {
        return $this->operations;
    }
}
