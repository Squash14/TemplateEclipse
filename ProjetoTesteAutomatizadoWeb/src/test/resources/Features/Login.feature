#language: pt
#enconding: UTF-8
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que acesso a aplicação

  @negativo @TentarRealizarLogin
  Cenario: Tenta Realizar Login com Sucesso - Perfil Fake
    Quando informo o campo user "Admin"
    E informo o campo pass "admin000"
    E clico no botão login
    Entao permaneço na tela de login

  @Positico @RealizarLogin @SmokeTest
  Esquema do Cenario: Realizar Login com Sucesso <descricaoTeste>
    Quando informo o campo user "<nomeUsuario>"
    E informo o campo pass "<senhaUsuario>"
    E clico no botão login
    Entao o sistema devera autorizar o login, exibindo o título do Dashboard

    Exemplos: 
      | descricaoTeste                              | nomeUsuario       | senhaUsuario |
      | Perfil Admin Outros que já atuou com TI     | AdminOutrosSim    | admin123     |
      | Perfil Admin Outros que não atuou com TI    | AdminOutrosNao    | admin123     |
      | Perfil Admin Feminino que já atuou com TI   | AdminFemininoSim  | admin123     |
      | Perfil Admin Feminino que não atuou com TI  | AdminFemininoNao  | admin123     |
      | Perfil Admin Masculino que já atuou com TI  | AdminMesculinoSim | admin123     |
      | Perfil Admin Masculino que não atuou com TI | AdminMesculinoNao | admin123     |
