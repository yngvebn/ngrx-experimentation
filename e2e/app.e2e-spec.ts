import { NgrxExperimentationPage } from './app.po';

describe('ngrx-experimentation App', () => {
  let page: NgrxExperimentationPage;

  beforeEach(() => {
    page = new NgrxExperimentationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
