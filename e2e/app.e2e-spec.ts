import { Ng2CarouselPage } from './app.po';

describe('ng2-carousel App', function() {
  let page: Ng2CarouselPage;

  beforeEach(() => {
    page = new Ng2CarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
