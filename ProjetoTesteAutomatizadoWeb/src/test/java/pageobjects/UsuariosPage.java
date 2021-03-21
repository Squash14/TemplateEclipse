package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class UsuariosPage extends MetodosUteis {

	public UsuariosPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
//	Campos de cadastro
	@FindBy(how = How.CSS, using = "div:nth-child(3) > a")
	private WebElement btnCadastreSe;

	@FindBy(how = How.CSS, using = "form > div:nth-child(1) > input")
	private WebElement campoNome;

	@FindBy(how = How.CSS, using = "#inline > input")
	private WebElement campoIdade;

	@FindBy(how = How.CSS, using = "body > app > div > div > div > div > ng-component > div > form > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)")
	private WebElement campoPeriodoInicio;

	@FindBy(how = How.CSS, using = "div:nth-child(2) > input:nth-child(4)")
	private WebElement campoPeriodoFinalizacao;

	@FindBy(how = How.CSS, using = "div:nth-child(2) > div:nth-child(3) > input")
	private WebElement campoTelefone;

	@FindBy(how = How.ID, using = "sexo")
	private WebElement campoSexo;

	@FindBy(how = How.CSS, using = "#email > input")
	private WebElement campoEmail;

	@FindBy(how = How.CSS, using = "div:nth-child(5) > input:nth-child(3)")
	private WebElement campoAtuaTISim;

	@FindBy(how = How.CSS, using = "div:nth-child(5) > input:nth-child(6)")
	private WebElement campoAtuaTINao;

	@FindBy(how = How.CSS, using = "div:nth-child(6) > input")
	private WebElement campoUsuario;

	@FindBy(how = How.CSS, using = "div:nth-child(7) > input")
	private WebElement campoSenha;

	@FindBy(how = How.CSS, using = "div:nth-child(8) > button")
	private WebElement btnRegistrarForm;

	@FindBy(how = How.CSS, using = "div:nth-child(8) > a")
	private WebElement btnCancelarForm;
	
	@FindBy(how = How.CSS, using = "ng-component > div > h2")
	private WebElement txtListaUsuario;
	
	@FindBy(how = How.CSS, using = "a:nth-child(2)")
	private WebElement menuUsuario;
	
	@FindBy(how = How.CSS, using = "tr")
	private WebElement listaUsuarios;
	
	@FindBy(how = How.CSS, using = "tr:last-of-type .btn.btn-success")
	private WebElement selecionarUsuario;
	
	@FindBy(how = How.CSS, using = ".btn.btn-primary")
	private WebElement btnEditar;
	
	@FindBy(how = How.CSS, using = "tr:last-of-type .btn.btn-danger")
	private WebElement btnDeletar;
	
	public void clicarBotaoCadastreSe() {
		esperarElemento(btnCadastreSe);
		btnCadastreSe.click();
	}

	public void preencherNomeForm(String nome) {
		esperarElemento(campoNome);
		campoNome.clear();
		campoNome.sendKeys(nome);
	}

	public void preencherIdadeForm(String idade) {
		esperarElemento(campoIdade);
		campoIdade.clear();
		campoIdade.sendKeys(idade);
	}

	public void preencherPeriodoInicioForm(String pInicio) {
		esperarElemento(campoPeriodoInicio);
		campoPeriodoInicio.clear();
		campoPeriodoInicio.sendKeys(pInicio);
	}

	public void preencherPeriodoFinalizacaoForm(String pFinalizacao) {
		esperarElemento(campoPeriodoFinalizacao);
		campoPeriodoFinalizacao.clear();
		campoPeriodoFinalizacao.sendKeys(pFinalizacao);
	}

	public void preencherTelefoneForm(String telefone) {
		esperarElemento(campoTelefone);
		campoTelefone.clear();
		campoTelefone.sendKeys(telefone);
	}

	public void preencherSexoForm(String sexo) {
		esperarElemento(campoSexo);
		selecionar(campoSexo, sexo);

	}

	public void preencherEmailForm(String email) {
		esperarElemento(campoEmail);
		campoEmail.clear();
		campoEmail.sendKeys(email);
	}

	public void preencherVoceAtuaTISim() {
		esperarElemento(campoAtuaTISim);
		campoAtuaTISim.click();

	}

	public void preencherVoceAtuaTINao(String atuaTI) {
		esperarElemento(campoAtuaTINao);
		campoAtuaTINao.click();

	}

	public void preencherUsuario(String usuarioForm) {
		esperarElemento(campoUsuario);
		campoUsuario.clear();
		campoUsuario.sendKeys(usuarioForm);
	}

	public void preencherSenha(String senhaForm) {
		esperarElemento(campoSenha);
		campoSenha.clear();
		campoSenha.sendKeys(senhaForm);
	}

	public void clicarBotaoRagistrar() {
		esperarElemento(btnRegistrarForm);
		btnRegistrarForm.click();

	}
	
	public void clicarBotaoCancelar() {
		esperarElemento(btnRegistrarForm);
		btnCancelarForm.click();

	}
	
//	public void clicarBotaoCadastreSe() {
//		esperarElemento(txtListaUsuario);
//		assertTrue(txtListaUsuario.isEnabled());
//	}
	
	public void clicarMenuUsuario() {
		esperarElemento(menuUsuario);
		menuUsuario.click();
	}
	
	public void visualizoListaUsuarios() {
		esperarElemento(listaUsuarios);
		assertTrue(listaUsuarios.isEnabled());
	}
	
	public void alteroUsuario() {
		esperarElemento(selecionarUsuario);
		selecionarUsuario.click();
	}
	
	public void clicarBtnEditar() {
		esperarElemento(btnEditar);
		btnEditar.click();
	}
	
	public void deletarUsuario() {
		esperarElemento(btnDeletar);
		btnDeletar.click();
	}
}
