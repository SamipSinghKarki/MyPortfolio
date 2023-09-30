
// This function handles the request and render the index with hello world title.


exports.render = function (req, res){
    res.render('index', 
    {title:'Hello World'
})
};

