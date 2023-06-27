import {  useEffect, useState } from "react";
import { Container } from "./style";
import PropTypes from 'prop-types';

const Greeting = ({name}) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greeting;
    console.log(currentHour)
    if (currentHour >= 6 && currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }

    setGreeting(greeting);
  }, []);


  const options = { weekday: "long", day: "numeric", month: "long" };
  const currentDate = new Date().toLocaleDateString("pt-BR", options);

  


  return <Container>
    <span>{currentDate}</span>
    <h2>{greeting}, {name}</h2>
  </Container> 
};


Greeting.propTypes = {
  name: PropTypes.string,  
};

export default Greeting;