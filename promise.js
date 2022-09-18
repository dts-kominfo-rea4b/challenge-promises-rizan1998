const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    const arrayResult = [];
    const TheaterIXX = promiseTheaterIXX();
    TheaterIXX.then((result) => {
      result.forEach((element) => {
        if (element.hasil === emosi) {
          arrayResult.push(element.hasil);
        }
      });
    });

    const TheaterVGC = promiseTheaterVGC();
    TheaterVGC.then((result) => {
      result.forEach((element) => {
        if (element.hasil === emosi) {
          arrayResult.push(element.hasil);
        }
      });
      resolve(arrayResult.length);
    });
  });
};

module.exports = {
  promiseOutput,
};
