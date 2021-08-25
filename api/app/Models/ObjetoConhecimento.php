<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObjetoConhecimento extends Model
{
    use HasFactory;

    protected $table = 'objetos_conhecimento';

    public function habilidades($id_ano)
    {
        return $this->hasMany(Habilidades::class, 'id_objeto', 'id')
            ->where('id_ano', '=', $id_ano);
    }


}
