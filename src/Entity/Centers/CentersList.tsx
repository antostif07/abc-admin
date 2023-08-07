import { FieldGuesser } from '@api-platform/admin';
import { Avatar, Box, Button, Typography } from '@mui/material';
import {List, CreateButton, Datagrid, TextField, FunctionField, ReferenceField, ShowButton, EditButton} from 'react-admin'

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
        <Datagrid rowClick='show'>
            <ReferenceField label='' source='cover' reference='images' >
                <FunctionField
                    render={(record: IImage) => {
                        return <Avatar src={`${import.meta.env.VITE_API_URL}${record.contentUrl}`} sx={{ height: 96, width: 96}} />;
                    }}
                />
            </ReferenceField>
            <FieldGuesser source="name" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
)