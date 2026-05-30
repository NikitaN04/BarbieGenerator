import CircularGallery from '../CircularGallery/CircularGallery';
import './GalleryPage.css';

function GalleryPage() {

    //tillfällig tills andra branchen är klar men bildgenerationen
    const items = [
        {
        image: '/images/test1.jpg',
        text: 'Test image 1'
        },
        {
        image: '/images/test2.jpg',
        text: 'Test image 2'
        }
    ];

    return (
      <div className="gallery-page">
        <CircularGallery
            items={items}
            bend={-1}
            borderRadius={0.1}
            scrollSpeed={1.5}
        />
      </div>
    );
  }
  
  export default GalleryPage;