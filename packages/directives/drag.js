let zIndex = 1;

export default {
    mounted(el, binding, vnode) {
        console.log('已挂载拖拽指令');
        // 如果传递了false就不启用指令，反之true undefined null 不传 则启动
        if (!binding.value && (binding.value ?? "") !== "") return;
        // 拖拽实现
        const odiv = el.parentNode;

        el.onmousedown = (eve) => {
            zIndex++
            odiv.style.zIndex = zIndex; //当前拖拽的在最前面显示
            eve = eve || window.event;
            const mx = eve.pageX; //鼠标点击时的坐标
            const my = eve.pageY; //鼠标点击时的坐标
            const dleft = odiv.offsetLeft; //窗口初始位置
            const dtop = odiv.offsetTop;
            const clientWidth = document.documentElement.clientWidth; //页面的宽
            const oWidth = odiv.clientWidth; //窗口的宽
            const maxX = clientWidth - oWidth; // x轴能移动的最大距离
            const clientHeight = document.documentElement.clientHeight; //页面的高
            const oHeight = odiv.clientHeight; //窗口的高度
            const maxY = clientHeight - oHeight; //y轴能移动的最大距离
            document.onmousemove = (e) => {
                const x = e.pageX;
                const y = e.pageY;
                let left = x - mx + dleft; //移动后的新位置
                let top = y - my + dtop; //移动后的新位置
                if (left < 0) left = 0;
                if (left > maxX) left = maxX;
                if (top < 0) top = 0;
                if (top > maxY) top = maxY;

                odiv.style.left = left + "px";
                odiv.style.top = top + "px";
                odiv.style.marginLeft = 0;
                odiv.style.marginTop = 0;
            };
            document.onmouseup = () => {
                document.onmousemove = null;
            };
        };
    },
    beforeUpdate(el, binding, vnode, prevVnode) {
        console.log('元素更新前', vnode);
        const { ctx } = vnode
        const isShow = ctx.ctx.modelValue
        console.log(isShow);
        if (!isShow) return;
        const odiv = el.parentNode;
        zIndex++
        odiv.style.zIndex = zIndex; //打开时在最前面显示
    },
    // updated(el, binding, vnode, prevVnode) {
    //     console.log('元素更新后',vnode);
    // },
    unmounted(el, binding) {
        console.log('销毁');
    }
}