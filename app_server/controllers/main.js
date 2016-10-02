/**
module.exports <<< is how to export a function, in order to access it elsewhere when 
its being 'require' d, you will have to access it by function name; ex: fileVarName.index()
**/
//index is the name of this function
module.exports.index = function (req, res) {
  res.render('index', { title: 'Express' }); 
};