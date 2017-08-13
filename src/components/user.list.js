import User from '../models/user';

let dragging;

function handleDragStart(event) {
  event.dataTransfer.effectAllowed = 'move';
  dragging = parseInt(event.target.dataset.id);
};

function handleDragOver(event) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  return false;
}

function handleDrop(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  const dropPoint = parseInt(event.target.dataset.id);
  if (dragging !== dropPoint) {
    User.replace(dragging, dropPoint);
  }
  return false;
};

const UserList = {
  oninit: User.loadList,
  view: () => {
    return <div className="user-list">
      {User.list.map((user) => {
        return <a className="user-list-item"
          data-id={user.id}
          href={`#/useredit/${user.id}`}
          draggable="true"
          ondragstart={handleDragStart}
          ondragover={handleDragOver}
          ondrop={handleDrop}>{user.firstName} {user.lastName}</a>
      })}
      <button type="button" onclick={User.reverse}>Reverse</button>
    </div>
  },
};

export default UserList;
