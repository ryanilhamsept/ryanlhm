import puppeteer from "puppeteer";
import { faker } from "@faker-js/faker";

const otpString = "020202"
const pinString = "112233"

const DATA = {
  audience: "virgo",
  clientId: "partner.automation.direct.regular",
  phone: "085157481339",
  otp: otpString.split(''),
  pin: pinString.split('')
};

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

//source $(brew --prefix nvm)/nvm.sh

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://mock-dev.virgoku.dev/login");

  // audience
  await page.type(
    "#root > div > div > div > div:nth-child(1) > input",
    DATA.audience
  );

  // fullname
  await page.type(
    "#root > div > div > div > div:nth-child(2) > input",
    faker.person.fullName()
  );

  //   client id
  await page.type(
    "#root > div > div > div > div:nth-child(4) > input",
    DATA.clientId
  );

  //   external UID
  await page.type(
    "#root > div > div > div > div:nth-child(5) > input",
    faker.person.firstName('male')
  );

  // phone
  await page.type(
    "#root > div > div > div > div:nth-child(7) > input",
    DATA.phone
  );

  const btn =
    "#root > div > div > div:nth-child(2) > div:nth-child(2) > a > button";
  await page.waitForSelector(btn);
  await page.click(btn);

  //   ----------------

  // await delay(2000);

  //   ----------------

  const otp1 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(1)";
  await page.waitForSelector(otp1);
  await page.click(otp1);
  await page.type(otp1, DATA.otp[0].toString());

  const otp2 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(2)";
  await page.waitForSelector(otp2);
  await page.click(otp2);
  await page.type(otp2, DATA.otp[1].toString());

  const otp3 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(3)";
  await page.waitForSelector(otp3);
  await page.click(otp3);
  await page.type(otp3, DATA.otp[2].toString());

  const otp4 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(4)";
  await page.waitForSelector(otp4);
  await page.click(otp4);
  await page.type(otp4, DATA.otp[3].toString());

  const otp5 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(5)";
  await page.waitForSelector(otp5);
  await page.click(otp5);
  await page.type(otp5, DATA.otp[4].toString());

  const otp6 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(6)";
  await page.waitForSelector(otp6);
  await page.click(otp6);
  await page.type(otp6, DATA.otp[5].toString());

   //   ----------------

  await delay(2000);

  //   ----------------

  const pc1 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(1)";
  await page.waitForSelector(pc1);
  await page.click(pc1);
  await page.type(pc1, DATA.pin[0].toString());
  const pc2 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(2)";
  await page.waitForSelector(pc2);
  await page.click(pc2);
  await page.type(pc2, DATA.pin[1].toString());
  const pc3 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(3)";
  await page.waitForSelector(pc3);
  await page.click(pc3);
  await page.type(pc3, DATA.pin[2].toString());
  const pc4 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(4)";
  await page.waitForSelector(pc4);
  await page.click(pc4);
  await page.type(pc4, DATA.pin[3].toString());
  const pc5 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(5)";
  await page.waitForSelector(pc5);
  await page.click(pc5);
  await page.type(pc5, DATA.pin[4].toString());
  const pc6 =
    "#__next > div > div > div > div > div.css-1fbdc82 > div > div > div:nth-child(6)";
  await page.waitForSelector(pc6);
  await page.click(pc6);
  await page.type(pc6, DATA.pin[5].toString());

  const btnIzin = "button:nth-child(2)";
  await page.waitForSelector(btnIzin);
  await page.click(btnIzin);


  const btnHome = "#root > div > a";
  await page.waitForSelector(btnHome);
  await page.click(btnHome);

  await page.waitForSelector("#token-exchange_code");

  const code = await page.evaluate(()=>{
    return document.getElementById('token-exchange_code').getAttribute('value')
  })

  console.log("code: ",code);

  await browser.close();
})();
