export default function isAuth({ app, redirect }) {
  const hasToken = !!app.$apolloHelpers.getToken();
  if (!hasToken) {
    redirect('/signin');
  }
}
