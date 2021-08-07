import Store from "./__Store";
import * as utils from "../../utils/firestore/firestoreUtilsProfiles";

const store = new Store({
  dbName: "profiles",
  own: false,
  requiresAuthentication: true,
  where: [],
  utils
});

store.addActions = {};

export default store.store;
