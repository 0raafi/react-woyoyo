import { renderRoutes } from 'react-router-config';

export default function Layout({ route }: any) {
  return <div>
    {renderRoutes(route.routes)}
  </div>
}
