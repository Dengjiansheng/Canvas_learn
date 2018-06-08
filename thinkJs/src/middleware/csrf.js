// module.exports = options => {
//   return (ctx, next) => {
//     console.log('middleware_csrf');
//     const startTime = Date.now();
//     let err = null;
//     // 调用 next 统计后续执行逻辑的所有时间
//     return (async() => {
//       await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(
//           );
//         }, 1000);
//         return next().catch(e => {
//           err = e; // 这里先将错误保存在一个错误对象上，方便统计出错情况下的执行时间
//         }).then(() => {
//           const endTime = Date.now();
//           console.log(`request exec time: ${endTime - startTime}ms`);
//           if (err) return Promise.reject(err); // 如果后续执行逻辑有错误，则将错误返回
//         });
//       });
//     })();
//   };
// };
module.exports = options => {
  return (ctx, next) => {
    return (async() => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          ctx.state.x = 1;
          resolve();
        }, 1000);
      });
      return next();
    })();
  };
};
