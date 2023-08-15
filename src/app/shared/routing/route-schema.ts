import { CustomRoute } from './route';
import { ROUTES_CONFIG } from './routes.config';

export const AppRoutes = CustomRoute.lazyModuleRoute(ROUTES_CONFIG);
