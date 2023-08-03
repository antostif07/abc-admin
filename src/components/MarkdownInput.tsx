// @ts-nocheck
import { useEffect, useState } from 'react';
import MDEditor, {commands, ExecuteState, TextAreaTextApi, TextAreaCommandOrchestrator, ICommandChildHandle} from '@uiw/react-md-editor';
import { useInput } from 'react-admin';
import { ImageSelector } from './ImageSelector';

interface MarkdownInputProps {
    source: string;
    label: string;
}

function SubChildren({ close, execute, getState, textApi, dispatch }) {
  const insert = (imageContentUrl) => {
    textApi.replaceSelection(`![image](${import.meta.env.VITE_API_URL}/${imageContentUrl})`)
    close()
  }

  return (
    <div style={{ width: 500, padding: 10, height: 300, overflow: 'scroll' }}>
      <div>Select Image</div>
      <ImageSelector handleClick={(item) => insert(item.contentUrl)} />
    </div>
  );
}

const subChild = {
  name: 'update',
  groupName: 'update',
  icon: (
    <svg width="13" height="13" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
      />
    </svg>
  ),
  children: (props) => <SubChildren {...props} />,
  execute: (state, api)  => {
    console.log('>>>>>>update>>>>>', state)
  },
  buttonProps: { 'aria-label': 'Insert title'}
}

const SelectImages = ({textApi, close, execute,}) => {
  const [value, setValue] = useState('')
  const insert = () => {
    console.log('value:::', value)
    textApi.replaceSelection(value)
  }
  return (
    <div style={{ width: 120, padding: 10 }}>
      <div>Select Image</div>
      
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
                    commands.group([], subChild),
                ]}
            />
            {fieldState.error && <span>{fieldState.error.message}</span>}
        </label>
    );
};