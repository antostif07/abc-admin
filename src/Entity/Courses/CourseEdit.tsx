import {ImageInput, ImageField, ReferenceInput, AutocompleteInput} from 'react-admin'
import {EditGuesser, InputGuesser} from "@api-platform/admin";
import { MarkdownInput } from '../../components/MarkdownInput';
  
export const CourseEdit = (props: any) => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <MarkdownInput source='description' label='Description' />
    <ReferenceInput
      source='center' reference='centers' label='Centre de Formation'
    >
      <AutocompleteInput 
        filterToQuery={searchText => ({ name: searchText })} 
        optionText="name" label={'Centre de formation'}
      />
    </ReferenceInput>
  </EditGuesser>
);