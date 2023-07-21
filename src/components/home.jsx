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

   <Box width="95%" style={{
       marginLeft: "auto",
       marginRight: "auto"
   }}>
      <Divider borderWidth="1px" className='divider' style={{opacity: "0.5"}} />
   </Box>

   <Heading style={{
            paddingTop: "8%",
            paddingLeft: "5%",
            fontWeight: 'lighter',
         }}
      fontFamily="CanelaThinItalic" fontSize='7vh'>creative</Heading>

   <Heading style={{paddingLeft: "5%"}} fontFamily="CanelaThinItalic" fontSize='13vh'>DEVELOPER <a style={{ fontSize: "4vh", color: '#AFD8BB'}}>✷</a></Heading>


   <Text className="blurb" fontFamily="CanelaThinItalic" fontSize='4vh' style={{marginTop: "-9%", float: "right", paddingRight: "8%", paddingLeft: "60%"}}>
      &emsp;&emsp;&emsp;a passionate frontend / web developer with an eye for impressionism and a goal to create more elegant  products in the technology industry.
      </Text>

      <Link class="circle button" to="about">
         <span></span>
         <span></span>
         <span></span>
      </Link>
   

    </div>
     </>
    );
  }
  
  export { Home };