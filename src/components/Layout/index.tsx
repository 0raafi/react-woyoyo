import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

export default function Layout({ route }: any) {
  return <div>{process.env.MODE || '--'}</div>;
}
