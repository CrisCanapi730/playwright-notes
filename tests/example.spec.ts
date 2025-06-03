import { test, expect } from '@playwright/test';

test('test 1', async ({page}) =>{
  // vamos a la pagina web que queremos probar
  await page.goto('https://www.mercadolibre.com.bo/#from=homecom');
  // encuentra el buscador mediante un localizador y lo llena con Iphone
  await page.locator('input[id=\'cb1-edit\']').fill('Iphone');
  // presiona la tecla enter
  await page.keyboard.press('Enter');
  // despues de la busqueda espera que haya una lista que sea visible
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')] ')).toBeVisible();
  await page.pause();
  // obtiene todo el texto y lo alamcena en la variable titles
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')] //li//a').allInnerTexts();
  // Escribe el numero total de titulos encontrados
  console.log(`The total number of results is: ${titles.length}`);
  // itera sobre los titulos encontrados y los muestra
  for(let title of titles){
    console.log(`The title is: ${title}`);
  }
})

