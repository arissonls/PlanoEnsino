@component('mail::message')
# Ola professor {{ $data['professor'] }}

O Plano de ensino Fundamental da turma {{ $data['turma'] }} , para a data {{ $data['data_aula'] }}, foir criado com sucesso.
Segue em anexo o PDF.

{{-- @component('mail::button', ['url' => ''])
Button Text
@endcomponent --}}

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
