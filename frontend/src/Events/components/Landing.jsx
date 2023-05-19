// import Register from './register';
import DOTS from 'vanta/dist/vanta.dots.min';
import { useEffect, useRef, useState } from 'react';

const Landing = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  const [logoPaddingTop, setLogoPaddingTop] = useState('8rem');

  useEffect(() => {
    document.getElementById('vanta-placeholder').style.display = 'none';
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      document.getElementById('vanta-placeholder').style.display = 'block';
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xd21e5,
          backgroundColor: 0xffffff,
          size: 4.0,
          showLines: false,
          //   maxDistance: mediaQuery.matches ? 12 : 20,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleZoom = () => {
    const zoom = Math.round(window.devicePixelRatio * 100);
    if (zoom > 125) {
      setLogoPaddingTop('0rem');
    } else {
      setLogoPaddingTop('1rem');
    }
  };

  useEffect(() => {
    handleZoom();
    window.addEventListener('resize', handleZoom);
  });

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen relative content">
      <div
        className="w-full flex flex-col min-h-[50vh] justify-between items-center"
        style={{ paddingTop: logoPaddingTop }}
      >
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-x-6 px-6 relative z-40  transform scale-75 sm:scale-100">
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <img
              src={props.image}
              // className="w-16 h-16 sm:w-28 sm:h-28 mx-5"
              className="w-auto h-auto mx-5"
              alt="Event"
            />
            {/* <img src="/assets/logo/SLIIT.svg" className="w-30 h-30 mr-5 mt-8" />
            <img
              src="/assets/logo/Circle.svg"
              className="w-30 h-30 mr-5 mt-8"
            />
            <img src="/assets/logo/Line.svg" className="w-30 h-30" /> */}
          </div>
          {/* <img
            src="/assets/logo/bashaway.svg"
            className="w-30 h-30 mt-3 md:mt-0"
          /> */}
          {/* <div className="w-full md:w-auto flex md:inline justify-end md:justify-start">
            <img
              src="/assets/logo/2022.svg"
              className="w-30 h-30 mt-4 md:mt-0"
            />
          </div> */}
        </div>
        <div className="w-full bg-logo-container backdrop-blur-md rounded-lg p-2 flex justify-center items-center flex-wrap z-40 transform scale-75 backdrop-blur-md backdrop-filter backdrop-opacity-50">
          {/* <a href="https://sliitfoss.org" target="_blank">
            <img
              src="/assets/club-logos/foss-logo.svg"
              className="w-16 h-16 sm:w-28 sm:h-28 mx-5"
            />
          </a>
          <a href="https://wif-web.web.app" target="_blank">
            <img
              src="/assets/club-logos/wif-logo.png"
              className="w-[4.5rem] h-[4.5rem] sm:w-[7.3rem] sm:h-[7.4rem] mx-5"
            />
          </a>
          <a
            href="https://community.mozilla.org/en/groups/mozilla-campus-club-of-sliit/"
            target="_blank"
          >
            <img
              src="/assets/club-logos/mozilla-logo.png"
              className="w-14 h-14 sm:w-24 sm:h-24 mx-3 mr-6 sm:mr-2 filter brightness-115"
            />
          </a>
          <a href="https://www.facebook.com/sliit.fcsc/" target="_blank">
            <img
              src="/assets/club-logos/fcsc-logo.png"
              className="w-[4.5rem] h-[4.5rem] sm:w-36 sm:h-36 mx-5 mr-3 sm:mr-0 filter brightness-125"
            />
          </a>
          <a href="https://www.facebook.com/csnesc/" target="_blank">
            <img
              src="/assets/club-logos/csne-logo.png"
              className="w-14 h-14 sm:w-36 sm:h-36 mx-5 mr-8 sm:mr-2 sm:mt-1 filter brightness-125"
            />
          </a>
          <a href="https://www.facebook.com/sliit.cscs/" target="_blank">
            <img
              src="/assets/club-logos/cs-logo.png"
              className="w-12 h-14 sm:w-20 sm:h-24 mx-5 ml-4 mr-8 filter brightness-125"
            />
          </a> */}
        </div>
      </div>

      <div
        id="vanta-placeholder"
        ref={myRef}
        className="w-full h-full bg-black absolute top-0 right-0"
      />
      <div
        className={"w-full absolute bottom-0 z-40 transition duration-300"}
        id="register"
      >
        {/* <Register showDivider={false} comingSoon={true} /> */}
        <div className="flex justify-center bg-gradient-to-r from-transparent via-bg-black/40 to-bg-black/40  backdrop-blur-sm p-4 md:p-5 cursor-pointer  transition duration-300">
          {/* <span className="relative flex items-center mr-20">
            <img
              src="/assets/Calendar.svg"
              className="w-28 h-28"
              alt="Calendar"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black  text-3xl font-extrabold z-40">
              {props.eventDay}
            </span>
          </span> */}

          <span
            data-heading={props.name}
            className={"font-extrabold font-poppins text-center text-5xl md:text-7xl bg-clip-text bg-gradient-to-r px-2 p-4 transform text-neutral-700 uppercase"}
          >
            {props.name}
          </span>
        </div>
        {}
      </div>
      <div className="w-full h-full bg-gradient-radial from-primary via-[#001630] to-transparent opacity-20 absolute top-0 left-0" />
    </div>
  );
};

export default Landing;
