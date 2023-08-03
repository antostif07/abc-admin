import { FieldGuesser } from '@api-platform/admin';
import { Avatar, Box, Button, Typography } from '@mui/material';
import {List, CreateButton, Datagrid, TextField, ReferenceField, ShowButton, FunctionField} from 'react-admin'

const Empty = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            No Levels available
        </Typography>
        <Typography variant="body1">
            Create one or import from a file
        </Typography>
        <CreateButton />
        <Button onClick={() => {return;}}>Import</Button>
    </Box>
);

export const LevelsList = (props: any) => (
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
            <FieldGuesser source='degree' label='Niveau' />
            {/* <FieldGuesser source="description" /> */}
            <ReferenceField label='Cours' source='course' reference='courses' link='show' >
                <TextField source='name' />
            </ReferenceField>
            <ShowButton />
        </Datagrid>
    </List>
)