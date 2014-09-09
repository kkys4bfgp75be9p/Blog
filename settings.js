/**
 * Created by MZH on 09/09/14.
 */




module.exports = function(app){

  console.log(app.get('env'));

  return {
    cookieSecret: 'myblog',
    db: 'blog',
    host: (app.get('env') === 'development')?'localhost':'172.31.30.244'
  };
}


