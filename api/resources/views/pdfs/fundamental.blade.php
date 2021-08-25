
    <p><b>Plano de ensino fudamental</b></p>

    <p> <b>Professor</b>  {{ $header['professor'] }} </p>
    <p> <b>Turma</b>  {{ $header['turma'] }} </p>
    <p> <b>Data Aula</b>  {{ $header['data_aula'] }} </p>

    @foreach ($body as $item)
        <p><b>Componente</b> {{ $item['componente'] }}</p>
        <p><b>Campos de Atuação</b> {{ $item['campos_atuacao'] }}</p>
        <p><b>Praticas de Linguagem</b> {{ $item['praticas_linguagem'] }}</p>
        <p><b>Objetos de Conhecimento</b> {{ $item['objetos_conhecimento'] }}</p>
        <p><b>Habilidade</b> {{ $item['hablidades'] }}</p>
    @endforeach




