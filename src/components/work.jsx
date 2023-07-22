import { Text, VStack, HStack } from '@chakra-ui/react';
import image3 from '../images/overlay3.jpg'
import image2 from '../images/overlay2.jpg'
import image1 from '../images/overlay1.jpg'

const Work = () => {
  return (
    <>
      <div id="work"
        style={{
          height: '100vh',
          width: "100%",
          overflow: 'hidden',
        }}
      >   

    <h1 style={{backgroundColor: "#8B978E", fontFamily: "CanelaRegItalic", color: "white", padding: "3% 0 1% 1%", fontSize: "3vh"}}>work experiences</h1> 

      <HStack>
        <div className="item">
          <div className="item-wrapper">
            <img src={image1}></img>
            <VStack style={{fontFamily: "CanelaRegItalic"}}>
              <div className="back-text">
                <Text className="after-overlay" style={{fontSize: "5vh"}}>Designed and developed end to end proof of concepts for Visa's Pay by Bank feature and Interac.</Text>
              </div>
              <div className="bottom-text">
                <Text className="after-overlay"  style={{fontSize: "6vh", color: "#6A737E"}}>✷✷✷</Text>
                <br />
                <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>React JS / TypeScript / Node.js / MongoDB</Text>
              </div>
            </VStack>
            <div className="img-overlay">
                <VStack className="item-name">
                  <VStack alignItems="left" className="front-text">
                    <Text style={{paddingLeft: "10%", fontSize: "6vh"}}>Payments Innovation Developer </Text>
                    <Text style={{color: "black", fontSize: "4vh", paddingLeft: "15%"}}>TD Bank</Text>
                  </VStack>
                  <Text className="id">1</Text>
                </VStack>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="item-wrapper">
            <img src={image2}></img>
            <VStack style={{fontFamily: "CanelaRegItalic"}}>
              <div className="back-text">
                <Text className="after-overlay" style={{fontSize: "5vh"}}>Worked on navigation and authoritative content features for bank employees' coaching dashboards.</Text>
              </div>
              <div className="bottom-text">
                <Text className="after-overlay"  style={{fontSize: "6vh", color: "#6A737E"}}>✷✷✷</Text>
                <br />
                <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>Angular JS / TypeScript / Cinchy DB / SQL</Text>
              </div>
            </VStack>
            <div className="img-overlay">
                <VStack className="item-name">
                  <VStack alignItems="left" className="front-text">
                    <Text style={{paddingLeft: "15%", fontSize: "6vh"}}>Software Engineer </Text>
                    <Text style={{color: "black", fontSize: "4vh", paddingLeft: "15%"}}>TD Bank</Text>
                  </VStack>
                  <Text className="id">2</Text>
                </VStack>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="item-wrapper">
            <img src={image3}></img>
            <VStack style={{fontFamily: "CanelaRegItalic"}}>
              <div className="back-text">
                <Text className="after-overlay" style={{fontSize: "5vh"}}>Designed and developed end to end proof of concepts for Visa's Pay by Bank feature and Interac.</Text>
              </div>
              <div className="bottom-text">
                <Text className="after-overlay"  style={{fontSize: "6vh", color: "#6A737E"}}>✷✷✷</Text>
                <br />
                <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>React JS / TypeScript / Chakra UI / Temporal</Text>
              </div>
            </VStack>
            <div className="img-overlay">
                <VStack className="item-name">
                  <VStack alignItems="left" className="front-text">
                    <Text style={{paddingLeft: "15%", fontSize: "6vh"}}>Full Stack Developer </Text>
                    <Text style={{color: "black", fontSize: "4vh", paddingLeft: "15%"}}>RFA Labs</Text>
                  </VStack>
                  <Text className="id">3</Text>
                </VStack>
            </div>
          </div>
        </div>  
        </HStack>
        </div>  
    </>
  );
};

export { Work };