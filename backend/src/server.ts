import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User, IUser } from './models/User';


passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err: Error | null, user: IUser | null) => { // Specify the types of 'err' and 'user'
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username' });
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password' });
    }
    return done(null, user);
  });
}));



passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err: Error | any, user: IUser | null) => {
    done(err, user);
  });
});
