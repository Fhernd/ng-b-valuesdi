import { NgBValuediPage } from './app.po';

describe('ng-b-valuedi App', function() {
  let page: NgBValuediPage;

  beforeEach(() => {
    page = new NgBValuediPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
