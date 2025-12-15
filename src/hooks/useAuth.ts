// src/hooks/useAuth.ts
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  deleteUser,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

export type AuthPersistence = "local" | "session";

async function applyPersistence(mode: AuthPersistence = "local") {
  await setPersistence(
    auth,
    mode === "local" ? browserLocalPersistence : browserSessionPersistence
  );
}

async function upsertUser(uid: string) {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(
    doc(db, "users", uid),
    {
      uid,
      email: user.email ?? "",
      displayName: user.displayName ?? "",
      photoURL: user.photoURL ?? "",
      providerId: user.providerData[0]?.providerId ?? "",
      updatedAt: serverTimestamp(),
      // createdAt is set only if missing because merge:true won’t overwrite existing
      createdAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export function useAuth() {
  const signUp = async (
    email: string,
    password: string,
    options?: {
      displayName?: string;
      persist?: AuthPersistence;
      sendVerification?: boolean;
    }
  ) => {
    await applyPersistence(options?.persist);

    const cred = await createUserWithEmailAndPassword(auth, email, password);

    if (options?.displayName) {
      await updateProfile(cred.user, { displayName: options.displayName });
    }

    await upsertUser(cred.user.uid);

    if (options?.sendVerification) {
      await sendEmailVerification(cred.user);
    }

    return cred.user;
  };

  const signIn = async (
    email: string,
    password: string,
    persist: AuthPersistence = "local"
  ) => {
    await applyPersistence(persist);
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await upsertUser(cred.user.uid);
    return cred.user;
  };

  const signInWithGoogle = async (persist: AuthPersistence = "local") => {
    await applyPersistence(persist);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    const cred = await signInWithPopup(auth, provider);
    await upsertUser(cred.user.uid);
    return cred.user;
  };

  const logout = async () => {
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = async (data: { displayName?: string; photoURL?: string }) => {
    if (!auth.currentUser) throw new Error("Not authenticated");
    await updateProfile(auth.currentUser, data);
    await upsertUser(auth.currentUser.uid);
  };

  const changeEmail = async (email: string) => {
    if (!auth.currentUser) throw new Error("Not authenticated");
    await updateEmail(auth.currentUser, email);
  };

  const changePassword = async (password: string) => {
    if (!auth.currentUser) throw new Error("Not authenticated");
    await updatePassword(auth.currentUser, password);
  };

  const reauthenticate = async (email: string, password: string) => {
    if (!auth.currentUser) throw new Error("Not authenticated");
    const cred = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, cred);
  };

  const deleteAccount = async () => {
    if (!auth.currentUser) throw new Error("Not authenticated");
    await deleteUser(auth.currentUser);
  };

  return {
    signUp,
    signIn,
    signInWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    changeEmail,
    changePassword,
    reauthenticate,
    deleteAccount,
  };
}
