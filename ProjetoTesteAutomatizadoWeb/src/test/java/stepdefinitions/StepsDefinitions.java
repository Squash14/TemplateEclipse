package stepdefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pageobjects.HomePage;
import pageobjects.LoginPage;
import pageobjects.MensagemPage;
import pageobjects.UsuariosPage;

public class StepsDefinitions {

	WebDriver driver;

	@Dado("^que acesso a aplicação$")
	public void que_acesso_a_aplicacao() throws Throwable {
		Hooks.abrirUrl("https://gitmaratonadev.stefanini.com.br/maratonaqa/login");
		driver = Hooks.getDriver();
	}

	@Dado("^que o usuário esteja logado$")
	public void que_o_usuario_esteja_logado() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario("Admin");
		lp.preencherSenha("admin123");
		lp.clicarBotaoLogin();
	}

	@Dado("^clico no botão cadastre-se$")
	public void clico_no_botao_cadastre_se() throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.clicarBotaoCadastreSe();
	}

	// Feature CadastroUsuario
	@Quando("^informo o campo nome \"([^\"]*)\"$")
	public void informo_o_campo_nome(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherNomeForm(arg1);
	}

	@Quando("^informo o campo idade \"([^\"]*)\"$")
	public void informo_o_campo_idade(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherIdadeForm(arg1);
	}

	@Quando("^informo o campo período de início \"([^\"]*)\"$")
	public void informo_o_campo_periodo_de_inicio(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherPeriodoInicioForm(arg1);
	}

	@Quando("^informo o campo período de finalização \"([^\"]*)\"$")
	public void informo_o_campo_periodo_de_finalizacao(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherPeriodoFinalizacaoForm(arg1);
	}

	@Quando("^informo o campo telefone \"([^\"]*)\"$")
	public void informo_o_campo_telefone(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherTelefoneForm(arg1);
	}

	@Quando("^seleciono a opção dentro do campo sexo \"([^\"]*)\"$")
	public void seleciono_a_opcao_dentro_do_campo_sexo(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherSexoForm(arg1);
	}

	@Quando("^informo o campo email \"([^\"]*)\"$")
	public void informo_o_campo_email(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherEmailForm(arg1);
	}

	@Quando("^seleciono a opção sim dentro do campo Você atua ou já atuou com TI$")
	public void seleciono_a_opcao_dentro_do_campo_Voce_atua_ou_ja_atuou_com_TI() throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherVoceAtuaTISim();
	}

	@Quando("^clico no botão Registrar$")
	public void clico_no_botao_Registrar() throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.clicarBotaoRagistrar();
	}

	@Então("^visualizo a mensagem \"([^\"]*)\"$")
	public void visualizo_a_mensagem(String arg1) throws Throwable {		
		MensagemPage msg = new MensagemPage(Hooks.getDriver());
		msg.visualizaMensagem(arg1);
	}

	// Feature Login
	@Quando("^informo o campo user \"([^\"]*)\"$")
	public void informo_o_campo_user(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario(arg1);
	}
	
	@Quando("^informo o campo usuário \"([^\"]*)\"$")
	public void informo_o_campo_usuario(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherUsuario(arg1);
	}

	@Quando("^informo o campo pass \"([^\"]*)\"$")
	public void informo_o_campo_pass(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherSenha(arg1);
	}
	
	@Quando("^informo o campo senha \"([^\"]*)\"$")
	public void informo_o_campo_senha(String arg1) throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.preencherSenha(arg1);
	}

	@Quando("^clico no botão login$")
	public void clico_no_botao_login() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.clicarBotaoLogin();
	}

	@Então("^o sistema devera autorizar o login, exibindo o título do Dashboard$")
	public void o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard() throws Throwable {
		HomePage homePage = new HomePage(Hooks.getDriver());
		homePage.txtHome();
	}
	
	@Então("^permaneço na tela de login$")
	public void permaneco_na_tela_de_login() throws Throwable {
		new Thread();
		Thread.sleep(1500);
	}

	// Feature Usuarios
	@Dado("^clico no menu usuários$")
	public void clico_no_menu_usuarios() throws Throwable {
		UsuariosPage user = new UsuariosPage(driver);
		user.clicarMenuUsuario();
	}
	
	@Então("^visualizo a mensagem de duplicidade \"([^\"]*)\"$")
	public void visualizo_a_mensagem_de_duplicidade(String arg1) throws Throwable {		
		MensagemPage msg = new MensagemPage(Hooks.getDriver());
		msg.visualizaoMsgTxt(arg1);
	}
	
	@Então("^clico no botão Cancelar$")
	public void clico_no_botao_Cancelar() throws Throwable {		
		UsuariosPage user = new UsuariosPage(driver);
		user.clicarBotaoCancelar();
	}
	
	@Então("^retorno para tela de login$")
	public void retorno_para_tela_de_login() throws Throwable {	
		UsuariosPage user = new UsuariosPage(driver);
		user.tituloLogin();
	}
	
	@Então("^visualizo a lista de usuários$")
	public void visualizo_a_lista_de_usuários() throws Throwable {
		UsuariosPage usuarioPage = new UsuariosPage(Hooks.getDriver());
		usuarioPage.visualizoListaUsuarios();
	}
	
	@Dado("^seleciono o usuário para editar$")
	public void seleciono_o_usuário_para_editar() throws Throwable {
		UsuariosPage usuarioPage = new UsuariosPage(Hooks.getDriver());
		usuarioPage.alteroUsuario();
	}

	@Então("^altero os dados com sucesso$")
	public void altero_os_dados_com_sucesso() throws Throwable {
		UsuariosPage usuarioPage = new UsuariosPage(Hooks.getDriver());
		usuarioPage.clicarBtnEditar();
	}
	
	@Dado("^seleciono o usuário para deletar$")
	public void seleciono_o_usuário_para_deletar() throws Throwable {
		UsuariosPage usuarioPage = new UsuariosPage(Hooks.getDriver());
		usuarioPage.deletarUsuario();
	}

	@Então("^deleto o usuário com sucesso$")
	public void deleto_o_usuário_com_sucesso() throws Throwable {
		Actions builder = new Actions(driver);
		builder.sendKeys(Keys.ENTER);

	}
	
}
