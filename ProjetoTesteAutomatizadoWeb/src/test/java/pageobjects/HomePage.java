package pageobjects;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class HomePage extends MetodosUteis {

	protected WebDriver driver;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(how = How.CSS, using = "ol > li")
	private WebElement tituloHome;
	
	public void txtHome() {
		esperarElemento(tituloHome);
		assertEquals("Gráfico de infecção Covid-19 no DF", tituloHome.getText());
	}	
}