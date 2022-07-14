const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const { uniqueID } = res.cookies;

    const verified = await sessionController.findOne({ cookieID: uniqueID });

    if(!verified) {
      res.redirect('/signup');
    } else {
      return next();
    }
  } catch (err) {
    return next({
      log: `error caught in sessionController.isLoggedIn : ${err}`,
      message: {err: 'an error occured while attempting to verify a session'}
    })
  }
};

sessionController.startSession = async (req, res, next) => {
  try {
    const { id } = res.locals.user._id;

    await sessionController.create({ cookieId: id});
    return next();
  } catch (err) {
    return next({
      log: `error caught in sessionController.startSession : ${err}`,
      message: {err : 'an error occurred while attempting to start a session'}
    })
  }
};

module.exports = sessionController;