
import PropTypes from 'prop-types';
import { UserProvider } from './UserContext';
import { TaskProvider } from './TaskContext';

const Providers = ({children}) => {
  return (
    <UserProvider>
      <TaskProvider>
        {children}
      </TaskProvider>
    </UserProvider>
  )
}
Providers.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Providers