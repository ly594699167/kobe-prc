export default function (el, vnode) {
  const div = document.querySelector('.loading');
  if (vnode.value) {
    if (!div) {
      // 没有loading就创建一个loading
      const divp = document.createElement('div');
      const divs = document.createElement('div');
      divp.classList.add('loading');
      divs.classList.add('center');
      divs.innerHTML = '加载中...';
      // 添加到body中
      divp.appendChild(divs);
      el.appendChild(divp);
    }
  } else if (div) {
    div.remove();
  }
}
