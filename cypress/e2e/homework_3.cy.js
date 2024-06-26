import { Login } from '../pages/Login';
import { HomePage } from '../pages/HomePage';

const loginPage = new Login();
const homePage = new HomePage();

describe('Praca domowa Modul 3', () => {
    it('Test 1: Wpisz email user888@gmail.com i haslo 1234567890', () => {
        loginPage.visit();
        loginPage.login("user888@gmail.com", "1234567890");
        homePage.logout();
    });
    it('Test 2: Wpisz email testowyqa@qa.team i haslo QA!automation-1', () => {
        loginPage.visit();
        loginPage.login("testowyqa@qa.team", "QA!automation-1");
        homePage.logout();
    });
});