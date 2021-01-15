import React from 'react';
import mainGiraffe from "../img/temp-main-screen-giraffe.jpg";
import styled from "styled-components";
import title from "../img/title.png";

type Props = {
    onInputChange: any;
}

const MainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  background: blanchedalmond;
`

const MainGiraffeImage = styled.img`
  width: 40%;
`

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15%;
`

const LogoImage = styled.img`
  cursor: pointer;
  display: flex;
  width: 50%;
  margin: 0 auto 1rem auto;
`

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 3.5rem;
  font-size: 17px;
  font-family: PoppinsExtraLight, sans-serif;
  padding-left: 0.5rem;
`

const IntroductionText = styled.p`
  font-family: PoppinsExtraLight, sans-serif;
  font-size: 15px;
  text-align: center;
  margin: 5% 20% 2%;
`

const DirectionsDiv = styled.div`
  color: cadetblue;
  display: flex;
  cursor: pointer;
`

const Link = styled.span`
  &:hover {
    text-decoration: underline;
  }
`

const Divider = styled.span`
  color: black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const OpeningScreen = (props: Props) => {
    return (
        <>
            <MainDiv>
                <MainGiraffeImage src={mainGiraffe} alt={"mainGiraffe"}/>
                <SearchDiv>
                    <LogoImage src={title} alt={"title"}
                               onClick={() => window.location.pathname = "/"}/>
                    <StyledInput onChange={value => props.onInputChange(value)}
                                 placeholder="search for games"/>
                    <IntroductionText>Giraffe's Neck is a simple web site that shows resolution and FPS
                        values of the games that are in PlayStation 5 or Xbox Series X|S. Wanna see how it works?
                        Just type something and see how long your games giraffes neck</IntroductionText>
                    <DirectionsDiv>
                        <Link>What is FPS&nbsp;</Link>
                        <Divider>|</Divider>
                        <Link>&nbsp;About & Contact Us</Link>
                    </DirectionsDiv>
                </SearchDiv>
            </MainDiv>
        </>
    );
}

export default OpeningScreen;