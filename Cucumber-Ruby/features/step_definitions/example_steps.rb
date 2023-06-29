require 'selenium-webdriver'


Given("I am on the website 'https://www.bstackdemo.com'")do
    driver = Selenium::WebDriver.for :chrome
    driver.navigate.to 'https://www.bstackdemo.com'
end

Then("the BrowserStack Demo header should be displayed")do
    header_text = driver.find_element(:id, 'orders').header_text
    expect('Orders').to eq(header_text)
end
