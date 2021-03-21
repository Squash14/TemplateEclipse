package pageobjects;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class MensagemPage extends MetodosUteis {
	protected WebDriver driver;

	public MensagemPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(how = How.CSS, using = ".invalid-feedback")
	private WebElement msgCampoObrigatorio;
	
	@FindBy(how = How.CSS, using = ".alert.alert-danger")
	private WebElement msgTxt;
	
	public void visualizaMensagem(String mensagem) {
		esperarElemento(msgCampoObrigatorio);
		assertEquals(mensagem, msgCampoObrigatorio.getText());
	}
	
	public void visualizaoMsgTxt(String mensagem) {
		esperarElemento(msgTxt);
		assertEquals(mensagem, msgTxt.getText());
	}
}
