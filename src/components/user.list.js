import User from '../models/user';

const UserList = {
  oninit: User.loadList,
  view: () => {
    return <div className="user-list">
      {User.list.map((user) => {
        return <a className="user-list-item" href={`#/useredit/${user.id}`}>{user.firstName} {user.lastName}</a>
      })}
    </div>
  },
};

export default UserList;
