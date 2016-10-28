import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

setTimeout(()=>{
  enableProdMode();
  platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
},5000);
