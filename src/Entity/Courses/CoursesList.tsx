import { FieldGuesser } from '@api-platform/admin';
import { Box, Button, Typography } from '@mui/material';
import {List, CreateButton, Datagrid, TextField, ReferenceField} from 'react-admin'

const Empty = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            No products available
        </Typography>
        <Typography variant="body1">
            Create one or import from a file
        </Typography>
        <CreateButton />
        <Button onClick={() => {return;}}>Import</Button>
    </Box>
);

export const CoursesList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick='show'>
            <FieldGuesser source="name" label='Nom' />
            <FieldGuesser source="description" />
            <ReferenceField label='Centre de formation' source='center' reference='centers' >
                <TextField source='name' />
            </ReferenceField>
        </Datagrid>
    </List>
)