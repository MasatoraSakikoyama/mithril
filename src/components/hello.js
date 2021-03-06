let count = 0;
function increment() {
  m.request({
    method: 'PUT',
    url: '//rem-rest-api.herokuapp.com/api/tutorial/1',
    data: {count: count+1},
    withCredentials: true,
  })
  .then((success) => {
    count = parseInt(success.count);
  });
};

const Hello = {
  view: () => {
    return <main>
      <h1 class="title">Hello World!</h1>
      <button onclick={increment}>{count}ボタン!</button>
    </main>
  },
};

export default Hello;
