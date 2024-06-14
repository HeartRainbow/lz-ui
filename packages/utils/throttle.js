/**
 * 节流函数
 * 
 * @param func 待处理函数
 * @param wait 时间间隔
 * @returns 
 */
export function throttle(func, wait) {
    let result;
    let timeout = null;
    let start = new Date().getTime();

    return function () {
        const context = this;
        const args = arguments;
        const end = new Date().getTime();

        clearTimeout(timeout);
        if (end - start > wait) {
            result = func.apply(context, args);
            start = end;
        } else {
            timeout = setTimeout(() => {
                timeout = null;
                result = func.apply(context, args);
            }, wait);
        }
        return result;
    };
}