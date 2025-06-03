import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // test mediante grabacion "Record new"
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'Bolivia' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('Iphone');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'iPhone 15 256gb 6gb Ram -' }).click();
});