
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { CoursesList } from './Entity/Courses/CoursesList';
import { CourseCreate } from './Entity/Courses/CourseCreate';

export const App = () => (
    <HydraAdmin entrypoint={import.meta.env.VITE_API_URL} dataProvider={dataProvider}>
        <ResourceGuesser name='courses' list={CoursesList} create={CourseCreate} 
        />
    </HydraAdmin>
);

    