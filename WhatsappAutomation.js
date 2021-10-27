//Made By Tapish Rawat
// npm install puppeteer
// node WhatsappAutomation.js 

let puppeteer = require("puppeteer");

async function scrape(url){
    //browser open krne ke liye!
    let browser = await puppeteer.launch({ headless: false });
    //page open krne ke liye!
    let page = await browser.newPage();
    //url pe janne ke liye
    await page.goto(url);
    //wait for the page to load
    await page.waitForSelector("span [title='Tarun Clg']");
    //humey jispe click krna h usko target me define kiye!
    let target=await page.$("span [title='Tarun Clg']");
    // fir target pe click kra!
    await target.click();
    // humey jaha msg type krna ha vo inputkabox me define kiya!
    let inputkabox=await page.$("#main > footer > div._2BU3P.tm2tP.copyable-area > div > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text");
   //loop lagake jo msg print krana hai!
    for (let i=0; i<100; i++) {
        //inputkabox me jo msg type krna ha usko mention kiya!
        await inputkabox.type("");
        // msg likhne ke baat enter lagaya... send krne ke liye!
        await page.keyboard.press("Enter");
    }
    await page.waitFor(3500);
    // browser ko close krne ke liye!
    await browser.close();
    console.log("Browser closed and Moderators has been added successfully");
}

scrape("https://web.whatsapp.com")