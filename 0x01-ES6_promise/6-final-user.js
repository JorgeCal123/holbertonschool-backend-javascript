import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const SUU = signUpUser(firstName, lastName);
  const UP = uploadPhoto(fileName);

  return Promise.allSettled([SUU, UP])
    .then((result) => {
      const list = result.map((value) => {
        if (value.status === 'fulfilled') {
          return value; 
        }
        return { status: value.status, value: `${value.reason}` };
      });
      return list;
  });
}
