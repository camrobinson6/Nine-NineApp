const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

beforeAll(async () => {
    await driver.get("http://localhost:4000/")
})

afterAll(async() => {
    await driver.quit()
})

describe("Nine-Nine app functionality", () => {
    
    it("Check to see if Ocean tab works", async () => {
        let oceanTab = await driver.findElement(By.xpath('//*[@id="7"]'))
        await oceanTab.click()
        await driver.sleep(52000)
    
    })
    it("Check to see if Hood tab works", async () => {
        let hoodTab = await driver.findElement(By.xpath('//*[@id="8"]'))
        await hoodTab.click()
        await driver.sleep(2000)
    })
    it("Check the Get All Characters", async () => {
        let getAll = await driver.findElement(By.xpath('//*[@id="all"]'))
        await getAll.click()
        await driver.sleep(2000)
    })
    it("Get characters age", async () => {
        let age = await driver.findElement(By.xpath('//*[@id="age-input"]'))
        await age.click()
        await age.sendKeys('22')
        await driver.sleep(2000)
    })
    it("Create a New Character", async () => {
        let firstName = await driver.findElement(By.xpath('//*[@id="first"]'))
        await firstName.click()
        await firstName.sendKeys('Namor')
        await driver.sleep(2000)

        let lastName = await driver.findElement(By.xpath('//*[@id="last"]'))
        await lastName.click()
        await lastName.sendKeys('Black')
        await driver.sleep(2000)

        let gender = await driver.findElement(By.xpath('//*[@id="create-form"]/select/option[2]'))
        await gender.click()
        await driver.sleep(2000)

        let newAge = await driver.findElement(By.xpath('//*[@id="age"]'))
        await newAge.click()
        await newAge.sendKeys('43')
        await driver.sleep(2000)
    })
})
