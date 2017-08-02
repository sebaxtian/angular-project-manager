import { ProjectManagerPage } from './app.po';

describe('project-manager App', () => {
  let page: ProjectManagerPage;

  beforeEach(() => {
    page = new ProjectManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
