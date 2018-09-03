import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatSidenavContainer } from '@angular/material';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { NgOption } from '@ng-select/ng-select';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

	param = {value: 'world'};
	languages: NgOption = [];
	selectedLanguage: string = "";

	@ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

	ngAfterViewInit() {
    //this.sidenavContainer.scrollable.elementScrolled().subscribe(() => console.log('scrolled'));
}

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
.pipe(
	map(result => result.matches)
	);

constructor(private breakpointObserver: BreakpointObserver, 
	private translate: TranslateService) {
	// this language will be used as a fallback when a translation isn't found in the current language
	//translate.setDefaultLang('de');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      //translate.use('de');
      translate.addLangs(["en", "fr", "de"]);
      translate.setDefaultLang('en');
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');

      this.languages = [
      {
      	title: "French",
      	flag: "flag-icon flag-icon-fr",
      	unicode: "fr"
      },
      {
      	title: "German",
      	flag: "flag-icon flag-icon-de",
      	unicode: "de"
      },
      {
      	title: "English",
      	flag: "flag-icon flag-icon-gb",
      	unicode: "en"
      }
      ];
      //translate.currentLang
      this.selectedLanguage = browserLang.match(/en|fr|de/) ? browserLang : 'en';
  }

  onSelectedLanguageChange($event) {
  	//this.events.push({name: '(change)', value: $event});
  	//console.log($event);
  	this.translate.use($event.unicode);
  }

}
