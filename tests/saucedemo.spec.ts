import { test, expect} from '@playwright/test'

test('Comprar un item', async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page.getByText('LOGIN').click();
    await page.pause();
})