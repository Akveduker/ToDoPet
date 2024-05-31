import routes from '@client-utils/constants/routes';
import Desk from '@components/Desk/Desk';
import LoginForm from '@components/LoginForm/LoginForm';
import RegistrationForm from '@components/RegistrationForm/RegistrationForm';
import AuthPage from '@pages/AuthPage/AuthPage';
import Main from '@pages/Main/Main';
import NotFound from '@pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <Routes>
      <Route path={`${routes.auth}`} element={<AuthPage />}>
        <Route path={`${routes.login}`} element={<LoginForm />} />
        <Route path={`${routes.registration}`} element={<RegistrationForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Main />}>
        <Route path=":deskId" element={<Desk />} />
      </Route>
    </Routes>
  </div>
);

export default App;
