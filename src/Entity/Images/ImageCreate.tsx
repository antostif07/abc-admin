import {FileField, ImageField, ImageInput} from 'react-admin'
import {CreateGuesser,} from "@api-platform/admin";
  
export const ImageCreate = (props: any) => (
  <CreateGuesser {...props}>
    <ImageInput source="file">
      <ImageField source="src" title="title" />
    </ImageInput>
  </CreateGuesser>
);