// https://github.com/espruino/Espruino/issues/1363
if (eval('process.version') === '1v96') {
  Promise._resolve = Promise.resolve;
  Promise.resolve = function (valueOrThenable) {
    let isThenable;
    try {
      isThenable = typeof valueOrThenable.then === 'function';
    } catch (e) {
      isThenable = false;
    }
    if (isThenable) {
      return new Promise((resolve, reject) => valueOrThenable.then(resolve, reject));
    } else {
      return Promise._resolve(valueOrThenable);
    }
  };
}
