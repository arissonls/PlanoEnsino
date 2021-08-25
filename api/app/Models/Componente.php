<?php

namespace App\Models;

use App\Models\Fundamental\CamposAtuacao;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Componente extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function ano_faixa()
    {
        return $this->belongsToMany(AnoFaixa::class, 'ano_componentes','id_componente','id_ano');
    }

    public function plano_fundamental()
    {
        return $this->belongsTo(Fundamental::class, 'componente', 'id');
    }


}
