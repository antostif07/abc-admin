import {ReferenceInput, AutocompleteInput} from 'react-admin'
import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import { MarkdownInput } from '../../components/MarkdownInput';
import { SelectCoverInput } from '../../components/SelectCoverInput';
  
export const CourseCreate = (props: any) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source='briefDescription' label="Résumé du cours" />
    <MarkdownInput source='description' label='Description' />
    <ReferenceInput
      source='center' reference='centers' label='Centre de Formation'
    >
      <AutocompleteInput 
        filterToQuery={searchText => ({ name: searchText })} 
        optionText="name" label={'Centre de formation'}
      />
    </ReferenceInput>
    <ReferenceInput source='cover' reference='images'>
      <SelectCoverInput source="cover" label={"Cover"} />
    </ReferenceInput>
  </CreateGuesser>
);