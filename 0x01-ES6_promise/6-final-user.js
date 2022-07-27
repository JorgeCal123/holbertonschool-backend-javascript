import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
//import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.all([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((result) => {
        const list2 = []
        result.map((values) => {
            list2.push({value: values.value,});
        })
        return list2;

    })
}
