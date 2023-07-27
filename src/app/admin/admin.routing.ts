import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RequestComponent } from "./request/request.component";
import { ApprovalComponent } from "./approval/approval.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes =[

  {
    path:'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'home',
        title: 'Home',
        component: HomeComponent
      },
      {
        path : 'make_request',
        title: 'Request',
        component : RequestComponent
      },
      {
        path : 'approve_request',
        title: 'Approve',
        component : ApprovalComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
