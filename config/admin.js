module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b991f612921a32f0e4fa7413ca71653'),
  },
});
