package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class LoginPage extends MetodosUteis {

	protected WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	@FindBy(how = How.CSS, using = "div:nth-child(1) > input")
	private WebElement usuario;

	@FindBy(how = How.CSS, using = "div:nth-child(2) > input")
	private WebElement senha;

	@FindBy(how = How.CSS, using = "div:nth-child(3) > button")
	private WebElement btnLogin;

	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);

	}

	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
	}

	public void clicarBotaoLogin() {
		esperarElemento(btnLogin);
		btnLogin.click();
	}

}
