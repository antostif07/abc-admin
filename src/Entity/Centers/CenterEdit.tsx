import {ImageInput, ImageField, ReferenceInput, } from 'react-admin'
import {EditGuesser, InputGuesser} from "@api-platform/admin";
import { SelectCoverInput } from '../../components/SelectCoverInput';
import { MarkdownInput } from '../../components/MarkdownInput';
  
export const CenterEdit = (props: any) => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <MarkdownInput source='description' label='Description' />
    <ReferenceInput source='cover' reference='images'>
      <SelectCoverInput source="cover" label={"Cover"} />
    </ReferenceInput>
  </EditGuesser>
);