
    <p>Plano de ensino</p>

    <p>
        Ano Faixa : {{ $ano_faixa }}
        Habilidades:
        @foreach ($habilidades as $habilidade)
            {{ $habilidade }}
        @endforeach
    </p>

