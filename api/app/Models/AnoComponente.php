<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnoComponente extends Model
{
    use HasFactory;

    protected $fillable = ['id_ano', 'id_componete'];

    public function ano_componente()
    {
        return $this->hasManyThrough(AnoFaixa::class, Componente::class);
    }
}
