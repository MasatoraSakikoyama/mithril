const User = {
  list: [],
  loadList: () => {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true,
    })
    .then((success) => {
      User.list = success.data;
    });
  },
  reverse: () => {
    User.list = User.list.reverse();
  },
  current: {},
  load: (id) => {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users/:id',
      data: {id: id},
      withCredentials: true,
    })
    .then((success) => {
      User.current = success;
    });
  },
  save: () => {
    return m.request({
      method: 'PUT',
      url: 'https://rem-rest-api.herokuapp.com/api/users/:id',
      data: User.current,
      withCredentials: true,
    });
  },
  replace: (from, to) =>  {
    let f;
    let t;
    User.list.forEach((v, i) => {
      if (v.id === from) {
         f = {
          index: i,
          value: v,
        };
      }
      if (v.id === to) {
        t = {
          index: i,
          value: v,
        };
      }
    });
    User.list.splice(f.index, 1, t.value);
    User.list.splice(t.index, 1, f.value);
  },
}

export default User;
