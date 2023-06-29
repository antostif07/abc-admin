
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin';
import { dataProvider } from './dataProvider';
import { CoursesList } from './Entity/Courses/CoursesList';
import { CourseCreate } from './Entity/Courses/CourseCreate';
import { CentersList } from './Entity/Centers/CentersList';
import { CenterCreate } from './Entity/Centers/CenterCreate';
import { CourseShow } from './Entity/Courses/CourseShow';
import { CourseEdit } from './Entity/Courses/CourseEdit';
import { AdminLayout } from './AdminLayout/AdminLayout';

export const App = () => (
    <HydraAdmin 
        layout={AdminLayout} 
        entrypoint={import.meta.env.VITE_API_URL} dataProvider={dataProvider}>
        <ResourceGuesser 
            name='courses' list={CoursesList} create={CourseCreate} show={CourseShow} edit={CourseEdit}
            />
        <ResourceGuesser name='centers' list={CentersList} create={CenterCreate} />
        <ResourceGuesser name='users' />
        <ResourceGuesser name='levels' />
    </HydraAdmin>
);

    