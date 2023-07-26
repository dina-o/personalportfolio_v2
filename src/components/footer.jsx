import { Text, Stack, VStack, Flex, Spacer, Box, Divider } from '@chakra-ui/react';
import background from '../images/footer.png';
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <>
      <div id="contact"
        style={{
          position: 'relative',
          height: '100vh',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 45%',
            backgroundSize: '100% 65%',
            opacity: 0.4,
          }}
        ></div>

        <div class="marquee">
          <Stack class="marquee-content scroll">
            {Array.from({ length: 5 }).map(() => (
            <Text>&nbsp; GET &nbsp; IN &nbsp; TOUCH &emsp; ✷ </Text>
            ))}
          </Stack>

          <Stack class="marquee-content scroll" aria-hidden="true">
            {Array.from({ length: 5 }).map(() => (
            <Text>&nbsp; GET &nbsp; IN &nbsp; TOUCH &emsp; ✷ </Text>
            ))}
          </Stack>
        </div>

        <VStack alignItems="left" className="footer" zIndex="2">
        <Link style={{cursor: 'pointer', zIndex: "2"}} to="home" spy={true} smooth={true} offset={0} duration={500} color="black">/ Home</Link>
          <Box width="95%" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Divider borderWidth="1px" />
          </Box>
          <Link style={{cursor: 'pointer', zIndex: "2"}} to="about" spy={true} smooth={true} offset={50} duration={500} color="black">/ About</Link>
          <Box width="95%" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Divider borderWidth="1px"/>
          </Box>
          <Link style={{cursor: 'pointer', zIndex: "2"}} to="work" spy={true} smooth={true} offset={0} duration={500} color="black">/ Work Experiences</Link>
        </VStack>

        <Text style={{ color: 'black', zIndex: '2' }} className="question">
          Want to work together or just chat? Don’t hesitate to <b style={{color: "rgb(141, 112, 150)"}} >reach out!</b>
        </Text>

        <Flex>
          <VStack
            alignItems="left"
            fontSize="3vh"
            fontFamily="CanelaLightItalic"
            style={{
              marginTop: '3%',
              marginLeft: '3%',
              marginBottom: '2%',
              fontWeight: 'lighter',
              color: 'black',
              zIndex: '1',
              lineHeight: '1',
            }}
          >
            <Text color="black">made with love</Text>
            <Link style={{cursor: 'pointer'}} to="home" spy={true} smooth={true} offset={0} duration={500} color="black">Dina Orucevic</Link>
          </VStack>
          <Spacer />
          <VStack
            alignItems="left"
            fontSize="3vh"
            fontFamily="CanelaLightItalic"
            style={{
              marginTop: '3%',
              marginRight: '3%',
              marginBottom: '2%',
              fontWeight: 'lighter',
              color: 'black',
              zIndex: '1',
              lineHeight: '1',
            }}
          >
            <a target="_blank" href='mailto:dina.oorucevic@gmail.com' color="black" style={{textDecoration: "none"}}>email</a>
            <a target="_blank" href="https://linkedin.com/in/dinaorucevic" color="black" style={{textDecoration: "none"}}>linkedIn</a>
          </VStack>
        </Flex>
      </div>
    </>
  );
};

export { Footer };