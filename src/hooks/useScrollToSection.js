import { useState, useEffect } from 'react';

const useScrollToSection = (offset, sectionId) => {
  const [hideDiv, setHideDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the offset and sectionId based on your specific requirements
      // Adjust this value as needed

    //   const offset = 200; 
      // Replace with the ID of your target section
    //   const sectionId = 'yourSpecificSectionId'; 

      const section = document.getElementById(sectionId);

        console.log("section?.offsetTop: ", section?.offsetTop )

      if (section && window.scrollY > section?.offsetTop - offset) {
        setHideDiv(true);
      } else {
        setHideDiv(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return [hideDiv]
};


export default useScrollToSection