import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {
  MatDialogModule,
  MatIconModule,
  MatExpansionModule
} from '@angular/material';

import {
  CommonInterceptorProvider,
  ErrorInterceptorProvider
} from './interceptors';
import { AppReducer } from './store/reducers/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataviewerComponent } from './components/dataviewer/dataviewer.component';
import { UserComponent } from './components/user/user.component';
import { ResouceComponent } from './components/resouce/resouce.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageComponent } from './dialogs/message/message.component';
import { FooterComponent } from './components/footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffects } from './store/effects/common.effects';
import { UserEffects } from './store/effects/user.effecte';
import { ResourceEffects } from './store/effects/resource.effects';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UserListComponent } from './components/dataviewer/user-list/user-list.component';
import { ResourceListComponent } from './components/dataviewer/resource-list/resource-list.component';

export const DIALOGS = [
  MessageComponent
];

@NgModule({
  declarations: [
    ...DIALOGS,
    AppComponent,
    DataviewerComponent,
    UserComponent,
    ResouceComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    UserListComponent,
    ResourceListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([CommonEffects, UserEffects, ResourceEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Redux demo project'
    })
  ],
  providers: [
    CommonInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: DIALOGS
})
export class AppModule { }
