import { Divider, Paper, Typography } from '@mui/material';
import DashboardLayout from 'common/layouts/dashboard';
import DynamicContextForm from 'modules/dashboard/form/dynamic-context';
import ExpectedFunctionForm from 'modules/dashboard/form/expected-function';
import { StaticContextForm } from 'modules/dashboard/form/static-context';
import { FormContainer } from 'react-hook-form-mui';

export default function Form() {
  return (
    <FormContainer>
      <Typography variant="h4" pb={4}>
        Input Value
      </Typography>
      <Paper sx={{ p: 3 }}>
        <StaticContextForm />
        <Divider sx={{ my: 5 }} />
        <DynamicContextForm />
        <Divider sx={{ my: 5 }} />
        <ExpectedFunctionForm />
      </Paper>
    </FormContainer>
  );
}

Form.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
