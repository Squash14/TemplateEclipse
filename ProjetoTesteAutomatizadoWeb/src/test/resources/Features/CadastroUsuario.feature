# language: pt
#enconding: UTF-8
@Cadastro @End2End 
Funcionalidade: Cadastro do Usuário

  Contexto: 
    Dado que acesso a aplicação

  @Negativo @MostrarMensagemErro
  Esquema do Cenario: Mostrar mensagem de erro ao tentar Cadastrar Usuário <descricaoTeste>
    Quando clico no botão cadastre-se
    E informo o campo nome "<nome>"
    E informo o campo idade "<idade>"
    E informo o campo período de início "<periodoInicio>"
    E informo o campo período de finalização "<periodoFinalizacao>"
    E informo o campo telefone "<telefone>"
    E seleciono a opção dentro do campo sexo "<sexo>"
    E informo o campo email "<email>"
    E seleciono a opção sim dentro do campo Você atua ou já atuou com TI
    E informo o campo usuário "<usuarioForm>"
    E informo o campo senha "<senhaForm>"
    E clico no botão Registrar
    Entao visualizo a mensagem "<mensagem>"

    Exemplos: 
      | descricaoTeste                           | nome   | idade | periodoInicio | periodoFinalizacao | telefone       | sexo      | email           | usuarioForm | senhaForm | mensagem                       |
      | com o campo nome vazio                   |        |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | Sem Nome M  |    123456 | O campo nome é obrigatório     |
      | com o campo idade vazio                  | TesteF |       | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | Sem Nome F  |    123456 | O campo idade é obrigatório    |
      | com o campo Periodo de inicio vazio      | TesteF |    35 |               | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | Sem Nome F  |    123456 | O campo idade é obrigatório    |
      | com o campo Periodo de Finalização vazio | TesteF |    35 | 20/03/2021    |                    | (61) 9999-9999 | Feminino  | teste@gmail.com | Sem Nome F  |    123456 | O campo idade é obrigatório    |
      | com o campo Telefone vazio               | TesteF |    35 | 20/03/2021    | 19/03/2021         |                | Feminino  | teste@gmail.com | Sem Nome F  |    123456 | O Campo telefone é obrigatório |
      #| com o campo Sexo vazio                   | TesteF |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 |           | teste@gmail.com | Sem Nome F  |    123456 | O Campo sexo é obrigatório     |
      | com o campo E-mail vazio                 | TesteF |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  |                 | Sem Nome F  |    123456 | O campo email é obrigatório    |
      | com o campo Usuario vazio                | TesteF |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com |             |    123456 | O campo usuario é obrigatório  |
      | com o campo Senha vazio                  | TesteF |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | Sem Nome F  |           | o campo senha é obrigatório    |

  @Positivo @CadastroUsuario @SmokeTest
  Esquema do Cenario: Cadastrar <descricaoTeste> com sucesso
    Quando clico no botão cadastre-se
    E informo o campo nome "<nome>"
    E informo o campo idade "<idade>"
    E informo o campo período de início "<periodoInicio>"
    E informo o campo período de finalização "<periodoFinalizacao>"
    E informo o campo telefone "<telefone>"
    E seleciono a opção dentro do campo sexo "<sexo>"
    E informo o campo email "<email>"
    E seleciono a opção sim dentro do campo Você atua ou já atuou com TI
    E informo o campo usuário "<usuarioForm>"
    E informo o campo senha "<senhaForm>"
    E clico no botão Registrar

    Exemplos: 
      | descricaoTeste    | nome   | idade | periodoInicio | periodoFinalizacao | telefone       | sexo      | email           | usuarioForm       | senhaForm |
      | AdminOutrosSim    | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminOutrosSim    | admin123  |
      | AdminOutrosNao    | TesteF |    30 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | AdminOutrosNao    | admin123  |
      | AdminFemininoSim  | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminFemininoSim  | admin123  |
      | AdminFemininoNao  | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminFemininoNao  | admin123  |
      | AdminMesculinoSim | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminMesculinoSim | admin123  |
      | AdminMesculinoNao | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminMesculinoNao | admin123  |
      
  @Positivo @CancelarCadastroUsuario
  Cenario: Cancelar o cadastro de um usuário
    Quando clico no botão cadastre-se
    E informo o campo nome "Usuário para validar o botão cancelar"
    E informo o campo idade "35"
    E informo o campo período de início "20/03/2021"
    E informo o campo período de finalização "19/03/2021"
    E informo o campo telefone "(61) 9999-9999"
    E seleciono a opção dentro do campo sexo "Masculino"
    E informo o campo email "teste@gmail.com"
    E seleciono a opção sim dentro do campo Você atua ou já atuou com TI
    E informo o campo usuário "AdminOutrosSim"
    E informo o campo senha "admin123"
    E clico no botão Cancelar
    Então retorno para tela de login
    
  @Negativo @MostrarMensagemDuplicidade 
  Esquema do Cenario: Mostrar mensagem de duplicidade de usuário
    Quando clico no botão cadastre-se
    E informo o campo nome "<nome>"
    E informo o campo idade "<idade>"
    E informo o campo período de início "<periodoInicio>"
    E informo o campo período de finalização "<periodoFinalizacao>"
    E informo o campo telefone "<telefone>"
    E seleciono a opção dentro do campo sexo "<sexo>"
    E informo o campo email "<email>"
    E seleciono a opção sim dentro do campo Você atua ou já atuou com TI
    E informo o campo usuário "<usuarioForm>"
    E informo o campo senha "<senhaForm>"
    E clico no botão Registrar
    Entao visualizo a mensagem de duplicidade "<mensagem>"

    Exemplos: 
      | descricaoTeste    | nome   | idade | periodoInicio | periodoFinalizacao | telefone       | sexo      | email           | usuarioForm       | senhaForm | mensagem |
      | AdminOutrosSim    | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminOutrosSim    | admin123  | OK       |
      | AdminOutrosNao    | TesteF |    30 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | AdminOutrosNao    | admin123  | OK       |
      | AdminFemininoSim  | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | AdminFemininoSim  | admin123  | OK       |
      | AdminFemininoNao  | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Feminino  | teste@gmail.com | AdminFemininoNao  | admin123  | OK       |
      | AdminMesculinoSim | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminMesculinoSim | admin123  | OK       |
      | AdminMesculinoNao | TesteM |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 | Masculino | teste@gmail.com | AdminMesculinoNao | admin123  | OK       |

  @Positivo @ConsultarUsuarios
  Cenario: Consultar uma lista de usuários
  	Dado que o usuário esteja logado
    E o sistema devera autorizar o login, exibindo o título do Dashboard
    E clico no menu usuários
    Então visualizo a lista de usuários

  @Positivo @EditarUsuario
  Cenario: Editar usuários com sucesso
  	Dado que o usuário esteja logado
   	E o sistema devera autorizar o login, exibindo o título do Dashboard
    E clico no menu usuários
    E seleciono o usuário para editar
    Então altero os dados com sucesso
     
  @Positivo @DeletarUsuario
  Cenario: Deletar usuários com sucesso
  	Dado que o usuário esteja logado
   	E o sistema devera autorizar o login, exibindo o título do Dashboard
    E clico no menu usuários
    E seleciono o usuário para deletar
    Então deleto o usuário com sucesso  
   