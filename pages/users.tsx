import React from 'react'

function usersList({users}: any) {
    console.log(users)
  return (
    <div>
        {users.map((user:any) =>(<div key={user.id}>{user.name}</div>))}      
    </div>
  )
}
export default usersList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {
      users:users,
    },
  }
}
