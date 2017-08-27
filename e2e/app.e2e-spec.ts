import { LoginGooglePage } from './app.po';

describe('login-google App', () => {
  let page: LoginGooglePage;

  beforeEach(() => {
    page = new LoginGooglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
