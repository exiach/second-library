import { SecondLibraryPage } from './app.po';

describe('second-library App', function() {
  let page: SecondLibraryPage;

  beforeEach(() => {
    page = new SecondLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
