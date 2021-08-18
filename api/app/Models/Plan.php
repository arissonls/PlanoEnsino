<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = ['professor','turma','data_aula','tipo'];

    public function fundamental()
    {
        return $this->hasMany(Fundamental::class);
    }
}
