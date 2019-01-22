import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { CountryService } from '../app/shared/country.service';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        SearchFormComponent,
        SearchResultsComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        CountryService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const appComp = TestBed.createComponent(AppComponent);
    const app = appComp.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be create search input box', () => {
    const searchComp = TestBed.createComponent(SearchComponent);
    const search = searchComp.debugElement.nativeElement;
    expect(search.querySelector('input.search')).toBeTruthy();
  });

  it('should be create result div', () => {
    const searchComp = TestBed.createComponent(SearchComponent);
    const search = searchComp.debugElement.nativeElement;
    expect(search.querySelector('div.result')).toBeTruthy();
  });

  // it(`should have as title 'exercise'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('exercise');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to exercise!');
  // }));
});
