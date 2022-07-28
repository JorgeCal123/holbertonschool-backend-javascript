import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {

  let info = { photo: null, user: null };

  try {
    info.photo = await uploadPhoto();
    info.user = await createUser();
  } catch (e) {

  }
  return info;
}
