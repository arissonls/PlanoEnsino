<?php

namespace App\Models\Fundamental;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CamposAtuacao extends Model
{
    use HasFactory;
    protected $table = 'campos_atuacao';
    protected $fillable = ['name'];

    public function praticas_linguagem($id_ano)
    {
        return $this->belongsToMany(
            PraticasLinguagem::class,
            'ano_praticas_campos',
            'id_campos_atuacao',
            'id_praticas_linguagem'
        )->wherePivot('id_ano', '=', $id_ano);
    }
}
