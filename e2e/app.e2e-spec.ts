import { FoodsOnlinePage } from './app.po';

describe('foods-online App', function() {
  let page: FoodsOnlinePage;

  beforeEach(() => {
    page = new FoodsOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
