import React from 'react'
import { Link } from 'react-router-dom'

function Ask() {
    const username = "user"
  return (
    <div>
      <Link to={{pathname: '/login',search : "user" }}>User</Link>
      <Link to='/login'>Admin</Link>
    </div>
  )
}

export default Ask
