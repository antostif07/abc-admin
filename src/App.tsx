
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin';
import { dataProvider } from './dataProvider';
import { CoursesList } from './Entity/Courses/CoursesList';
import { CourseCreate } from './Entity/Courses/CourseCreate';
import { CentersList } from './Entity/Centers/CentersList';
import { CenterCreate } from './Entity/Centers/CenterCreate';
import { CourseShow } from './Entity/Courses/CourseShow';
import { CourseEdit } from './Entity/Courses/CourseEdit';
import { AdminLayout } from './AdminLayout/AdminLayout';
import { LevelCreate } from './Entity/Levels/LevelCreate';
import { LevelShow } from './Entity/Levels/LevelShow';
import { ChapterCreate } from './Entity/Chapters/ChapterCreate';
import { ChapterShow } from './Entity/Chapters/ChapterShow';
import { useCreate } from 'react-admin';
import { UserCreate } from './Entity/Users/UserCreate';
import { ImageCreate } from './Entity/Images/ImageCreate';
import { ImagesList } from './Entity/Images/ImagesList';

export const App = () => (
    <HydraAdmin 
        layout={AdminLayout} 
        entrypoint={import.meta.env.VITE_API_URL} dataProvider={dataProvider}>
        <ResourceGuesser 
            name='courses' list={CoursesList} create={CourseCreate} show={CourseShow} edit={CourseEdit}
            />
        <ResourceGuesser name='centers' list={CentersList} create={CenterCreate} />
        <ResourceGuesser name='users' create={UserCreate} />
        <ResourceGuesser name='levels' create={LevelCreate} show={LevelShow} />
        <ResourceGuesser name='chapters' create={ChapterCreate} show={ChapterShow}/>
        <ResourceGuesser name='images' create={ImageCreate} list={ImagesList} />
    </HydraAdmin>
);

    