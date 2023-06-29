// @ts-nocheck
import { Typography, Button, withStyles } from '@mui/material';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Link, Datagrid, ReferenceField, Show, TextField, TabbedShowLayout, Tab, RichTextField, ReferenceManyField, ShowButton } from 'react-admin';

const styles = {
    button: {
      marginTop: '1em'
    }
  };

const CreateLevelButton = (props) => {
    
    return (
        <Button
            variant="raised"
            component={Link}
            to={`/levels/create?course_id=`}
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
                    <RichTextField source="description" label="" />
                </Tab>
                <Tab label="Levels" path="levels">
                    <ReferenceManyField
                        reference='levels'
                        target='course_id'
                    >
                        <Datagrid>
                            <TextField source='name' />
                            <ShowButton />
                        </Datagrid>
                    </ReferenceManyField>
                    <CreateLevelButton {...props} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}