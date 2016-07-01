import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HeadComponent } from './templateComponent/head.component';
import { addArticle } from './templateComponent/addArticle.component';

import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
bootstrap(HeadComponent);
bootstrap(addArticle);
