import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "src/app/Components/profile/profile.component";
import { NewsComponent } from "src/app/Components/news/news.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "", component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
