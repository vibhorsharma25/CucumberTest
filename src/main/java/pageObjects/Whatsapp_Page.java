package pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Whatsapp_Page extends BasePage{

	public @FindBy(xpath = "//input[@name='first_name']") WebElement textfield_FirstName;
	
	public Whatsapp_Page() throws IOException {
		super();
		// TODO Auto-generated constructor stub
	}
}
