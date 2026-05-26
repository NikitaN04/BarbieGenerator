import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadCrumbs.css'
import { NavLink } from "react-router";

function BreadCrumbs () {
    return (
     <Breadcrumb>
        <Breadcrumb.Item>
            {/*end gör så att det matchar exakt på "/" och inte förvirras med de andra path ex: /gallery. */}
            <NavLink to="/" end>Start</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <NavLink to="/generator">Generator</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <NavLink to="/gallery">Gallery</NavLink>            
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <NavLink to="/about-us">About us</NavLink> 
        </Breadcrumb.Item>
     </Breadcrumb>        
    )
}

export default BreadCrumbs;