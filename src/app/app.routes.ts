import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LayoutComponent,
        children: [
            {
                path:"dashboard",
                component:DashboardComponent
            },
            {
                path:"userDetails",
                component:UserDetailsComponent
            }
        ]
    }
];
