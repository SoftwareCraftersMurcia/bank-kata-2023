<?php

declare(strict_types=1);

namespace Kata;

class Operations
{
    private array $operations = [];

    public function add(Operation $operation): void
    {
        $this->operations[] = $operation;
    }

    public function getOperations(): array
    {
        return $this->operations;
    }
}
