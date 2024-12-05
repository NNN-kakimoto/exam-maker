import { Profile as LiffProfile } from '@liff/get-profile';
import { atom } from 'recoil';

export type AuthenticatedProfile = {
  status: 'authenticated';
  userId?: LiffProfile['userId'];
  displayName?: LiffProfile['displayName'];
  pictureUrl?: LiffProfile['pictureUrl'];
  statusMessage?: LiffProfile['statusMessage'];
};

export type UnauthenticatedProfile = {
  status: 'unauthenticated';
  userId: null;
  displayName: null;
};

export type Profile = AuthenticatedProfile | UnauthenticatedProfile;

export const profileState = atom<Profile>({
  key: 'profile',
  default: <UnauthenticatedProfile>{
    status: 'unauthenticated',
    userId: null,
    displayName: null,
  },
});
