import {createHashRouter} from "react-router-dom";
import {Home, About, Map, Services, ListOfItems, NewFacility, Help, Events} from "./LazyImports";


const routes = createHashRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/map',
            element: <Map/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/list',
            element: <ListOfItems/>
        },
        {
            path: '/newfacility',
            element: <NewFacility/>
        },
        {
            path: '/events',
            element: <Events/>
        },
        {
            path: '/help',
            element: <Help/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)


export default routes;