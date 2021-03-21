$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/CadastroUsuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "#enconding: UTF-8"
    }
  ],
  "line": 4,
  "name": "Cadastro do Usuário",
  "description": "",
  "id": "cadastro-do-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário \u003cdescricaoTeste\u003e",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"\u003cidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"\u003cperiodoInicio\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"\u003cperiodoFinalizacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"\u003csexo\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"\u003cusuarioForm\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"\u003csenhaForm\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;",
  "rows": [
    {
      "cells": [
        "descricaoTeste",
        "nome",
        "idade",
        "periodoInicio",
        "periodoFinalizacao",
        "telefone",
        "sexo",
        "email",
        "usuarioForm",
        "senhaForm",
        "mensagem"
      ],
      "line": 26,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;1"
    },
    {
      "cells": [
        "com o campo nome vazio",
        "",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "Sem Nome M",
        "123456",
        "O campo nome é obrigatório"
      ],
      "line": 27,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;2"
    },
    {
      "cells": [
        "com o campo idade vazio",
        "TesteF",
        "",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "Sem Nome F",
        "123456",
        "O campo idade é obrigatório"
      ],
      "line": 28,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;3"
    },
    {
      "cells": [
        "com o campo Periodo de inicio vazio",
        "TesteF",
        "35",
        "",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "Sem Nome F",
        "123456",
        "O campo idade é obrigatório"
      ],
      "line": 29,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;4"
    },
    {
      "cells": [
        "com o campo Periodo de Finalização vazio",
        "TesteF",
        "35",
        "20/03/2021",
        "",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "Sem Nome F",
        "123456",
        "O campo idade é obrigatório"
      ],
      "line": 30,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;5"
    },
    {
      "cells": [
        "com o campo Telefone vazio",
        "TesteF",
        "35",
        "20/03/2021",
        "19/03/2021",
        "",
        "Feminino",
        "teste@gmail.com",
        "Sem Nome F",
        "123456",
        "O Campo telefone é obrigatório"
      ],
      "line": 31,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;6"
    },
    {
      "comments": [
        {
          "line": 32,
          "value": "#| com o campo Sexo vazio                   | TesteF |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 |           | teste@gmail.com | Sem Nome F  |    123456 | O Campo sexo é obrigatório     |"
        }
      ],
      "cells": [
        "com o campo E-mail vazio",
        "TesteF",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "",
        "Sem Nome F",
        "123456",
        "O campo email é obrigatório"
      ],
      "line": 33,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;7"
    },
    {
      "cells": [
        "com o campo Usuario vazio",
        "TesteF",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "",
        "123456",
        "O campo usuario é obrigatório"
      ],
      "line": 34,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;8"
    },
    {
      "cells": [
        "com o campo Senha vazio",
        "TesteF",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "Sem Nome F",
        "",
        "o campo senha é obrigatório"
      ],
      "line": 35,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;9"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1902073600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 6451651300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo nome vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome M\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O campo nome é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 166400700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 121481500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 135782300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 140887300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 139901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 156806700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 157672000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 164097900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 81534700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome M",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 134220400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 136972000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 92552900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo nome é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 65204700,
  "status": "passed"
});
formatter.after({
  "duration": 621785400,
  "status": "passed"
});
formatter.before({
  "duration": 1353107300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2110778200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo idade vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome F\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O campo idade é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 110222100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 139931400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 128901200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 131956300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 139245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 159370500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 157749100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 161748400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 84178600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome F",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 130265800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138145000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 77426300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo idade é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 46616400,
  "status": "passed"
});
formatter.after({
  "duration": 606269500,
  "status": "passed"
});
formatter.before({
  "duration": 1371739700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1595560500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo Periodo de inicio vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome F\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O campo idade é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 112199300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 134016500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 131318600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 134146100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 133261600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 159889600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 141081400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 149016200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 81901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome F",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 131339100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 137163100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 90858000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo idade é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 47608000,
  "status": "passed"
});
formatter.after({
  "duration": 624097400,
  "status": "passed"
});
formatter.before({
  "duration": 1374605800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2800241200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo Periodo de Finalização vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome F\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O campo idade é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 116812500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 138322000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 131911300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 129525400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 133528100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 147948900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 140995900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 150135000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 83240200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome F",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 129333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 136573600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 76696400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo idade é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 48856100,
  "status": "passed"
});
formatter.after({
  "duration": 612189000,
  "status": "passed"
});
formatter.before({
  "duration": 1360270900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 7224533300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo Telefone vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome F\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O Campo telefone é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 116149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 139734800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 131030400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128455300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 140295400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 136820600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 147190500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 152139700,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 76126200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome F",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 134838500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 135987400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 90600900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O Campo telefone é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 47941500,
  "status": "passed"
});
formatter.after({
  "duration": 641425200,
  "status": "passed"
});
formatter.before({
  "duration": 1356440100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1450305300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#| com o campo Sexo vazio                   | TesteF |    35 | 20/03/2021    | 19/03/2021         | (61) 9999-9999 |           | teste@gmail.com | Sem Nome F  |    123456 | O Campo sexo é obrigatório     |"
    }
  ],
  "line": 33,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo E-mail vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome F\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O campo email é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 118236900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 133426500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 133411000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128958200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 140797200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 157695400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 157105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 132849500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 82947600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome F",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 145784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138723100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 88315400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo email é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 49047700,
  "status": "passed"
});
formatter.after({
  "duration": 611526100,
  "status": "passed"
});
formatter.before({
  "duration": 1357337500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1935869800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo Usuario vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;8",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"123456\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"O campo usuario é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 111026000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 140649100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 130903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 127950000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 139026900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 142939300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 142998700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 152260800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 78658200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 122142400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 133923000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 89084500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo usuario é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 48071200,
  "status": "passed"
});
formatter.after({
  "duration": 624979800,
  "status": "passed"
});
formatter.before({
  "duration": 1375233400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1623193400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Mostrar mensagem de erro ao tentar Cadastrar Usuário com o campo Senha vazio",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-erro-ao-tentar-cadastrar-usuário-\u003cdescricaoteste\u003e;;9",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 9,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@MostrarMensagemErro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o campo usuário \"Sem Nome F\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o campo senha \"\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "visualizo a mensagem \"o campo senha é obrigatório\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 119569700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 135636200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 133559500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 126953900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 143027800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 146344500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 137717600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 150362200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80042700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem Nome F",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 130400900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 129969300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 81125200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "o campo senha é obrigatório",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem(String)"
});
formatter.result({
  "duration": 47264700,
  "status": "passed"
});
formatter.after({
  "duration": 611064300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Cadastrar \u003cdescricaoTeste\u003e com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"\u003cidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"\u003cperiodoInicio\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"\u003cperiodoFinalizacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"\u003csexo\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"\u003cusuarioForm\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"\u003csenhaForm\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;",
  "rows": [
    {
      "cells": [
        "descricaoTeste",
        "nome",
        "idade",
        "periodoInicio",
        "periodoFinalizacao",
        "telefone",
        "sexo",
        "email",
        "usuarioForm",
        "senhaForm"
      ],
      "line": 53,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;1"
    },
    {
      "cells": [
        "AdminOutrosSim",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminOutrosSim",
        "admin123"
      ],
      "line": 54,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;2"
    },
    {
      "cells": [
        "AdminOutrosNao",
        "TesteF",
        "30",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "AdminOutrosNao",
        "admin123"
      ],
      "line": 55,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;3"
    },
    {
      "cells": [
        "AdminFemininoSim",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminFemininoSim",
        "admin123"
      ],
      "line": 56,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;4"
    },
    {
      "cells": [
        "AdminFemininoNao",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminFemininoNao",
        "admin123"
      ],
      "line": 57,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;5"
    },
    {
      "cells": [
        "AdminMesculinoSim",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminMesculinoSim",
        "admin123"
      ],
      "line": 58,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;6"
    },
    {
      "cells": [
        "AdminMesculinoNao",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminMesculinoNao",
        "admin123"
      ],
      "line": 59,
      "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1305676400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2060525500,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Cadastrar AdminOutrosSim com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"AdminOutrosSim\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 109435300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 139765800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 129781900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128483700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 124883400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 144981500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 140900300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 149639500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80154600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 135215900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 139346700,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 84932700,
  "status": "passed"
});
formatter.after({
  "duration": 616189900,
  "status": "passed"
});
formatter.before({
  "duration": 1296160800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1582098000,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Cadastrar AdminOutrosNao com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"30\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"AdminOutrosNao\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 108776300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 135914400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 135003500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 127651200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 140287700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 142279100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 141414400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 148541500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 81493300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosNao",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 134149100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138867200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 87548600,
  "status": "passed"
});
formatter.after({
  "duration": 611917500,
  "status": "passed"
});
formatter.before({
  "duration": 1359435100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2564026700,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Cadastrar AdminFemininoSim com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"AdminFemininoSim\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 109901700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 133990900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 136713500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 125470000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 127640200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 143966700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 139638900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 149261500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 81504900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminFemininoSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 136057200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 141991900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 83063100,
  "status": "passed"
});
formatter.after({
  "duration": 632418200,
  "status": "passed"
});
formatter.before({
  "duration": 1358547500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1714024900,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Cadastrar AdminFemininoNao com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"AdminFemininoNao\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 116018400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 138693000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 130774200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 129203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 138100800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 145689600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 141125900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 148497800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 79182500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminFemininoNao",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 138687700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 140875400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 81235500,
  "status": "passed"
});
formatter.after({
  "duration": 615274300,
  "status": "passed"
});
formatter.before({
  "duration": 1289419600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1751528400,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Cadastrar AdminMesculinoSim com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"AdminMesculinoSim\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 123830800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 134953200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 132451300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128716000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 138939200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 161193500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 139196700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 150563100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80868300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminMesculinoSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 134828700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138095400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 85459300,
  "status": "passed"
});
formatter.after({
  "duration": 611826200,
  "status": "passed"
});
formatter.before({
  "duration": 1417506700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1507335200,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Cadastrar AdminMesculinoNao com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;cadastrar-\u003cdescricaoteste\u003e-com-sucesso;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 37,
      "name": "@Positivo"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "informo o campo usuário \"AdminMesculinoNao\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 116122700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 135371600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 132022600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128366700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 124841100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 144193400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 139613200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 151032800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80777100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminMesculinoNao",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 141425700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 136071200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 82518100,
  "status": "passed"
});
formatter.after({
  "duration": 613347000,
  "status": "passed"
});
formatter.before({
  "duration": 1451869900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2204268700,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Cancelar o cadastro de um usuário",
  "description": "",
  "id": "cadastro-do-usuário;cancelar-o-cadastro-de-um-usuário",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 61,
      "name": "@Positivo"
    },
    {
      "line": 61,
      "name": "@CancelarCadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 64,
  "name": "informo o campo nome \"Usuário para validar o botão cancelar\"",
  "keyword": "E "
});
formatter.step({
  "line": 65,
  "name": "informo o campo idade \"35\"",
  "keyword": "E "
});
formatter.step({
  "line": 66,
  "name": "informo o campo período de início \"20/03/2021\"",
  "keyword": "E "
});
formatter.step({
  "line": 67,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "keyword": "E "
});
formatter.step({
  "line": 68,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "keyword": "E "
});
formatter.step({
  "line": 69,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "keyword": "E "
});
formatter.step({
  "line": 70,
  "name": "informo o campo email \"teste@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 72,
  "name": "informo o campo usuário \"AdminOutrosSim\"",
  "keyword": "E "
});
formatter.step({
  "line": 73,
  "name": "informo o campo senha \"admin123\"",
  "keyword": "E "
});
formatter.step({
  "line": 74,
  "name": "clico no botão Cancelar",
  "keyword": "E "
});
formatter.step({
  "line": 75,
  "name": "retorno para tela de login",
  "keyword": "Então "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 117916500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Usuário para validar o botão cancelar",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 178639300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 125522700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128093300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 123828300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 139141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 132182400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 145735400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 83998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 136506600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 137898900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Cancelar()"
});
formatter.result({
  "duration": 92479300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.retorno_para_tela_de_login()"
});
formatter.result({
  "duration": 58496000,
  "status": "passed"
});
formatter.after({
  "duration": 615185400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"\u003cidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"\u003cperiodoInicio\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"\u003cperiodoFinalizacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"\u003csexo\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"\u003cusuarioForm\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"\u003csenhaForm\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;",
  "rows": [
    {
      "cells": [
        "descricaoTeste",
        "nome",
        "idade",
        "periodoInicio",
        "periodoFinalizacao",
        "telefone",
        "sexo",
        "email",
        "usuarioForm",
        "senhaForm",
        "mensagem"
      ],
      "line": 94,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;1"
    },
    {
      "cells": [
        "AdminOutrosSim",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminOutrosSim",
        "admin123",
        "OK"
      ],
      "line": 95,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;2"
    },
    {
      "cells": [
        "AdminOutrosNao",
        "TesteF",
        "30",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "AdminOutrosNao",
        "admin123",
        "OK"
      ],
      "line": 96,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;3"
    },
    {
      "cells": [
        "AdminFemininoSim",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "AdminFemininoSim",
        "admin123",
        "OK"
      ],
      "line": 97,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;4"
    },
    {
      "cells": [
        "AdminFemininoNao",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Feminino",
        "teste@gmail.com",
        "AdminFemininoNao",
        "admin123",
        "OK"
      ],
      "line": 98,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;5"
    },
    {
      "cells": [
        "AdminMesculinoSim",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminMesculinoSim",
        "admin123",
        "OK"
      ],
      "line": 99,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;6"
    },
    {
      "cells": [
        "AdminMesculinoNao",
        "TesteM",
        "35",
        "20/03/2021",
        "19/03/2021",
        "(61) 9999-9999",
        "Masculino",
        "teste@gmail.com",
        "AdminMesculinoNao",
        "admin123",
        "OK"
      ],
      "line": 100,
      "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1391182700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1633239500,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"AdminOutrosSim\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"OK\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 115341100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 138207100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 131186700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 127439200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 126295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 157179800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 140349100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 149912000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80754900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 133919900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 139077700,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 85632100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 37
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem_de_duplicidade(String)"
});
formatter.result({
  "duration": 112292000,
  "status": "passed"
});
formatter.after({
  "duration": 610226700,
  "status": "passed"
});
formatter.before({
  "duration": 1294418400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 3037166000,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"TesteF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"30\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"AdminOutrosNao\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"OK\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 118350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteF",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 136503300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 134279300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 139699800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 125326600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 158041000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 141938800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 151367900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 81283900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosNao",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 136186400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 134851600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 83609400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 37
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem_de_duplicidade(String)"
});
formatter.result({
  "duration": 114909300,
  "status": "passed"
});
formatter.after({
  "duration": 610021600,
  "status": "passed"
});
formatter.before({
  "duration": 1298983300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2475598200,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"AdminFemininoSim\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"OK\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 116709700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 137580100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 130300300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 128487600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 144795700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 160711500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 142052500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 152566300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80982600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminFemininoSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 137650200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138334000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 86693500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 37
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem_de_duplicidade(String)"
});
formatter.result({
  "duration": 114332800,
  "status": "passed"
});
formatter.after({
  "duration": 628768500,
  "status": "passed"
});
formatter.before({
  "duration": 1296844300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1592068300,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"Feminino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"AdminFemininoNao\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"OK\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 109683600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 137158100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 134923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 127851000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 138682700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 143602000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feminino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 141715300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 151203200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 82684900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminFemininoNao",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 135506700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 137473600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 85079400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 37
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem_de_duplicidade(String)"
});
formatter.result({
  "duration": 113933700,
  "status": "passed"
});
formatter.after({
  "duration": 611455800,
  "status": "passed"
});
formatter.before({
  "duration": 1345855100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1258246500,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"AdminMesculinoSim\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"OK\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 105398500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 142824800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 129960100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 127325300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 126602500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 143162200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 140368500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 150889200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 81608200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminMesculinoSim",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 136295600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138654000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 81992200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 37
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem_de_duplicidade(String)"
});
formatter.result({
  "duration": 113675500,
  "status": "passed"
});
formatter.after({
  "duration": 610322700,
  "status": "passed"
});
formatter.before({
  "duration": 1358497100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1274834900,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Mostrar mensagem de duplicidade de usuário",
  "description": "",
  "id": "cadastro-do-usuário;mostrar-mensagem-de-duplicidade-de-usuário;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Cadastro"
    },
    {
      "line": 77,
      "name": "@Negativo"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 77,
      "name": "@MostrarMensagemDuplicidade"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "clico no botão cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 80,
  "name": "informo o campo nome \"TesteM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "informo o campo idade \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "informo o campo período de início \"20/03/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "informo o campo período de finalização \"19/03/2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "informo o campo telefone \"(61) 9999-9999\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "seleciono a opção dentro do campo sexo \"Masculino\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "informo o campo email \"teste@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "seleciono a opção sim dentro do campo Você atua ou já atuou com TI",
  "keyword": "E "
});
formatter.step({
  "line": 88,
  "name": "informo o campo usuário \"AdminMesculinoNao\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 89,
  "name": "informo o campo senha \"admin123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "clico no botão Registrar",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "visualizo a mensagem de duplicidade \"OK\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_cadastre_se()"
});
formatter.result({
  "duration": 119471700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TesteM",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_nome(String)"
});
formatter.result({
  "duration": 148356900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_idade(String)"
});
formatter.result({
  "duration": 132584600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/03/2021",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_inicio(String)"
});
formatter.result({
  "duration": 129319600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2021",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_periodo_de_finalizacao(String)"
});
formatter.result({
  "duration": 140506000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(61) 9999-9999",
      "offset": 26
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_telefone(String)"
});
formatter.result({
  "duration": 143399700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masculino",
      "offset": 40
    }
  ],
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_sexo(String)"
});
formatter.result({
  "duration": 141920100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_email(String)"
});
formatter.result({
  "duration": 149331200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI()"
});
formatter.result({
  "duration": 80247300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminMesculinoNao",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_usuario(String)"
});
formatter.result({
  "duration": 140005100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_senha(String)"
});
formatter.result({
  "duration": 138595100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_Registrar()"
});
formatter.result({
  "duration": 83650400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 37
    }
  ],
  "location": "StepsDefinitions.visualizo_a_mensagem_de_duplicidade(String)"
});
formatter.result({
  "duration": 112516400,
  "status": "passed"
});
formatter.after({
  "duration": 610908300,
  "status": "passed"
});
formatter.before({
  "duration": 1371168500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2391142900,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Consultar uma lista de usuários",
  "description": "",
  "id": "cadastro-do-usuário;consultar-uma-lista-de-usuários",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 102,
      "name": "@Positivo"
    },
    {
      "line": 102,
      "name": "@ConsultarUsuarios"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 105,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "E "
});
formatter.step({
  "line": 106,
  "name": "clico no menu usuários",
  "keyword": "E "
});
formatter.step({
  "line": 107,
  "name": "visualizo a lista de usuários",
  "keyword": "Então "
});
formatter.match({
  "location": "StepsDefinitions.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 287764400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 113118000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_menu_usuarios()"
});
formatter.result({
  "duration": 115755200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.visualizo_a_lista_de_usuários()"
});
formatter.result({
  "duration": 196311300,
  "status": "passed"
});
formatter.after({
  "duration": 631304200,
  "status": "passed"
});
formatter.before({
  "duration": 1360710100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2917063800,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Editar usuários com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;editar-usuários-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 109,
      "name": "@Positivo"
    },
    {
      "line": 109,
      "name": "@EditarUsuario"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 112,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "E "
});
formatter.step({
  "line": 113,
  "name": "clico no menu usuários",
  "keyword": "E "
});
formatter.step({
  "line": 114,
  "name": "seleciono o usuário para editar",
  "keyword": "E "
});
formatter.step({
  "line": 115,
  "name": "altero os dados com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "StepsDefinitions.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 290381100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 114573600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_menu_usuarios()"
});
formatter.result({
  "duration": 109702800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_o_usuário_para_editar()"
});
formatter.result({
  "duration": 295890100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.altero_os_dados_com_sucesso()"
});
formatter.result({
  "duration": 94357600,
  "status": "passed"
});
formatter.after({
  "duration": 633304200,
  "status": "passed"
});
formatter.before({
  "duration": 1295812400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1823015300,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Deletar usuários com sucesso",
  "description": "",
  "id": "cadastro-do-usuário;deletar-usuários-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 117,
      "name": "@Positivo"
    },
    {
      "line": 117,
      "name": "@DeletarUsuario"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 120,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "E "
});
formatter.step({
  "line": 121,
  "name": "clico no menu usuários",
  "keyword": "E "
});
formatter.step({
  "line": 122,
  "name": "seleciono o usuário para deletar",
  "keyword": "E "
});
formatter.step({
  "line": 123,
  "name": "deleto o usuário com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "StepsDefinitions.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 293713600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 112683200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_menu_usuarios()"
});
formatter.result({
  "duration": 111831000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.seleciono_o_usuário_para_deletar()"
});
formatter.result({
  "duration": 282631100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.deleto_o_usuário_com_sucesso()"
});
formatter.result({
  "duration": 5008187500,
  "status": "passed"
});
formatter.after({
  "duration": 639642400,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#enconding: UTF-8"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 1357058000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1352315300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Tenta Realizar Login com Sucesso - Perfil Fake",
  "description": "",
  "id": "login;tenta-realizar-login-com-sucesso---perfil-fake",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@negativo"
    },
    {
      "line": 9,
      "name": "@TentarRealizarLogin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "informo o campo user \"Admin\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informo o campo pass \"admin000\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "permaneço na tela de login",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 108660900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin000",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 97281600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 82666000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.permaneco_na_tela_de_login()"
});
formatter.result({
  "duration": 1504274400,
  "status": "passed"
});
formatter.after({
  "duration": 619089600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Realizar Login com Sucesso \u003cdescricaoTeste\u003e",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@Positico"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"\u003cnomeUsuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"\u003csenhaUsuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;",
  "rows": [
    {
      "cells": [
        "descricaoTeste",
        "nomeUsuario",
        "senhaUsuario"
      ],
      "line": 24,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;1"
    },
    {
      "cells": [
        "Perfil Admin Outros que já atuou com TI",
        "AdminOutrosSim",
        "admin123"
      ],
      "line": 25,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;2"
    },
    {
      "cells": [
        "Perfil Admin Outros que não atuou com TI",
        "AdminOutrosNao",
        "admin123"
      ],
      "line": 26,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;3"
    },
    {
      "cells": [
        "Perfil Admin Feminino que já atuou com TI",
        "AdminFemininoSim",
        "admin123"
      ],
      "line": 27,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;4"
    },
    {
      "cells": [
        "Perfil Admin Feminino que não atuou com TI",
        "AdminFemininoNao",
        "admin123"
      ],
      "line": 28,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;5"
    },
    {
      "cells": [
        "Perfil Admin Masculino que já atuou com TI",
        "AdminMesculinoSim",
        "admin123"
      ],
      "line": 29,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;6"
    },
    {
      "cells": [
        "Perfil Admin Masculino que não atuou com TI",
        "AdminMesculinoNao",
        "admin123"
      ],
      "line": 30,
      "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1283708700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2159569200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Realizar Login com Sucesso Perfil Admin Outros que já atuou com TI",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@Positico"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"AdminOutrosSim\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"admin123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosSim",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 114537500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 95346400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 79977200,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 112015500,
  "status": "passed"
});
formatter.after({
  "duration": 612229700,
  "status": "passed"
});
formatter.before({
  "duration": 1353623600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1927847900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Realizar Login com Sucesso Perfil Admin Outros que não atuou com TI",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@Positico"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"AdminOutrosNao\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"admin123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminOutrosNao",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 104298500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 92678400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 81222000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 132148700,
  "status": "passed"
});
formatter.after({
  "duration": 607878500,
  "status": "passed"
});
formatter.before({
  "duration": 1292921800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1460680900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Realizar Login com Sucesso Perfil Admin Feminino que já atuou com TI",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@Positico"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"AdminFemininoSim\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"admin123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminFemininoSim",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 106864800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 92295600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 83522000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 113246400,
  "status": "passed"
});
formatter.after({
  "duration": 610114400,
  "status": "passed"
});
formatter.before({
  "duration": 1295500400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 2471871000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Realizar Login com Sucesso Perfil Admin Feminino que não atuou com TI",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@Positico"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"AdminFemininoNao\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"admin123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminFemininoNao",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 107723400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 92508800,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 84593900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 112328400,
  "status": "passed"
});
formatter.after({
  "duration": 727335500,
  "status": "passed"
});
formatter.before({
  "duration": 1371082200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 1277529700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Realizar Login com Sucesso Perfil Admin Masculino que já atuou com TI",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@Positico"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"AdminMesculinoSim\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"admin123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminMesculinoSim",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 122069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 89210600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 85301000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 141362300,
  "status": "passed"
});
formatter.after({
  "duration": 922604400,
  "status": "passed"
});
formatter.before({
  "duration": 1307583900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.que_acesso_a_aplicacao()"
});
formatter.result({
  "duration": 3203372100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Realizar Login com Sucesso Perfil Admin Masculino que não atuou com TI",
  "description": "",
  "id": "login;realizar-login-com-sucesso-\u003cdescricaoteste\u003e;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 16,
      "name": "@RealizarLogin"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@Positico"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo o campo user \"AdminMesculinoNao\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "informo o campo pass \"admin123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera autorizar o login, exibindo o título do Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminMesculinoNao",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_user(String)"
});
formatter.result({
  "duration": 111627900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.informo_o_campo_pass(String)"
});
formatter.result({
  "duration": 88309600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.clico_no_botao_login()"
});
formatter.result({
  "duration": 83413700,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 111842500,
  "status": "passed"
});
formatter.after({
  "duration": 630914200,
  "status": "passed"
});
});