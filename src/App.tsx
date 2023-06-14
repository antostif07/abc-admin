
import { HydraAdmin } from '@api-platform/admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

export const App = () => (
    <HydraAdmin entrypoint={import.meta.env.VITE_API_URL} dataProvider={dataProvider} />
);

    