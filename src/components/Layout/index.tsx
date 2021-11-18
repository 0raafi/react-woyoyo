import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

export default function Layout({ route }: any) {
    return (
        <div>
            <Link to="/one">One</Link>
            <Link to="/two">two</Link>
            {renderRoutes(route.routes)}
        </div>
    )
}
