import {ReferenceInput, AutocompleteInput, Create, SimpleForm} from 'react-admin'
import {InputGuesser} from "@api-platform/admin";
import { MarkdownInput } from '../../components/MarkdownInput';
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
  
export const ChapterCreate = (props: any) => {
  const location = useLocation();

  const {level_id} = parse(location.search)
  
  const redirect = level_id ? `/levels/${level_id}/show/chapters` : false;

  return (
    <Create {...props} redirect={redirect}>
      <SimpleForm>
        <InputGuesser source="name" />
        <InputGuesser source='degree' />
        <MarkdownInput source='content' label='Content' />
        <ReferenceInput
          source='level' reference='levels' label='Level'
          defaultValue={level_id}
        >
          <AutocompleteInput 
            filterToQuery={searchText => ({ name: searchText })} 
            optionText="name" label={'Level'}
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}