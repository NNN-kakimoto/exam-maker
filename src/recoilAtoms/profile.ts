import { Profile as LiffProfile } from '@liff/get-profile';
import { atom } from 'recoil';

export type AuthenticatedProfile = {
  status: 'authenticated';
  id: string;
  lineUid: LiffProfile['userId'];
  displayName?: LiffProfile['displayName'];
  pictureUrl?: LiffProfile['pictureUrl'];
  statusMessage?: LiffProfile['statusMessage'];
  createdAt: string;
  updatedAt: string;
};

export type UnauthenticatedProfile = {
  status: 'unauthenticated';
};

export type Profile = AuthenticatedProfile | UnauthenticatedProfile;

export const profileState = atom<Profile>({
  key: 'profile',
  default: <UnauthenticatedProfile>{
    status: 'unauthenticated',
  },
});
