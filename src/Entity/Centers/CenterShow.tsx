import { Avatar, Button } from '@mui/material';
import { Link, Datagrid, ReferenceField, Show, TextField, TabbedShowLayout, Tab, RichTextField, ReferenceManyField, ShowButton, useRecordContext, FunctionField } from 'react-admin';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const CreateCourseButton = () => {
    const center = useRecordContext()

    return (
        <Button
            component={Link}
            to={`/courses/create?center_id=${center ? center.id : ''}`}
            label="Add Course"
            variant='contained'
        >
            Add Course
        </Button>
    )
}

export const CenterShow = (props: any) => {
    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label={'Summary'}>
                    <ReferenceField label='' source='cover' reference='images' >
                        <FunctionField
                            render={(record: IImage) => {
                                return <Avatar src={`${import.meta.env.VITE_API_URL}${record.contentUrl}`} />;
                            }}
                        />
                    </ReferenceField>
                    <TextField source='id' />
                    <TextField source="name" />
                    <ReferenceField source='center' reference='centers'>
                        <TextField source="name" />
                    </ReferenceField>
                </Tab>
                <Tab label='Description'>
                    {/* <RichTextField source="description" label="" /> */}
                    <FunctionField
                        label='Description'
                        render={(record: ICenter) => <ReactMarkdown>{record.description ?? ''}</ReactMarkdown>}
                    />
                </Tab>
                <Tab label="Course" path="courses">
                    <ReferenceManyField
                        reference='courses'
                        target='center_id'
                    >
                        <Datagrid>
                            <ReferenceField label='' source='cover' reference='images' >
                                <FunctionField
                                    render={(record: IImage) => {
                                        return <Avatar src={`${import.meta.env.VITE_API_URL}${record.contentUrl}`} />;
                                    }}
                                />
                            </ReferenceField>
                            <TextField source='name' />
                            <ShowButton />
                        </Datagrid>
                    </ReferenceManyField>
                    <CreateCourseButton {...props} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}