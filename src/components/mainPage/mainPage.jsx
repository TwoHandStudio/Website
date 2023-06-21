import React, {useState, useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
   const contentRef = useRef(null);
   const windowHeight = window.innerHeight;
 
   useEffect(() => {
     let isScrolling = false;
 
     const handleWheel = (event) => {
       event.preventDefault();
       const deltaY = event.deltaY;
 
       if (!isScrolling) {
         isScrolling = true;
 
         if (deltaY > 0) {
           window.scrollTo({
             top: window.scrollY + windowHeight,
             behavior: 'smooth',
           });
         } else if (deltaY < 0) {
           window.scrollTo({
             top: window.scrollY - windowHeight,
             behavior: 'smooth',
           });
         }
 
         setTimeout(() => {
           isScrolling = false;
         }, 500); // Ustaw odpowiedni czas trwania animacji
       }
     };
 
     contentRef.current.addEventListener('wheel', handleWheel);
 
     return () => {
       // eslint-disable-next-line react-hooks/exhaustive-deps
       contentRef.current.removeEventListener('wheel', handleWheel);
     };
   }, [windowHeight]);
   const sections = [
      {
        title: 'Home',
      },
      {
        title: 'GameDev',
      },
      {
        title: 'Websites',
      },
      {
        title: 'Software',
      }
   ];
   return (
      <>
      <div className='mainPageWrapper' ref={contentRef}>
         <div className='mpTopSectionWrap'>
            <div className='mainPageBgWrapper'></div>
            <div className='mainPageInfoWrapper'>
               <div className='mainPageInfo'>
                  <Link to='/gameDev' className='mpInfoEl'></Link>
                  <div className='mpInfoEl'>Websites</div>
                  <div className='mpInfoEl'>Software</div>
               </div>
            </div>
         </div>
         <div className='mpBottomSectionWrap'>
            <div className='mpBottomEl'>
              <div className=''>

              </div>
            </div>
            <div className='mpBottomEl'>websites</div>
            <div className='mpBottomEl'>Software</div>
         </div>
      </div>
      <PageIndicator sections={sections}/>
      </>
   );
};
const PageIndicator=({sections})=>{
   const [currentPage, setCurrentPage] = useState(0);

   useEffect(() => {
     const handleScroll = () => {
       const pageHeight = window.innerHeight;
       const scrollTop = window.scrollY;
 
       const currentPageIndex = Math.floor(scrollTop / pageHeight);
       setCurrentPage(currentPageIndex);
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 
   return (
      <div className="pageIndicatorWrap">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`pageIndicatorEl ${currentPage === index ? 'active' : ''}`}
        ></div>
      ))}
    </div>
   );
 };
export default MainPage;