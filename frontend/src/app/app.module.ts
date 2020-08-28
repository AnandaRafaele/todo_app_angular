import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NG-ZOHO
import { NzIconModule, NzButtonModule, NzModalModule, NzLayoutModule, NzCollapseModule, NzNotificationModule} from 'ng-zorro-antd';


import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './components/views/task-create/task-create.component';
import { TaskListComponent } from './components/views/task-list/task-list.component';
import { TaskUpdateComponent } from './components/views/task-update/task-update.component';
import { TaskDeleteComponent } from './components/views/task-delete/task-delete.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskListComponent,
    TaskUpdateComponent,
    TaskDeleteComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzLayoutModule,
    NzCollapseModule,
    NzNotificationModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
