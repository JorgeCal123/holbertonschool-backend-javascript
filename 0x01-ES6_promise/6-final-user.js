import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photoProfile = uploadPhoto(fileName);

    return Promise.allSettled([signUp, photoProfile])
    .then((result) => {
        const promises = result.map((value) => {
          if (value.status === 'fulfilled') {
            return value; }
          return { status: value.status, value: `${value.reason}` };
        });
        return promises;
      });}
