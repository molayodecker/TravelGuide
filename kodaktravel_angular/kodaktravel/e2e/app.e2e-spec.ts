import { KodaktravelPage } from './app.po';

describe('kodaktravel App', () => {
  let page: KodaktravelPage;

  beforeEach(() => {
    page = new KodaktravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
