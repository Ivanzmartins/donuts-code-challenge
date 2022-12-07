import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const contextValue = {
    user,
    updateUser,
  };

  const testMemo = useMemo(() => contextValue, [user]);

  return (
    <UserContext.Provider value={testMemo}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
