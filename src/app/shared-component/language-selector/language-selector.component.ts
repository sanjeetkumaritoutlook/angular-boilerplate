import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { langArray, languages } from 'src/app/constants/constant';
import { SecureStorageService } from 'src/app/core/services/secure-storage.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  languages = languages;
  selectedLanguage;
  constructor(public translate: TranslateService, private secureStorage: SecureStorageService) {
    const lang = this.secureStorage.secureSessionStorage.getItem('language');
    this.selectedLanguage = lang ? lang : this.languages[0].value;
    translate.addLangs(langArray);
    translate.setDefaultLang(this.selectedLanguage);
    translate.use(this.selectedLanguage);
  }

  selectLanguage(event): void {
    this.selectedLanguage = event.value;
    this.secureStorage.secureSessionStorage.setItem('language', event.value);
    this.translate.use(this.selectedLanguage);
  }

  ngOnInit(): void {
  }

}
