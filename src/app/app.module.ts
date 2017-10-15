import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LiquidityComponent } from './liquidity/liquidity.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsHeaderComponent } from './settings/settings-header/settings-header.component';
import { IncomeListComponent } from './liquidity/income-list/income-list.component';
import { SpendingListComponent } from './liquidity/spending-list/spending-list.component';
import { LiquiditySettingsComponent } from './settings/liquidity-settings/liquidity-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LiquidityComponent,
    SettingsComponent,
    SettingsHeaderComponent,
    IncomeListComponent,
    SpendingListComponent,
    LiquiditySettingsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MultiselectDropdownModule,
    BrowserAnimationsModule,
    HttpModule,

  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
