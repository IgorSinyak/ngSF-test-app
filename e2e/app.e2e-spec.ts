import { NgVFTestPage } from './app.po';

describe('ng-vftest App', () => {
  let page: NgVFTestPage;

  beforeEach(() => {
    page = new NgVFTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
