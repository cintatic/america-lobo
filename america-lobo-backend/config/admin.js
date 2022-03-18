module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f726a9793e55e49d4004ef6954b7babe'),
  },
});
