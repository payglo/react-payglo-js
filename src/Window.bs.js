// Generated by ReScript, PLEASE EDIT WITH CARE


function iframePostMessage(iframeRef, message) {
  iframeRef.current.contentWindow.postMessage(JSON.stringify(message), "*");
}

export {
  iframePostMessage ,
}
/* No side effect */
