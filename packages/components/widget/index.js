// import Widget from './widget.vue'
// import { withInstall } from '../../utils/index.js'

// const UvWidget = withInstall(Widget)

// export default UvWidget


// import { createVNode, render } from 'vue';
// import Widget from './widget.vue';

// const WidgetVNode = (props) => {
//   // 创建一个新的 div 作为挂载点
//   const container = document.createElement('div');
//   document.body.appendChild(container);

//   // 创建 VNode
//   const vnode = createVNode(Widget, {
//     ...props,
//     'onUpdate:modelValue': (value) => {
//       if (value === false) {
//         render(null, container);
//         document.body.removeChild(container);
//       }
//     },
//     onConfirm: () => {
//       if (props.submitCallback && typeof props.submitCallback === 'function') {
//         props.submitCallback();
//       }
//       render(null, container);
//       document.body.removeChild(container);
//     },
//     onCancel: () => {
//       if (props.cancelCallback && typeof props.cancelCallback === 'function') {
//         props.cancelCallback();
//       }
//       render(null, container);
//       document.body.removeChild(container);
//     },
//   });

//   // 渲染 VNode
//   render(vnode, container);
// };

// WidgetVNode.install = (app) => {
//   app.component(Widget.name, WidgetVNode);
// };

// export { WidgetVNode };
// export default WidgetVNode


// import { createVNode, render } from 'vue';
// import Widget from './widget.vue';

// let activeContainer = null;

// const WidgetVNode = (props) => {
//   if (activeContainer) {
//     render(null, activeContainer);
//     document.body.removeChild(activeContainer);
//   }

//   // 创建一个新的 div 作为挂载点
//   const container = document.createElement('div');
//   document.body.appendChild(container);
//   activeContainer = container;

//   // 创建 VNode
//   const vnode = createVNode(Widget, {
//     ...props,
//     modelValue: true, // Ensure the dialog is shown on creation
//     'onUpdate:modelValue': (value) => {
//       if (value === false) {
//         render(null, container);
//         document.body.removeChild(container);
//         activeContainer = null;
//       }
//     },
//     onConfirm: () => {
//       if (props.submitCallback && typeof props.submitCallback === 'function') {
//         props.submitCallback();
//       }
//       render(null, container);
//       document.body.removeChild(container);
//       activeContainer = null;
//     },
//     onCancel: () => {
//       if (props.cancelCallback && typeof props.cancelCallback === 'function') {
//         props.cancelCallback();
//       }
//       render(null, container);
//       document.body.removeChild(container);
//       activeContainer = null;
//     },
//   });

//   // 渲染 VNode
//   render(vnode, container);
// };

// WidgetVNode.install = (app) => {
//   app.component(Widget.name, WidgetVNode);
// };

// export { WidgetVNode };
// export default WidgetVNode;



import { createVNode, render } from 'vue';
import Widget from './widget.vue';

const WidgetVNode = (props) => {
  console.log('props>>>>>>>>>>', props);
  // 创建一个新的 div 作为挂载点
  const container = document.createElement('div');
  document.body.appendChild(container);

  // 创建 VNode
  const vnode = createVNode(Widget, {
    ...props,
    modelValue: true, // Ensure the dialog is shown on creation
    'onUpdate:modelValue': (value) => {
      if (value === false) {
        render(null, container);
        document.body.removeChild(container);
      }
    },
    onConfirm: () => {
      if (props.submitCallback && typeof props.submitCallback === 'function') {
        props.submitCallback();
      }
      render(null, container);
      document.body.removeChild(container);
    },
    onCancel: () => {
      if (props.cancelCallback && typeof props.cancelCallback === 'function') {
        props.cancelCallback();
      }
      render(null, container);
      document.body.removeChild(container);
    },
  });

  // 渲染 VNode
  render(vnode, container);
};

WidgetVNode.install = (app) => {
  app.component(Widget.name, WidgetVNode);
};

export default WidgetVNode;



