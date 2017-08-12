const root = document.body;

let count = 0;
function counter() {
  count++;
};

const Hello = {
  view: () => {
    return <main>
      <h1 class="title">Hello World!</h1>
      <button onclick={counter}>{count}ボタン!</button>
    </main>
  }
};

m.mount(root, Hello);
