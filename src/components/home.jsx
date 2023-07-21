import background from '../images/back.jpg'
import {Heading, Flex, Spacer, HStack, Stack, Divider, Box, Text} from '@chakra-ui/react'
import React from 'react';
import {Link} from 'react-scroll'

 
 const Home = () => {

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
      <Heading fontSize='4.5vh' fontFamily="CanelaLightItalic" style={{marginTop: '3%', marginLeft: '3%', fontWeight: 'lighter', color: 'black', zIndex: '1'}}>Dina Orucevic</Heading>
      <Spacer />
      <HStack className="heading" spacing='2rem' fontSize= '4vh' fontFamily="CanelaLightItalic" style={{marginTop: '4.5%', marginRight: '3%', fontWeight: 'lighter', color: 'black', zIndex: '1'}}>
         <Link to="about" spy={true} smooth={true} offset={50} duration={500}  className= "menu"> <a className= "values"> about </a> </Link>
         <Link to="work" spy={true} smooth={true} offset={10} duration={500} className= "menu"> <a className= "values"> work </a> </Link>
         <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className= "menu"> <a className= "values"> contact </a> </Link>
      </HStack>
   </Flex>
   

    </div>
     </>
    );
  }
  
  export { Home };