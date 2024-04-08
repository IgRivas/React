// @ts-check
import { test, expect } from '@playwright/test';

const url = 'http://localhost:5173'

test('has title', async ({ page }) => {
  await page.goto(url);

  //page.$('#') is the same as document.querySelector() and return 
const cityname = await page.$('#cityName');

const imgweather = await page.$('#imgWeather');
cityname?.textContent;

//textContent() is the same as innerText
const nameText = await cityname?.textContent();

await expect(nameText?.length).toBeGreaterThan(0);

await expect(imgweather).not.toBeNull();

});
