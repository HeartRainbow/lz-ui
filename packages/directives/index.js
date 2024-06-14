import drag from './drag';
import resize from './resize';

const directives = {
  drag,
  resize
};

export {
  drag,
  resize
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key]);
    });
  }
};
