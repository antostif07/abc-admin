import {FileInput, FileField} from 'react-admin'
import {CreateGuesser,} from "@api-platform/admin";
  
export const ImageCreate = (props: any) => (
  <CreateGuesser {...props}>
    <FileInput source="file">
      <FileField source="src" title="title" />
    </FileInput>
  </CreateGuesser>
);