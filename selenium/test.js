const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
    // Open Chrome
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Go to your local hospital app
        await driver.get('http://localhost:3000');

        // Wait for the page to load, then find the Name input box and type
        await driver.findElement(By.id('name')).sendKeys('Test Patient');
        await driver.findElement(By.id('age')).sendKeys('45');
        await driver.findElement(By.id('dept')).sendKeys('Neurology');

        // Click the Save button (assuming button has id='save-btn')
        await driver.findElement(By.id('save-btn')).click();

        console.log("Test Passed: Form submitted automatically.");
    } finally {
        // Close the browser after 5 seconds
        setTimeout(() => driver.quit(), 5000);
    }
}
runTest();