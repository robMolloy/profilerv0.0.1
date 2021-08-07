import cloneDeep from 'lodash/cloneDeep';
import isObject from 'lodash/isPlainObject';

const buildObjectFromTemplate = (template, values = {}) => {
  let newObject = {};
  values = cloneDeep(values);

  Object.keys(template).forEach((key) => {
    const keyExists = values.hasOwnProperty(key);

    let newValue = !keyExists ? template[key] : values[key];
    if (isObject(template[key]))
      newValue = buildObjectFromTemplate(template[key], values[key]);

    newObject[key] = newValue;
  });

  return newObject;
};

export default buildObjectFromTemplate;
