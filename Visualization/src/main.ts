/*!

=========================================================
* Paper Dashboard Angular - v2.0.0
=========================================================

* Product Page: http://www.trustsaavit.com/product/paper-dashboard-angular
* Copyright 2019 Trust Saavit (http://www.trustsaavit.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Trust Saavit

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
