import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadCrumbs.css'
import { NavLink } from "react-router";

function BreadCrumbs () {
    return (
     <Breadcrumb>
     {/*BugFIX: Bootstrap skickar vidare props (linkProps) till navlink  (linkAs), för att bootstrap inte ska rendera sin egen <a> utan renderar en NavLink istället*/}
        {/*end gör så att det matchar exakt på "/" och inte förvirras med de andra path ex: /gallery.*/}
        <Breadcrumb.Item 
            linkAs={NavLink}
            linkProps={{to: "/", end:true}}
        >
            Start
        </Breadcrumb.Item>
        <Breadcrumb.Item
            linkAs={NavLink}
            linkProps={{to: "/generator"}}
        >
            Generator
        </Breadcrumb.Item>
        <Breadcrumb.Item
            linkAs={NavLink}
            linkProps={{to: "/gallery"}}
        >
            Gallery        
        </Breadcrumb.Item>
        <Breadcrumb.Item
            linkAs={NavLink}
            linkProps={{to: "/about-us"}}
        >
            About us
        </Breadcrumb.Item>
     </Breadcrumb>        
    )
}

export default BreadCrumbs;