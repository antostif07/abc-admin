import {ImageInput, ImageField, ReferenceInput} from 'react-admin'
import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import { SelectCoverInput } from '../../components/SelectCoverInput';
  
export const CenterCreate = (props: any) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="description" />
    <ReferenceInput source='cover' reference='images'>
      <SelectCoverInput source="cover" label={"Cover"} />
    </ReferenceInput>
  </CreateGuesser>
);