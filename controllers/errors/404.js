exports.error404 = (req, res, next)=>{
  res.status(404).send('Sorry Mate the page can\'t be found');
}