<?php

namespace App\Models;

use App\Models\Fundamental\CamposAtuacao;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnoFaixa extends Model
{
    use HasFactory;
    protected $table = 'ano_faixa';
    protected $fillable = ['name'];

    public function campo_atuacao()
    {
        return $this->belongsToMany(CamposAtuacao::class, 'ano_campos_atuacao', 'id_ano', 'id_campos_atuacao');
    }
}
