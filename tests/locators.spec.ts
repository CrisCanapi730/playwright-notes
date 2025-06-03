import { test, expect } from '@playwright/test';

// Xpath
// elemento, propiedad y value:elemento[@property='value'] -> de un elemento html
// ejemplo: //input[@type='text']
// ejemplo: //input[@id='name']
// ejemplo: //input[@class='form']
// aboslute path: /html/head/body/div/input -> si se modifica la estructura no es recomendable
// relative path: //input
// Shorcuts:
// ejemplo: //input[@type='text']
// ejemplo: //input[@id='name']
// ejemplo: //input[@class='form']
// con shortcut: input.form(by class)
// con shortcut: input#name(by id)

// css selector
// absolute path: body > div > input
// relative path: input

// Hay otros SELECTORES como por PLACEHOLDER, ALT, ROL

// Encontramos al elemento por placeholder
test('por placeholder', async({page}) =>{
    await page.goto('https://www.amazon.es/');
    await page.getByPlaceholder('Buscar en Amazon.es').fill('Iphone');
    await page.keyboard.press('Enter');
    await page.pause();
}) 

test('Por el Alt y Rol', async({page})=>{
    await page.goto('https://www.fitnessclubpass.com/');
    await page.getByRole('link', {name: 'Membresias'}).click();
    await expect(page).toHaveTitle(/Membresías/)
    await page.getByAltText('Logo').first().click()
    await expect(page).toHaveTitle(/Fitness Club Pass/);
    await page.pause();
})