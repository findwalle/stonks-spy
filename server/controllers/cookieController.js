const cookieController = {};

cookieController.setUniqueCookie = (req, res, next) => {
  const { id } = res.locals.user._id;

  res.cookie('uniqueID', id, {httpOnly: true})
  return next();
}

module.exports = cookieController;