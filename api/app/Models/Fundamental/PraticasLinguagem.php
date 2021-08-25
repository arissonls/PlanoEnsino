<?php

namespace App\Models\Fundamental;

use App\Models\ObjetoConhecimento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PraticasLinguagem extends Model
{
    use HasFactory;
    protected $table = 'praticas_linguagem';
    protected $fillable = ['id_ano', 'id_campos_atuacao', 'id_praticas_linguagem'];

    public function objetos_conhecimento($id_ano)
    {
        return $this->belongsToMany(
            ObjetoConhecimento::class,
            'pivot_ano_praticas_objetos',
            'id_praticas_linguagem',
            'id_objetos'
        )->wherePivot('id_ano', '=', $id_ano);
    }
}
