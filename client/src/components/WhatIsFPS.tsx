import React from 'react';
import styled from "styled-components";
import fpsGif from "../gif/fps-difference.gif";


const WhatIsFPSWrapper = styled.section`
  background: #ffded9;
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  border-top: solid 1px;
  border-color: darkgray;
  min-height: 350px;
`

const FPSLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: PoppinsExtraLight, sans-serif;
  padding-right: 10%;
  padding-top: 3%;
`

const FPSTitle = styled.span`
  font-size: 28px;
  font-weight: 900;
  color: darkslateblue;
  border: solid 1px;
  text-align: center;
`

const MainText = styled.span`
  font-family: PoppinsExtraLight, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`

const Gif = styled.img`
  max-width: 30%;
  margin-top: auto;
  margin-bottom: auto;
`

const WhatIsFPS = () => {
    return (
        <WhatIsFPSWrapper>
            <FPSLeftDiv>
                <FPSTitle>What is FPS?</FPSTitle>
                <MainText id="what-is-fps">Frames Per Second (FPS) is a frequency rate at which consecutive images
                    called frames appear on a display. For example, if you see 30 images in a second, that means
                    that context (it may be video, game etc.) is 30 FPS.<br/><br/>
                    The more images you see in a context, the smoother quality you get. In video games, 30 FPS
                    is considered the minimum value the game should be. But with the next gen consoles, most of the
                    games now have
                    60 FPS or even 120 FPS options.
                </MainText>
            </FPSLeftDiv>
            <Gif src={fpsGif} alt="fps-difference-gif"/>
        </WhatIsFPSWrapper>
    );
}

export default WhatIsFPS;