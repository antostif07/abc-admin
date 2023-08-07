import {ImageInput, ImageField, ReferenceInput} from 'react-admin'
import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import { SelectCoverInput } from '../../components/SelectCoverInput';
import { MarkdownInput } from '../../components/MarkdownInput';
  
export const CenterCreate = (props: any) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <MarkdownInput source='description' label='Description' />
    <ReferenceInput source='cover' reference='images'>
      <SelectCoverInput source="cover" label={"Cover"} />
    </ReferenceInput>
  </CreateGuesser>
);