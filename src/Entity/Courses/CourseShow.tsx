// @ts-nocheck
import { Typography, Button, withStyles } from '@mui/material';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Link, Datagrid, ReferenceField, Show, TextField, TabbedShowLayout, Tab, RichTextField, ReferenceManyField, ShowButton, useRecordContext, FunctionField } from 'react-admin';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const CreateLevelButton = () => {
    const course = useRecordContext()

    console.log(course);
    return (
        <Button
            variant="raised"
            component={Link}
            to={`/levels/create?course_id=${course ? course.id : 'll'}`}
            label="Add level"
        >
            Add Level
        </Button>
    )
}

export const CourseShow = (props) => {
    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label={'Summary'}>
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
                        render={record => <ReactMarkdown>{record.description}</ReactMarkdown>}
                    />
                </Tab>
                <Tab label="Levels" path="levels">
                    <ReferenceManyField
                        reference='levels'
                        target='course_id'
                    >
                        <Datagrid>
                            <TextField source='name' />
                            <TextField source='degree' />
                            <ShowButton />
                        </Datagrid>
                    </ReferenceManyField>
                    <CreateLevelButton {...props} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}