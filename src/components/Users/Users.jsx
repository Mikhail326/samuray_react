import style from './Users.module.css'

export const Users = ({ follow, unfollow, setUsers, users }) => {

  if(users.length === 0) {
    setUsers([
      {
        id: 1,
        followed: true,
        photo: 'https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png',
        name: 'Jhon',
        location: { country: 'Belarus', city: 'Minsk' }
      },
      {
        id: 2,
        followed: false,
        photo: 'https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png',
        name: 'Mikel',
        location: { country: 'Russsia', city: 'Moskow' }
      }
    ])
  }
  return (
    <div>
      {users.map(el =>  <div key={el.id}>
          <div className={style.photo}>
            <img src={el.photo} alt="" />
          </div>
          <div>
            {el.name}
          </div>
          <div>
            {el.status}
          </div>
          <div>
            {el.location.country}
          </div>
          <div>
            {el.location.city}
          </div>
          <div>
            {el.followed ? <button onClick={() => follow(el.id)}>Follow</button> : <button onClick={() => unfollow(el.id)}>Unfollow</button> }
          </div>
        </div>
      )}
    </div>
  )
}