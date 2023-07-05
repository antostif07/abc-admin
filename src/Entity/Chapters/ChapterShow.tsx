// @ts-nocheck
import { Show, TextField, TabbedShowLayout, Tab, FunctionField } from 'react-admin';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export const ChapterShow = (props) => {
    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label={'Summary'}>
                    <TextField source='id' />
                    <TextField source="name" />
                </Tab>
                <Tab label='Description'>
                    {/* <RichTextField source="description" label="" /> */}
                    <FunctionField
                        label='Content'
                        render={record => <ReactMarkdown>{record.content}</ReactMarkdown>}
                    />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}