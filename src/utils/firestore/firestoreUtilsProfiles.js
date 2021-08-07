import { db } from "src/boot/firebase";
import { v4 as uuid } from "uuid";

export const add = async data => {
  const id = uuid();
  const createdAt = Date.now();
  const updatedAt = createdAt;

  data = { ...data, id, createdAt, updatedAt };

  // if success response = data
  return new Promise((res, rej) => {
    db.collection("profiles")
      .doc(id)
      .set(data)
      .then(() => res(data))
      .catch(e => rej({ ...e }));
  });
};
