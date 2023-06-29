import {ReferenceInput, AutocompleteInput, Create, SimpleForm} from 'react-admin'
import {InputGuesser} from "@api-platform/admin";
import { parse } from "query-string";
import { MarkdownInput } from '../../components/MarkdownInput';
  
export const LevelCreate = (props: any) => {

  return (
    <Create {...props}>
      <SimpleForm>
        <InputGuesser source="name" />
        <MarkdownInput source='description' label='Description' />
        <ReferenceInput
          source='course' reference='courses' label='Course'
        >
          <AutocompleteInput 
            filterToQuery={searchText => ({ name: searchText })} 
            optionText="name" label={'Course'}
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}