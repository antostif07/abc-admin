import { FieldGuesser } from '@api-platform/admin';
import { Avatar, Box, Button, Typography } from '@mui/material';
import {List, CreateButton, Datagrid, TextField, ReferenceField, ShowButton, FunctionField, EditButton} from 'react-admin'

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
            <ReferenceField label='' source='cover' reference='images' >
                <FunctionField
                    render={(record: IImage) => {
                        return <Avatar src={`${import.meta.env.VITE_API_URL}${record.contentUrl}`}  sx={{ height: 64, width: 64}}/>;
                    }}
                />
            </ReferenceField>
            <FieldGuesser source="name" label='Nom' />
            <FieldGuesser source="briefDescription" label="Résumé" />
            <ReferenceField label='Centre de formation' source='center' reference='centers' link='show' >
                <TextField source='name' />
            </ReferenceField>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
)