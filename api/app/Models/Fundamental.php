<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fundamental extends Model
{
    use HasFactory;

    protected $fillable = [
        'plan_id', 'componente', 'ano_faixa', 'eixo', 'campos_atuacao', 'praticas_linguagem',
        'unidades_tematicas', 'objetivos_conhecimento', 'hablidades'
    ];

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

}
