import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HighlightDirective} from './directives/highlight.directive';
import {ClickCounterDirective} from './directives/click-counter.directive';

@NgModule({
    declarations: [
        AppComponent,
        HighlightDirective,
        ClickCounterDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
