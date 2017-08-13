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
}

export default User;
