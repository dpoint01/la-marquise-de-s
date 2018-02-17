const passport = require('passport');

module.exports = app => {
  // authenticate with google oAuth route handler
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // callback route handler with oAuth code for user profile
  app.get('/auth/google/callback', passport.authenticate('google'));

  // route to see current user logged in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // route to log out user with passport logout() method
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
