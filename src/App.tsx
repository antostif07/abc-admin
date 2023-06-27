
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { CoursesList } from './Entity/Courses/CoursesList';
import { CourseCreate } from './Entity/Courses/CourseCreate';
import { CentersList } from './Entity/Centers/CentersList';
import { CenterCreate } from './Entity/Centers/CenterCreate';
import { CourseShow } from './Entity/Courses/CourseShow';

export const App = () => (
    <HydraAdmin entrypoint={import.meta.env.VITE_API_URL} dataProvider={dataProvider}>
        <ResourceGuesser name='courses' list={CoursesList} create={CourseCreate} show={CourseShow} />
        <ResourceGuesser name='centers' list={CentersList} create={CenterCreate} />
    </HydraAdmin>
);

    