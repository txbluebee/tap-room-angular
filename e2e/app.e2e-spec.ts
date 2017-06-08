import { TapRoomAngularPage } from './app.po';

describe('tap-room-angular App', () => {
  let page: TapRoomAngularPage;

  beforeEach(() => {
    page = new TapRoomAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
