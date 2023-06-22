import React, {useState, useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';
const MainPage = () => {
   const contentRef = useRef(null);
   const windowHeight = window.innerHeight;
 
   useEffect(() => {
     let isScrolling = false;
     window.scrollTo({top: windowHeight});
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
         }, 500);
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
      title: 'Lorem lorem',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, tempora quae est repudiandae totam nam sunt omnis doloribus sapiente voluptatem aliquam necessitatibus quidem qui? Ab debitis sequi repellendus error enim dolorem eveniet aut minus, vero a? Mollitia ea qui aut eius, maiores deserunt in quos, eveniet et ratione doloribus hic molestias a.',
      link:'',
      icon: './user.png'
    },
    {
      title: 'TwoHandStudio',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, tempora quae est repudiandae totam nam sunt omnis doloribus sapiente voluptatem aliquam necessitatibus quidem qui? Ab debitis sequi repellendus error enim dolorem eveniet aut minus, vero a?',
      icon: './home.png'
    },
      {
        title: 'lorem',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, tempora quae est repudiandae totam nam sunt omnis doloribus sapiente voluptatem aliquam necessitatibus quidem qui? Ab debitis sequi repellendus error enim dolorem eveniet aut minus, vero a? Mollitia ea qui aut eius, maiores deserunt in quos, eveniet et ratione doloribus hic molestias a. Officia possimus incidunt fugit provident excepturi nam tempora ut ducimus alias illum quas ratione sit recusandae voluptates cupiditate hic architecto officiis deleniti aspernatur, et unde nihil. Totam ab eos distinctio minus natus expedita, facilis alias ut ducimus consequuntur dignissimos dolore. Autem aut fuga quia officia, est rerum quo?',
        link:'gamedev',
        icon: ''
      },
      {
        title: 'Lorem',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, tempora quae est repudiandae totam nam sunt omnis doloribus sapiente voluptatem aliquam necessitatibus quidem qui? Ab debitis sequi repellendus error enim dolorem eveniet aut minus, vero a? Mollitia ea qui aut eius, maiores deserunt in quos, eveniet et ratione doloribus hic molestias a. Officia possimus incidunt fugit provident excepturi nam tempora ut ducimus alias illum quas ratione sit recusandae voluptates cupiditate hic architecto officiis deleniti aspernatur, et unde nihil. Totam ab eos distinctio minus natus expedita, facilis alias ut ducimus consequuntur dignissimos dolore. Autem aut fuga quia officia, est rerum quo?',
        link:'websites',
        icon: ''
      },
      {
        title: 'Lorem',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, tempora quae est repudiandae totam nam sunt omnis doloribus sapiente voluptatem aliquam necessitatibus quidem qui? Ab debitis sequi repellendus error enim dolorem eveniet aut minus, vero a? Mollitia ea qui aut eius, maiores deserunt in quos, eveniet et ratione doloribus hic molestias a. Officia possimus incidunt fugit provident excepturi nam tempora ut ducimus alias illum quas ratione sit recusandae voluptates cupiditate hic architecto officiis deleniti aspernatur, et unde nihil. Totam ab eos distinctio minus natus expedita, facilis alias ut ducimus consequuntur dignissimos dolore. Autem aut fuga quia officia, est rerum quo?',
        link:'software',
        icon: ''
      }
   ];
   return (
      <>
      <main className='mainPageWrapper' ref={contentRef}>
        <section className='userInfoWrapper'>
        <div className='userInfo'>
          <article className='userInfoarticle'>
            <span className='usrTitle'>{sections[0].title}</span>
            <p className='usrDesc'>{sections[0].desc}</p>
          </article>
        </div>
        </section>
         <section className='mpTopSectionWrap'>
            <div className='mainPageBgWrapper'>
            <div className='mpBG'></div>
              <div className='mianPageBg'>
                <span className='siteTitle'>{sections[1].title}</span>
                <p className='siteP'>{sections[1].desc}</p>
              </div>
            </div>
            <div className='mainPageInfoWrapper'>
               <div className='mainPageInfo'>
               <LinkElement/>
                  <div className='mpInfoEl'>Websites</div>
                  <div className='mpInfoEl'>Software</div>
               </div>
            </div>
         </section>
         <section className='mpBottomSectionWrap'>
         {sections.slice(2).map((section, i) => (
          <InfoElement
            key={`in-${i}`}
            title={section.title}
            desc={section.desc}
            link={section.link}
          />
        ))}
         </section>
      </main>
      <PageIndicator sections={sections}/>
      </>
   );
};
const LinkElement = ({img,video,link}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to='/gamedev' className='mpInfoEl'>
    <div className="element" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src="" alt="Element" className="element-image"/>
      {isHovered && (
        <div className="element-overlay">
          <video src="" alt="Video" className="element-video" loop autoPlay muted />
        </div>
      )}
    </div>
      </Link>
  );
};
const InfoElement = ({title,desc,link})=>{
  return(
    <div className='mpBottomElWrap'>
    <div className='mpBottomEl'>
      <div className='mpBottomElInfo'>
        <span className='infoTitle'>{title}</span>
        <p className='infoDesc'>{desc}</p>
        {(link&&<Link to={`/${link}`}>Read more</Link>)}
      </div>
      <aside className='mpBottomAside'>
        <div className='mpBottomSlider'>
          <div className='mpBSlider'>

          </div>
          <div className='mpBMenu'>
            <div className='mpBMenuEl'></div>
          </div>
        </div>
        <div className='mpBottomAdnotation'>
          <p className='adnotation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex soluta dolores ipsum hic temporibus eligendi, aperiam debitis quod eius reiciendis dicta! Quasi impedit odit rem ab fugiat cumque et, maiores dolor doloremque culpa? Excepturi minima voluptate totam a repellendus?</p>
        </div>
      </aside>
    </div>
  </div>
  )
}
const PageIndicator = ({ sections }) => {
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
      {sections.map((section, i) => (
        <div
          key={i}
          className={`pageIndicatorEl ${currentPage === i ? 'active' : ''}`}
        >
          {section.icon ? <img src={section.icon} alt="Ikona" /> : <span className='indic'></span>}
        </div>
      ))}
    </div>
  );
};

export default MainPage;