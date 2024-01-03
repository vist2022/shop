/**
 * @jest-environment node
 */
import {getAllCategoriesFromConfig, getRandomNumber} from "./utils/utilsFunctions";
import {addCategory, isCategoryExists, removeCategory, setProducts} from "./firebase/dbService";
import productConfig from './utils/products-config.json';

// jest.setTimeout(5);

test('is all categories exist', async () => {
    const allCategories = getAllCategoriesFromConfig(productConfig);
    const resArr = await Promise.all(allCategories.map(item => isCategoryExists(item)));
    expect(resArr.every(item => item === true)).toBeTruthy()
})

test('is random category exists', async ()=>
{
    const allCategories = getAllCategoriesFromConfig(productConfig);
    const randomCategory = allCategories[getRandomNumber(0,allCategories.length)];
    expect(await isCategoryExists(randomCategory)).toBeTruthy();
})
test('add category', async ()=>
{
    await addCategory({name:'newCat'});
    expect(await isCategoryExists('newCat')).toBeTruthy()
});
test('remove category', async ()=>
{
    await removeCategory( 'newCat');
    expect(await isCategoryExists('newCat')).toBeFalsy()
})

test('get random number', () => {
    expect(getRandomNumber(1, 1)).toEqual(1)
});

test('get random number 1', () => {
    expect(getRandomNumber(1, 10)).toBeGreaterThanOrEqual(1);
});

test('get random number 2', () => {
    expect(getRandomNumber(1, 1)).toBeLessThanOrEqual(10)
});

test('set products', async () => {
    expect(await setProducts()).toEqual(productConfig.length)
});

test('category bread exists', async () => {
    // const res = await isCategoryExists('tart')
    expect(await isCategoryExists('tart')).toBeTruthy();
});
test('category milk not exists', async () => {
    expect(await isCategoryExists('milk')).toBeFalsy();
});

