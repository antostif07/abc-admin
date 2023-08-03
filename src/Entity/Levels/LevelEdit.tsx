import {ReferenceInput, AutocompleteInput, Create, SimpleForm, Edit} from 'react-admin'
import {InputGuesser} from "@api-platform/admin";
import { MarkdownInput } from '../../components/MarkdownInput';
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { SelectCoverInput } from '../../components/SelectCoverInput';
  
export const LevelEdit = (props: any) => {
  const location = useLocation();

  const {course_id} = parse(location.search)
  
  const redirect = course_id ? `/courses/${course_id}/show/levels` : false;

  return (
    <Edit {...props} redirect={redirect}>
      <SimpleForm>
        <InputGuesser source="name" />
        <InputGuesser source='degree' />
        <MarkdownInput source='description' label='Description' />
        <ReferenceInput
          source='course' reference='courses' label='Course'
          defaultValue={course_id}
        >
          <AutocompleteInput 
            filterToQuery={searchText => ({ name: searchText })} 
            optionText="name" label={'Course'} disabled={true}
          />
        </ReferenceInput>
        <ReferenceInput source='cover' reference='images'>
          <SelectCoverInput source="cover" label={"Cover"} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}