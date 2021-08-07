class indexer {
  constructor(obj) {
    this.obj = obj;
    this.indexed = {};
    return this;
  }

  on(key) {
    const entries = Object.entries(this.obj);
    const indexed = {};

    entries.forEach(([id, obj1]) => (indexed[obj1[key]] = obj1));
    this.indexed = indexed;
    return indexed;
  }
}

class grouper {
  constructor(obj) {
    this.obj = obj;
    this.indexed = {};
    this.orderKey;

    return this;
  }

  orderValuesBy(orderKey) {
    this.orderKey = orderKey;
  }

  by(key) {
    const entries = Object.entries(this.obj);
    const indexed = {};

    entries.forEach(([id, obj1]) => (indexed[obj1[key]] = {}));
    entries.forEach(([id, obj1]) => {
      indexed[obj1[key]][id] = obj1;
    });

    if (this.orderKey) {
      Object.entries(indexed).forEach(([id, obj1]) => {
        indexed[id] = Object.values(obj1).sort(
          (a, b) => a[this.orderKey] - b[this.orderKey]
        );
      });
    }

    this.indexed = indexed;
    return indexed;
  }

  on(key) {
    return this.by(key);
  }
}

class joiner {
  constructor(parents) {
    this.parents = parents;
    this.children = {};
    this.newObj = {};
    this.orphans = {};
    this.joinKey = "data";

    return this;
  }

  with(children) {
    this.children = children;

    return this;
  }

  on(joinKey) {
    this.joinKey = joinKey;
    return this;
  }

  whereIdMatches(childKey) {
    const joinKey = this.joinKey;
    const newObj = {};

    const parentEntries = Object.entries(this.parents);
    const groupedChildren = group(this.children).on(childKey);

    parentEntries.forEach(([parentId, parentVal]) => {
      let childGroup = groupedChildren[parentId] ?? {};
      const joinObject = { [joinKey]: childGroup };

      newObj[parentId] = { ...parentVal, ...joinObject };
    });

    this.newObj = newObj;
    return newObj;
  }
}

const populater = params => {};
export const index = obj => new indexer(obj);
export const group = obj => new grouper(obj);
export const join = obj => new joiner(obj);
