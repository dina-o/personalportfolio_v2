import background from '../images/back.jpg'
import {Heading, Flex, Spacer, HStack, Stack, Divider, Box, Text} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
import gsap from 'gsap'

 
 const Home = () => {
   const tl = gsap.timeline();

   tl.to(".blurb",{
     opacity: 1,
     y: 0,
     delay: 0.5,
     ease: "power3.Out",  
   });

   gsap.to(".circle", 1, {
      scale: 1,
      ease: 'power3.inOut',
      delay: 1,
    })

   gsap.to(".heading",{
      y: 0,
      opacity: 1,
      ease: "power2.Out", 
    });

    gsap.to(".watermark",{
      y: 0,
      opacity: 1,
      ease: "power1.Out", 
    });

    tl.to(".hero-text", {
      y: 0,
      opacity: 1,
      ease: "power2.Out", 
    })

    tl.to(".hours", {
      y: 0,
      opacity: 1,
      ease: "power2.Out",
    })

    tl.to(".minutes", {
      y: 0,
      opacity: 1,
      ease: "power2.Out",
    })

    tl.to(".time-text", {
      x: 0,
      opacity: 1,
      ease: "power2.Out",
    })


    
   const [hours, setHours] = useState('');
   const [minutes, setMinutes] = useState('');
   const [textSleeping, setTextSleeping] = useState('');
 
   function updateTime() {
     const date = new Date();
     const showHours = String(date.getHours() % 12 || 12).padStart(2, '0');
     const textAmPm = date.getHours() >= 12 ? 'PM' : 'AM';
     const showMinutes = ':' + String(date.getMinutes()).padStart(2, '0') + textAmPm;
 
     let textSleeping = '';
     if (
       date.getHours() === 22 ||
       date.getHours() === 23 ||
       date.getHours() === 24 ||
       date.getHours() === 0 ||
       date.getHours() === 1 ||
       date.getHours() === 2 ||
       date.getHours() === 3 ||
       date.getHours() === 4 ||
       date.getHours() === 5 ||
       date.getHours() === 6 ||
       date.getHours() === 7
     ) {
       textSleeping = '(i may be asleep now) ✷';
     }
 
     setHours(showHours);
     setMinutes(showMinutes);
     setTextSleeping(textSleeping);
   }
 
   function updateWithAnimationFrame() {
     updateTime();
     requestAnimationFrame(updateWithAnimationFrame);
   }
 
   useEffect(() => {
     updateTime();
      const animationFrameId = requestAnimationFrame(updateWithAnimationFrame);
      return () => cancelAnimationFrame(animationFrameId);
   }, []);

    return (
     <> 
     <div id="home" className='grayscale-filter' style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color: "white",
      overflowX: "hidden"
   }}>

   <Flex>
      <Heading className="watermark" fontSize='4.5vh' fontFamily="CanelaLightItalic" style={{marginTop: '3%', marginLeft: '3%', fontWeight: 'lighter', color: 'black', zIndex: '1'}}>Dina Orucevic</Heading>
      <Spacer />
      <HStack className="heading" spacing='2rem' fontSize= '4vh' fontFamily="CanelaLightItalic" style={{marginTop: '4.5%', marginRight: '3%', fontWeight: 'lighter', color: 'black', zIndex: '1'}}>
         <Link to="about" spy={true} smooth={true} offset={50} duration={500}  className= "menu"> <a className= "values"> about </a> </Link>
         <Link to="work" spy={true} smooth={true} offset={10} duration={500} className= "menu"> <a className= "values"> work </a> </Link>
         <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className= "menu"> <a className= "values"> contact </a> </Link>
      </HStack>
   </Flex>

   <Box width="95%" style={{
       marginLeft: "auto",
       marginRight: "auto"
   }}>
      <Divider borderWidth="1px" className='divider' style={{opacity: "0.5"}} />
   </Box>
   
   <Stack style={{float: "right", paddingRight: "15%", marginTop: "-1.5%"}}>
      <Text className="minutes" fontSize='5vh' fontFamily="CanelaBold">{minutes}</Text>
      
      <Stack fontSize='3.5vh' spacing={0.1} direction='column' style={{marginTop: "-5%", lineHeight: "1.2"}} className="time-text">
         <Text fontFamily="CanelaThin" style={{
               fontWeight: 'lighter',
            }}>available for work</Text>

         <Text fontFamily="CanelaThinItalic">{textSleeping}</Text>
      </Stack>
   </Stack>

   <Text className="hours" fontSize='17vh' fontFamily="Maeslstrom" style={{float: "right", paddingRight: "2%", marginTop: "-3%"}}>{hours}</Text>


<div className="hero-text">
      <Heading style={{
            paddingTop: "8%",
            paddingLeft: "5%",
            fontWeight: 'lighter',
         }}
      fontFamily="CanelaThinItalic" fontSize='7vh'>creative</Heading>

      <div className="container">
         <div className="slider-up">
            {/* make into map later */}
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>DEVELOPER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>ARTIST <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>DREAMER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>WRITER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>INNOVATOR <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>PROBLEM SOLVER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>DESIGNER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>STORY TELLER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>THINKER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
            <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>DEVELOPER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>
         </div>
      </div>
   </div>

      <Text className="blurb" fontFamily="CanelaThinItalic" fontSize='4vh' style={{marginTop: "-9.5%", float: "right", paddingRight: "8%", paddingLeft: "60%"}}>
      &emsp;&emsp;&emsp;a passionate frontend / web developer with an eye for impressionism and a goal to create more elegant  products in the technology industry.
      </Text>

      <Link class="circle button" to="about" spy={true} smooth={true} offset={50} duration={500}>
         <span></span>
         <span></span>
         <span></span>
      </Link>
   

    </div>
     </>
    );
  }
  
  export { Home };