import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalNav from './GlobalNav'


const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100%;
background-image: url("https://i.imgur.com/alMkLDm.png?1");
background-size: cover;
min-height: 100%;
min-width: 1024px;
position: fixed;
top: 0;
left: 0;

}`

class SplashPage extends Component {
    render() {
        return (
    
                <div>
                
                <HomePageContainer>
              <GlobalNav />
                </HomePageContainer>
                </div>
        );
    }
}
export default SplashPage;