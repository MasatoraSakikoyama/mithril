const Layout = {
  view: (vnode) => {
    return <main className="layout">
      <nav className="menu">
        <ul>
          <li><a href="#/hello">Hello</a></li>
          <li><a href="#/userlist">UserList</a></li>
        </ul>
      </nav>
      <section>{vnode.children}</section>
    </main>
  },
};

export default Layout;
