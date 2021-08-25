<?php

namespace App\Models;

use App\Models\Fundamental\CamposAtuacao;
use App\Models\Fundamental\PraticasLinguagem;
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

    public function get_componente()
    {
        return $this->hasMany(Componente::class, 'id', 'componente');
    }

    public function get_ano_faixa()
    {
        return $this->hasMany(AnoFaixa::class, 'id', 'ano_faixa');
    }

    public function get_habilidades()
    {
        return $this->hasMany(Habilidades::class, 'id', 'hablidades');
    }

    public function get_objetos()
    {
        return $this->hasMany(ObjetoConhecimento::class, 'id', 'objetivos_conhecimento');
    }

    public function get_campos()
    {
        return $this->hasMany(CamposAtuacao::class, 'id', 'campos_atuacao');
    }

    public function get_praticas()
    {
        return $this->hasMany(PraticasLinguagem::class, 'id', 'praticas_linguagem');
    }

}
