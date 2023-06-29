import { Typography, Button } from '@mui/material';
import { ArrayField, Link, Datagrid, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const CreateLevelButton = () => (
    <Button>
        <Link to={'/levels/create'}>
        Add Level
        </Link>
    </Button>
)

export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField source='center' reference='centers'>
                <TextField source="name" />
            </ReferenceField>
            <ArrayField source='levels'>
                <Datagrid empty={<CreateLevelButton />}>
                    <TextField source='name' />
                    <TextField source='degree' />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);