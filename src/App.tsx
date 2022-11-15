import Global from './styles/global';
import { App } from './styles/style';
import { MainRoutes } from './routes';
import { Provider } from './context';

function Systeam36() {
  return (
    <Provider>
      <App>
        <Global />
        <MainRoutes />
      </App>
    </Provider>



  );
}

export default Systeam36;
