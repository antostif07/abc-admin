import { ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField source='center' reference='centers'>
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);