import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { CustomComponent } from './custom/custom.component';
import { CustomService } from './custom/custom.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CustomService
  ],
  // bootstrap: [AppComponent],
  entryComponents: [
    CustomComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customComponent = createCustomElement(CustomComponent, { injector });
    customElements.define('custom-component', customComponent);
  }

  ngDoBootstrap() {}

}
