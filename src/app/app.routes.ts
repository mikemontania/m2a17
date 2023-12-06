import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/dashboard/dashboard.component").then(
        m => m.DashboardComponent
      )
  },
  {
    path: "user",
    loadComponent: () =>
      import("./pages/user/user.component").then(
        m => m.UserComponent)
  },
  {
    path: "settings",
    loadComponent: () =>
      import("./pages/settings/settings.component").then(
        m => m.SettingsComponent
      )
  }
];
