let RouteTitle = '';
let UrlTitle = '';

function setTitle() {
  if (!RouteTitle && !UrlTitle) {
    document.title = 'loading...';
  } else if (!RouteTitle && UrlTitle) {
    document.title = UrlTitle;
  } else if (RouteTitle && !UrlTitle) {
    document.title = RouteTitle;
  } else {
    document.title = `${UrlTitle}-${RouteTitle}`;
  }
}

// 设置路由名字
export function setRouteTitle(title) {
  RouteTitle = title;
  setTitle();
}
// 设置网站名字
export function setUrlTitel(title) {
  UrlTitle = title;
  setTitle();
}
