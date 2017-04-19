import { MARK5UIPage } from './app.po';

describe('mark5-ui App', () => {
  let page: MARK5UIPage;

  beforeEach(() => {
    page = new MARK5UIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
