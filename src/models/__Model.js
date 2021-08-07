import buildObjectFromTemplate from "../utils/buildObjectFromTemplate";
import cloneDeep from "lodash/cloneDeep";

class Model {
  constructor(props) {
    const { initData, name } = props;

    this.name = name;
    this.initData = initData;
  }

  fillTemplate(data) {
    return buildObjectFromTemplate(this.initData, data);
  }

  get blank() {
    return cloneDeep(initData);
  }
}
export default Model;
