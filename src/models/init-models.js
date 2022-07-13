var DataTypes = require("sequelize").DataTypes;
var _Books = require("./Books");
var _Category = require("./Category");
var _Kind = require("./Kind");
var _List = require("./List");

function initModels(sequelize) {
  var Books = _Books(sequelize, DataTypes);
  var Category = _Category(sequelize, DataTypes);
  var Kind = _Kind(sequelize, DataTypes);
  var List = _List(sequelize, DataTypes);


  return {
    Books,
    Category,
    Kind,
    List,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
