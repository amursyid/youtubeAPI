import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path:"dashboard", component: DashboardComponent },

  { path: "youtube", loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: "", redirectTo: "youtube", pathMatch: "full" },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
