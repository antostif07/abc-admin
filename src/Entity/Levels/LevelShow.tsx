// @ts-nocheck
import { Typography, Button, withStyles } from '@mui/material';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Link, Datagrid, ReferenceField, Show, TextField, TabbedShowLayout, Tab, RichTextField, ReferenceManyField, ShowButton, useRecordContext, FunctionField } from 'react-admin';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const styles = {
    button: {
      marginTop: '1em'
    }
  };

const CreateChapterButton = (props) => {
    const level = useRecordContext()

    console.log(level);
    return (
        <Button
            variant="raised"
            component={Link}
            to={`/chapters/create?level_id=${level ? level.id : null}`}
            label="Add Chapter"
        >
            Add Chapter
        </Button>
    )
}

export const LevelShow = (props) => {
    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label={'Summary'}>
                    <TextField source='id' />
                    <TextField source="name" />
                    <ReferenceField source='course' reference='courses'>
                        <TextField source="name" />
                    </ReferenceField>
                </Tab>
                <Tab label='Description'>
                <FunctionField
                        label='Description'
                        render={record => <ReactMarkdown>{record.description}</ReactMarkdown>}
                    />
                </Tab>
                <Tab label="Chapters" path="chapters">
                    <ReferenceManyField
                        reference='chapters'
                        target='level_id'
                    >
                        <Datagrid>
                            <TextField source='name' />
                            <ShowButton />
                        </Datagrid>
                    </ReferenceManyField>
                    <CreateChapterButton {...props} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}