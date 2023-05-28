import { Stack, Typography } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

export default function ExpectedFunctionForm() {
  return (
    <>
      <Typography variant="h5" pb={2}>
        Expected Functional Output
      </Typography>

      <TextFieldElement label="Function Name" name="function_name" fullWidth sx={{ pb: 2 }} />

      <FunctionTemplate no={1} />
      <FunctionTemplate no={2} />
      <FunctionTemplate no={3} />
    </>
  );
}

function FunctionTemplate({ no }) {
  return (
    <>
      <Typography fontSize={20} pb={2} pt={4} sx={{ textTransform: 'capitalize' }}>
        Function {no}
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`function_${no}_car_function_name`} label="Time" fullWidth />
          <TextFieldElement name={`function_${no}_coordinate`} label="Coordinate of The function" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`function_${no}_LWH`} label="L*W*H" fullWidth />
        </Stack>
      </Stack>
    </>
  );
}
