import { Route } from '@angular/router';
import { Home, LegoSetOverview } from '@swe-demo/swe-demo-app-feature';

export const appRoutes: Route[] = [
    { path: "", component: Home },
    { path: "products", component: LegoSetOverview },
    { path: "account", component: Home },
];
