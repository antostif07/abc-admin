import {ImageInput, ImageField} from 'react-admin'
import {CreateGuesser, InputGuesser} from "@api-platform/admin";
  
export const CenterCreate = (props: any) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="description" />
  </CreateGuesser>
);