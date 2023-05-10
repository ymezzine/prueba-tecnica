const yup = require('yup');
const ValidationUser = {
  validationAddUser: async (req, res, next) => {
    try {
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        name: yup.string().min(3).required(),
      });

      await schema.validate(req.body).catch(function (err) {
        if (err) {
          next(err);
        }
      });
      next();
    } catch (error) {
      next(error);
    }
  },
};
module.exports = ValidationUser;
