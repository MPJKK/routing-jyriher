import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {FormsModule} from '@angular/forms';
import {DigitransitService} from './services/digitransit.service';
import {HttpClientModule} from '@angular/common/http';

import {AgmCoreModule} from '@agm/core';
import {RouteDirectionPipe} from './pipes/route-direction.pipe';
import {PiippuPipe} from './pipes/piippu.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatTabsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        RouteDirectionPipe,
        PiippuPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatTabsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAu3W1Y9pyivXBeD6ridExvFIYlDvq8qTk'
        }), MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule

    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
