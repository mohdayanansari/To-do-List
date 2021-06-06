//TODO: making module-->
exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return today.toLocaleDateString("hi-IN", options);
};

exports.getDay = function () {
  let today = new Date();

  let options = {
    weekday: "long",
  };
  return today.toLocaleDateString("hi-IN", options);
};
