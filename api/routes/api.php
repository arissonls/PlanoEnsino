<?php

use App\Http\Controllers\FundamentalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('fundamental')->group( function () {
    Route::post('/sendmail/{id}', [FundamentalController::class, 'sendEmailCreate']);
    Route::get('/componentes', [FundamentalController::class, 'componentes']);
    Route::get('/ano_faixa/{id_componente}', [FundamentalController::class, 'ano_faixa']);
    Route::get('/campos_atuacao/{id_ano}', [FundamentalController::class, 'campos_atuacao']);
    Route::get('/praticas_linguagem/{id_campo}/{id_ano}', [FundamentalController::class, 'praticas_linguagem']);
    Route::get('/objetos/{id_pratica}/{id_ano}', [FundamentalController::class, 'objetos_conhecimento']);
    Route::get('/habilidades/{id_objeto}/{id_ano}', [FundamentalController::class, 'habilidades']);
});

Route::resource('fundamental', FundamentalController::class);

// Route::resource('plan', PlanoController::class);
// Route::post('/mail', [PlanoController::class, 'sendEmail']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
