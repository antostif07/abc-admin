import {ReferenceInput, AutocompleteInput} from 'react-admin'
import {EditGuesser, InputGuesser} from "@api-platform/admin";
import { MarkdownInput } from '../../components/MarkdownInput';
import { SelectCoverInput } from '../../components/SelectCoverInput';
  
export const CourseEdit = (props: any) => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="briefDescription" label="Résumé" />
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
  </EditGuesser>
);