import Hello from './components/hello';
import UserList from './components/user.list';
import UserForm from './components/user.form';
import Layout from './components/layout';

const root = document.body;

m.route.prefix('#');
m.route(root, '/hello', {
  '/hello': {
    render: () => {
      return <Layout><Hello /></Layout>
    },
  },
  '/userlist': {
    render: () => {
      return <Layout><UserList /></Layout>
    },
  },
  '/useredit/:id': {
    render: (vnode) => {
      return <Layout><UserForm id={vnode.attrs.id} /></Layout>
    },
  },
});
