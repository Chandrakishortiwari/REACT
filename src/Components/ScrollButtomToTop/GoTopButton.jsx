import React, { useEffect, useState } from 'react'
// import { IoArrowUpOutline } from "react-icons/io5";

function GoTopButton() {
       const [showButton, setShowButton] = useState(false);
    
     useEffect(() => {
        const handleScroll = () => {
          // Show button if scrollY is greater than 100px
          setShowButton(window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
         const gotoTop =()=>{
            window.scrollTo({top:0, left:0, behavior:'smooth' })
        }
    
  return (
    <> 
    <h1>
      Lorem ipsum dolor sit<br />
       amet consectetur adipisicing elit.<br />
        Fugiat ipsam doloribus asperiores <br />
        quas delectus, voluptas eligendi quam <br />
        quo quaerat laboriosam nam sapiente ipsa<br />
         unde nemo, veniam vel qui temporibus velit <br />
         eos sunt enim mollitia! <br />
         Recusandae similique <br />
         consequatur vero tempore,<br />
          hic repellat, aperiam assumenda<br />
           sapiente blanditiis nemo <br />
           necessitatibus facilis <br />
           fuga non, quae molestiae<br />
            ratione adipisci harum<br />
             ad nam sunt ab nulla<br />
              veniam cumque at? <br />
              Voluptates, quae ad<br />
               possimus qui eum<br />
                obcaecati vel <br />
                consequuntur nemo? <br />
                Voluptate tempore <br />
                commodi harum nostrum <br />
                eligendi ad dolor ratione<br />
                 dolores aperiam quibusdam. <br />
                 Quas ab vel sapiente nostrum <br />
                 beatae, reprehenderit aspernatur<br />
                  quaerat quos cum s<br />
      uscipit odit omnis assumenda!<br />
    </h1>
    
    
      {showButton &&    <button className='h-10 w-10 bg-fuchsia-300 rounded-[50%]  justify-items-center sticky bottom-6 left-[1180px] scroll-m-96'  onClick={gotoTop}>
      {/* <IoArrowUpOutline /> */} ggg
      </button> }
                  
                  </>
  )
}

export default GoTopButton