import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumbs () {
    return (
     <Breadcrumb>
     <Breadcrumb.Item href="/">
         Start
     </Breadcrumb.Item>
     <Breadcrumb.Item href="/generator">
         Generator
     </Breadcrumb.Item>
     <Breadcrumb.Item href="/gallery">
         Gallery
     </Breadcrumb.Item>
     <Breadcrumb.Item href="/about-us">
         About Us
     </Breadcrumb.Item>
     </Breadcrumb>        
    )
}

export default BreadCrumbs;