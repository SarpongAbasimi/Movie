exports.error404 = (req, res, next)=>{
  res.status(404).render('404page');
}