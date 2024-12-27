const { Builder, By, Key, until } = require('selenium-webdriver');


(async () => {
    const driver = await new Builder()
        .forBrowser('firefox')
        .build();

    try {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('MADHURI', Key.RETURN);
        await driver.wait(until.titleContains('MADHURI'),500000 );
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
      //  await driver.quit();
    }
})();