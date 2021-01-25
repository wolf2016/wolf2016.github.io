const MainPage = require('../pageobjects/main.page');

describe('Test with valid arrays', () => {
    it('the array: [[1, 2, [3]], 4]', () => {
        MainPage.open();

        MainPage.enterObject('[[1, 2, [3]], 4]');
        expect(MainPage.resultDiv).toHaveTextContaining('[1,2,3,4]');
    });
    it('the array: [[0,[1,2,3],4],5,6,7,[8,[9,10,[11,12]]]]', () => {
        MainPage.enterObject('[[0,[1,2,3],4],5,6,7,[8,[9,10,[11,12]]]]');
        expect(MainPage.resultDiv).toHaveTextContaining('[0,1,2,3,4,5,6,7,8,9,10,11,12]');
    });
    it('the array: [1,2,3,4]', () => {
        MainPage.open();

        MainPage.enterObject('[1,2,3,4]');
        expect(MainPage.resultDiv).toHaveTextContaining('[1,2,3,4]');
    });
    it('the array: [0]', () => {
        MainPage.open();

        MainPage.enterObject('[0]');
        expect(MainPage.resultDiv).toHaveTextContaining('[0]');
    });
    it('the array: []', () => {
        MainPage.open();

        MainPage.enterObject('[]');
        expect(MainPage.resultDiv).toHaveTextContaining('[]');
    });
});

describe('Test with invalid objects', () => {
    it('the object: here', () => {
        MainPage.open();

        MainPage.enterObject('here');
        expect(MainPage.resultDiv).toHaveTextContaining('The object given is not an array');
    });
    it('the object: s', () => {
        MainPage.open();

        MainPage.enterObject('s');
        expect(MainPage.resultDiv).toHaveTextContaining('The object given is not an array');
    });
    it('the object: 1', () => {
        MainPage.open();

        MainPage.enterObject(1);
        expect(MainPage.resultDiv).toHaveTextContaining('The object given is not an array: 1');
    });

    it('the object: >', () => {
        MainPage.open();

        MainPage.enterObject('>');
        expect(MainPage.resultDiv).toHaveTextContaining('The object given is not an array: \">\"');
    });
});
