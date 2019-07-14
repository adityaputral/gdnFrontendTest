import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HighlightMenuComponent } from './highlight-menu/highlight-menu.component';
import { BannersComponent } from './banners/banners.component';
import { BannerService } from './banner.service';
import { HighlightMenuService } from './highlight-menu.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    HighlightMenuComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [BannerService, HighlightMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
