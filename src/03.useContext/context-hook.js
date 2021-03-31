import React, { useContext } from 'react'

import { UserContext, ThemeContext } from '../App'

export default function ContextHook(props) {

  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user);
  console.log(theme);

  return (
    <div>
      <h2>ContextHook</h2>
    </div>
  )
}
