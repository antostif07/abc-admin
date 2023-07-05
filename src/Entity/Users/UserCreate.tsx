import {ImageInput, ImageField, ReferenceInput, AutocompleteInput} from 'react-admin'
import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import { MarkdownInput } from '../../components/MarkdownInput';
  
export const UserCreate = (props: any) => (
  <CreateGuesser {...props}>
    <InputGuesser source="tel" />
    <InputGuesser source="password" />
    <InputGuesser source='name' />
  </CreateGuesser>
);