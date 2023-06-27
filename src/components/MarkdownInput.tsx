// @ts-nocheck
import { useState } from 'react';
import MDEditor, {commands, ExecuteState, TextAreaTextApi, TextAreaCommandOrchestrator, ICommandChildHandle} from '@uiw/react-md-editor';
import { useInput } from 'react-admin';

interface MarkdownInputProps {
    source: string;
    label: string;
}

const SelectImages = ({textApi, close, execute,}) => {
  const [value, setValue] = useState('')
  const insert = () => {
    console.log('value:::', value)
    textApi.replaceSelection(value)
  }
  return (
    <div style={{ width: 120, padding: 10 }}>
      <div>My Custom Toolbar</div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          dispatch({ $value: '~~~~~~' })
          console.log('> execute: >>>>>', getState())
        }}
      >
        State
      </button>
      <button type="button" onClick={insert}>Insert</button>
      <button type="button" onClick={() => close()}>Close</button>
      <button type="button" onClick={() => execute()}>Execute</button>
    </div>
  );
}

export const image = {
  name: 'image',
  buttonProps: { 'aria-label': 'Add image (ctrl + k)', title: 'Ajouter une image (ctrl + k)' },
  icon: (
    <svg width="13" height="13" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
      />
    </svg>
  ),
  children: (props: ICommandChildHandle) => <SelectImages {...props} />,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    console.log('>>>>>> Image >>>>>', state);
    // // Select everything
    // const newSelectionRange = selectWord({ text: state.text, selection: state.selection });
    // const state1 = api.setSelectionRange(newSelectionRange);
    // // Replaces the current selection with the image
    // const imageTemplate = state1.selectedText || 'https://example.com/your-image.png';
    // const val = state.command.value || '';
    // api.replaceSelection(val.replace(/({{text}})/gi, imageTemplate));

    // const start = state1.selection.start + val.indexOf('{{text}}');
    // let end = state1.selection.start + val.indexOf('{{text}}') + (state1.selection.end - state1.selection.start);
    // if (!state1.selectedText) {
    //   end = end + imageTemplate.length;
    // }
    // api.setSelectionRange({ start, end });
  },
};

export const MarkdownInput = ({ source, label }: MarkdownInputProps) => {
    const { id, field, fieldState } = useInput({ source });
    return (
        <label htmlFor={id} style={{
            width: '100%'
        }}>
            {label}
            <MDEditor 
                id={id} {...field} 
                commands={[
                    commands.bold,
                    commands.italic,
                    commands.strikethrough,
                    commands.group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
                        name: 'title',
                        groupName: 'title',
                        buttonProps: { 'aria-label': 'Insert title'}
                    }),
                    commands.divider,
                    commands.link,
                    commands.quote,
                    commands.divider,
                    commands.unorderedListCommand,
                    commands.orderedListCommand,
                    commands.checkedListCommand,
                    commands.divider,
                    commands.group([], image)
                ]}
            />
            {fieldState.error && <span>{fieldState.error.message}</span>}
        </label>
    );
};