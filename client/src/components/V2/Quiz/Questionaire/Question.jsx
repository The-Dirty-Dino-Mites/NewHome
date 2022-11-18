import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';

function Question({ question }) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  return (
    <div>
      <FormControl>
        <FormLabel>{question.questionText}</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value={question.answerOptions[0].answerKey}
            control={<Radio />}
            label={question.answerOptions[0].answerText}
            onChange={handleChange}
          />
          <FormControlLabel
            value={question.answerOptions[1].answerKey}
            control={<Radio />}
            label={question.answerOptions[1].answerText}
            onChange={handleChange}
          />
          <FormControlLabel
            value={question.answerOptions[2].answerKey}
            control={<Radio />}
            label={question.answerOptions[2].answerText}
            onChange={handleChange}
          />
          <FormControlLabel
            value={question.answerOptions[3].answerKey}
            control={<Radio />}
            label={question.answerOptions[3].answerText}
            onChange={handleChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Question;