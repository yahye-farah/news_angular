import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./Components/profile/profile.component";
import { NavComponent } from "./Components/nav/nav.component";
import { NewsComponent } from "./Components/news/news.component";

@NgModule({
  declarations: [AppComponent, ProfileComponent, NavComponent, NewsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
