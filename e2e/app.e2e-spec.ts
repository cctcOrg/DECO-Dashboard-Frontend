import { ForensicDashboardPage } from './app.po';

describe('forensic-dashboard App', () => {
  let page: ForensicDashboardPage;

  beforeEach(() => {
    page = new ForensicDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
