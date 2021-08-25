<?php

namespace App\Http\Controllers;

use App\Mail\CreatePlanFundamental;
use App\Models\AnoFaixa;
use App\Models\Componente;
use App\Models\Fundamental;
use App\Models\Fundamental\CamposAtuacao;
use App\Models\Fundamental\PraticasLinguagem;
use App\Models\ObjetoConhecimento;
use App\Models\Plan;
use PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FundamentalController extends Controller
{
    protected $plano_fundamental;
    protected $plano;
    protected $componentes;

    public function __construct(
        Fundamental $fundamental,
        Plan $plano,
        Componente $componentes,
        CamposAtuacao $campos_atuacao,
        AnoFaixa $ano_faixa,
        PraticasLinguagem $praticas,
        ObjetoConhecimento $objetos
        )
    {
        $this->plano_fundamental = $fundamental;
        $this->plano = $plano;
        $this->componentes = $componentes;
        $this->campos_atuacao = $campos_atuacao;
        $this->ano_faixa = $ano_faixa;
        $this->praticas = $praticas;
        $this->objetos = $objetos;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $planos = $this->plano->all();

        return response()->json($planos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $plano = $this->plano->create($request->only('professor','turma','data_aula','tipo'));
        $data = $request->except('professor','turma','data_aula','tipo');
        $data['plan_id'] = $plano->id;
        $fundamental = $this->plano_fundamental->create($data);
        if(!$fundamental)
            return response()->json(['message' => 'erro no cadastro!']);

        return response()->json(['message' => 'plano fundamental cadastrao']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Send email
     */
    public function sendEmailCreate($id)
    {
        $plano = $this->plano->findOrFail($id);

        $data['header'] = collect($plano);
        foreach ($plano->fundamental as $key => $value) {
            $data['body'][$key] = [
                'componente' => $value->get_componente[0]->name,
                'campos_atuacao' => $value->get_campos[0]->name,
                'praticas_linguagem' => $value->get_praticas[0]->name,
                'objetos_conhecimento' => $value->get_objetos[0]->name,
                'hablidades' => $value->get_habilidades[0]->name,
            ];
        }
        $email = $plano;
        $email['pdf'] = PDF::loadView('pdfs.fundamental', $data);
        Mail::to('wesley.s.gomes@hotmail.com')->send(new CreatePlanFundamental($email));

        return response()->json(['message' => 'email enviado com sucesso']);
    }

    /**
     * Get componentes
     */
    public function componentes()
    {
        $componentes = $this->componentes->get();

        return response()->json($componentes);
    }

    /**
     * Get ano_faixa do componente
     */
    public function ano_faixa($id)
    {

        $componente = $this->componentes->findOrFail($id);
        $ano_faixa = $componente->ano_faixa;
        return response()->json($ano_faixa);
    }

    /**
     * Get Campos de Atuação
     */
    public function campos_atuacao($id)
    {
        $ano_faixa = $this->ano_faixa->findOrFail($id);
        $campos_atuacao = $ano_faixa->campo_atuacao;
        return response()->json($campos_atuacao, 200);
    }

    /**
     * Get Praticas de Linguagem
     */
    public function praticas_linguagem($id_campo, $id_ano)
    {
        $campo_atuacao = $this->campos_atuacao->findOrFail($id_campo);
        $praticas_linguagem = $campo_atuacao->praticas_linguagem($id_ano)->get();
        return response()->json($praticas_linguagem, 200);
    }

    public function objetos_conhecimento($id_pratica, $id_ano)
    {
        $praticas = $this->praticas->findOrFail($id_pratica);
        $objetos =  $praticas->objetos_conhecimento($id_ano)->get();
        return response()->json($objetos, 200);
    }

    public function habilidades($id_objeto,$id_ano)
    {
        $objeto = $this->objetos->findOrFail($id_objeto);
        $habilidades = $objeto->habilidades($id_ano)->get();
        return response()->json($habilidades, 200);
    }

}
