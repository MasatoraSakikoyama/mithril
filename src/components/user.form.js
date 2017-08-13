import User from '../models/user';

function submit(event) {
  event.preventDefault();
  User.save();
};

const UserForm = {
  oninit: (vnode) => {
    User.load(vnode.attrs.id);
  },
  view: () => {
    return <div>
      <form onsubmit={submit}>
        <label className="label">名前</label>
        <input className="input" type="text" placeholder="名前"
          value={User.current.firstName}
          oninput={m.withAttr('value', (value) => {User.current.firstName = value})} />
        <label className="label">苗字</label>
        <input className="input" type="text" placeholder="苗字"
          value={User.current.lastName}
          oninput={m.withAttr('value', (value) => {User.current.lastName = value})} />
        <button className="button" type="submit">保存</button>
      </form>
    </div>
  },
};

export default UserForm;
