<?php

namespace App\Http\Controllers;

use App\Mail\CreatePlanFundamental;
use App\Models\Fundamental;
use App\Models\Plan;
use PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FundamentalController extends Controller
{
    protected $plano_fundamental;
    protected $plano;

    public function __construct(Fundamental $fundamental, Plan $plano)
    {
        $this->plano_fundamental = $fundamental;
        $this->plano = $plano;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return response()->json(['message' => 'controller fundamental']);
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
        // dd($request->all());
        $plano = $this->plano->create($request->only('professor','turma','data_aula','tipo'));

        $data = $request->except('professor','turma','data_aula','tipo');
        $data['plan_id'] = $plano->id;
        $fundamental = $this->plano_fundamental->create($data);
        // $plano = $this->plano_fundamental->plan->create($request->all());
        if(!$fundamental)
            return response()->json(['message' => 'erro no cadastro!']);

        return response()->json(['message' => 'plano cadastrao']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $plano = $this->plano->findOrFail($id);
        // dd($plano->fundamental);
        $fundamental = $this->plano_fundamental->findOrFail($id)->plan;
        dd($fundamental);
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
        $data = $plano->only('professor','turma','data_aula','tipo');
        $data['fundamental'] = $plano->fundamental;
        // dd($data);
        $data['pdf'] = PDF::loadView('pdfs.fundamental', $data);
        Mail::to('wesley.s.gomes@hotmail.com')->send(new CreatePlanFundamental($data));

        return response()->json(['message' => 'email enviado com sucesso']);
    }
}
