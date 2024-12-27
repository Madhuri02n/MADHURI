open cmd
run the following to create a folder
>mkdir hello-selenium
>cd hello-selenium

initialize node project
>npm init -y

install selenium-webdriver package
>npm install selenium-webdriver

create index.js file
add the following code in index.js



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
