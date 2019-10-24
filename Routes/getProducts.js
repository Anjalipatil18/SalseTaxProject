app.get('/getCourses',(req,res)=>{
    knex.select('*').from('courses').then((data)=>{
      res.send(data)
    })
  })
  
  //Get courses By id....
  app.get('/getCourses/:id',(req,res)=>{
    knex.select('*').from('courses').where({'id':req.params.id}).then((data)=>{
      res.send(data)
    })
  })