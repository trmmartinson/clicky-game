fs = require("fs"); //syntax?
path = require("path");




var basename = path.basename(module.filename);

fs.readdir("../public/images", (err, files) => {
  files.forEach(file => {
    console.log("bob"+ file);
  });
});

fs.readdirSync("../public/images")
  .filter(function(file) {
    return (
      //file.indexOf(".") !== 0 && file !== basename && file.slice(-3) != ".jpg"
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".jpg"
    );
  })
  .forEach(function(file) {
    console.log(file);
    //var image = sequelize.import(path.join(__dirname, file));
  });

