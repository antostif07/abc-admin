import { FieldGuesser } from '@api-platform/admin';
import { Box, Button, Typography } from '@mui/material';
import {List, CreateButton, Datagrid, TextField} from 'react-admin'

const Empty = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            No Center available
        </Typography>
        <Typography variant="body1">
            Create one or import from a file
        </Typography>
        <CreateButton />
        <Button onClick={() => {return;}}>Import</Button>
    </Box>
);

export const CentersList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <FieldGuesser source="name" />
            <FieldGuesser source="description" />
        </Datagrid>
    </List>
)