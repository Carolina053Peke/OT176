module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.user) return next();
    return res.redirect('http://localhost:3000/users/expired');
  },
};
