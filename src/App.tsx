import React from 'react';
import {Logo, TeamImage, Content, Container} from './styles/style';
import './App.css';
import Forms from './Forms/index';
import SmallTeam from './assets/small-team.svg'


function App() {
  return (

    <div className="App">
      <Container>
        <Content>
          <Logo>
            Your Logo
          </Logo>
          <Forms />
        </Content>
        <TeamImage src={SmallTeam}/>
      </Container>
    </div>
  );
}

export default App;
