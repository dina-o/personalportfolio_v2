import { Text, Flex} from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <div id="about"
        style={{
          height: '100%',
          width: "100%",
          backgroundColor: "#646D66",
          color: "white",
        }}
      >   
      <Flex direction="column" style={{marginLeft: "15%", marginRight: "15%", paddingTop: "5%"}}>

      <div className="artist-box">
        <Text style={{fontFamily: "CanelaReg", fontSize: "8vh"}}>Dina Orucevic &nbsp;<span style={{fontFamily: "CanelaThin", fontSize: "4vh"}}>b. Waterloo 2003</span></Text>
        <Text style={{fontFamily: "CanelaLightItalic", fontSize: "6vh"}}>how do you do?, &nbsp; <span style={{fontFamily: "CanelaThin", fontSize: "4vh"}}>2023</span></Text>

        <Text style={{fontFamily: "CanelaReg", fontSize: "4vh"}}>Acrylic on canvas</Text>

        <Text style={{fontFamily: "CanelaThin", fontSize: "3vh", marginTop: "5%"}}>
        Impressionism, <i>noun</i>. "A literary or artistic style that seeks to capture a feeling or experience rather than to achieve accurate depiction." Throughout the entire developement process, I always prioritize the user experience on the frontend and accessibility for users.
        <br/> <br/>
        As a budding frontend / web developer, I am focused on leveraging the latest and greatest technologies in order to makes the world a better place. I'm a <a target="_blank" href="https://uwaterloo.ca/systems-design-engineering/news/meet-sydes-2021-schulich-leader"><u>Schulich Leader Scholar </u></a> currently studying Systems Design Engineering at the University of Waterloo. I am currently interning as a full stack developer @ RFA and previously, I was a software engineer intern @ TD Bank on the Data as a Service team. 
        <br/> <br/>
        Outside of development, I'm an avid reader, writer, corgi fanatic, and film photographer. I'm always looking for more opportunities to develop my skills further! Currently searching for Winter 2024 SWE / frontend / web developer roles ⁠— check out my <a target="_blank" href="https://drive.google.com/file/d/1dPlXI9vHuhxxjlL5t8cv1IKQ3U8gRj6i/view?usp=sharing"><u>resume</u></a> :)
        </Text>

        <span></span>
      </div>

        <Text style={{fontFamily: "CanelaLightItalic", fontSize: "6vh", marginTop: "7%"}}>my current favourites</Text>
        <div className="bubbles">
            <div className="square book">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="square superpower">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="square movie">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        </Flex> 
        
        </div>  
    </>
  );
};

export { About };