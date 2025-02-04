import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Rabbatog from './Rabbatog.png';

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
`;

function QuizIntro({ setView }) {
  return (
    <Container>
      <Center>
        <Card sx={{ width: '750px', border: '8px solid #A64B2A' }}>
          <CardMedia component="img" src={Rabbatog} alt="Rabbatog" />
        </Card>
      </Center>
      <Typography variant="h4" align="center" sx={{ padding: '20px' }}>
        Dogs, rabbits, and cats. Oh my!
      </Typography>
      <Typography variant="h5" align="center">
        <em>
          All of them are cute and cuddly, but which animal is most suited to
          your personality?
        </em>
      </Typography>
      <Center>
        <Button
          variant="contained"
          mt={2}
          sx={{
					  display: 'inline-block',
					  margin: 'auto',
					  height: '75px',
					  fontSize: '25px',
          }}
          type="button"
          onClick={() => {
					  setView('questionaire');
          }}
        >
          Ready to Find Out Which Animal is the One For You?
        </Button>
      </Center>
    </Container>
  );
}

export default QuizIntro;
