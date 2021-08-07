import { db, firebaseAuth } from "../../boot/firebase";

export const fetchUserById = id => {
  return new Promise((res, rej) => {
    db.collection("users")
      .doc(id)
      .get()
      .then(response => res(response.data()))
      .catch(e => rej(e));
  });
};

export const fetchAllUsers = () => {
  return new Promise(async (res, rej) => {
    const response = await db
      .collection("users")
      .get()
      .catch(e => rej(e));

    const users = response.docs.map(doc => doc.data());
    res(users);
  });
};

export const isUserActive = lastActive => {
  const currentValue = lastActive - Date.now() - 15000;
  return currentValue > 0;
};

export const userIsActive = uid => {
  if (uid && !document.hidden) {
    db.collection("users")
      .doc(uid)
      .set({ lastActive: Date.now() }, { merge: true });
  }
};
