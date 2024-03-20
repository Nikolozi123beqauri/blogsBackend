const database = require("../mock/database.js")

exports.getOneBlogHandler = (req, res) => {


    for (let blog of database.blogs) {
        if (blog.id === Number(req.params.blogId)) {
            res.json({
                status: "succes",
                data: {
                    blog
                }
            })
            return;
        }
    }
    res.status(404).json({
        status:"error",
        data: {
            message:"Could not find blog with that id"
        }
    })
}






exports.updateBlogHandler = (req, res) => {
    let index = 0
    for (let oneblog of database.blogs) {
        if (oneblog.id === Number(req.params.blogId)) {
            oneblog = {
                ...oneblog,
                ...req.body
            }
            database.blogs[index] = oneblog
        }
        index++
    }
}






exports.deleteBlogHandler = (req, res) => {
    for (let i = 0; i < database.blogs.length; i++) {
        const blog = database.blogs[i]
        if (blog.id === Number(req.params.id)) {
            //უნდა წავშალოთ
            database.blogs.splice(i, 1)
            res.end("deleted succesfully")
            return
        }
    }
    res.end("could not find blog")
}

exports.getAllBlogsHandler = (req, res) => {
    res.json({
        status: 'succes',
        data: {
            blogs: database.blogs
        }
    })
}







exports.putBlogHandler  = (req, res) => {
    const blogId = Number(req.params.blogId);
    const updatedBlog = req.body;

    for (let i = 0; i < database.length; i++) {
        if (database[i].id === blogId) {
            database[i] = {
                ...database[i],
                ...updatedBlog
            }; 
            return res.json({
                status: "success",
                data: {
                    message: "Blog updated successfully"
                }
            });
        }
    }
}






exports.createBlogHandler = (req, res) => {
    console.log(req.body);
    if (req.body != null && req.body != null && req.body.thumbnail != null) {
        const newblog = {
            id: database[database.length - 1].id + 1,
            name: req.body.name,
            thumbnail: req.body.thumbnail,
            text: req.body.text,
            author: req.body.author.name + "" + req.body.author.surname,
            year: req.body.year,
            rating: req.body.rating,
            isClassic: (req.body.year < 1990 && req.body.rating > 8)
        }



        database.push(newblog)

        res.status(201).json({
            status:"succes",
            data: {}
        })
    } else {
        res.status(400).json({
            status:"error",
            data:{
                message:"Missing parametres"
            }
        })
    }
}






exports.findBlogByAuthorHandler = (req, res) => {
    const foundBlogs = [];

    for(let blog of database.blogs) {
        if(blog.author === req.params.author) {
            foundBlogs.push(blog)
        }
    }
    res.json({
        status:"succes",
        data:{
            blog:foundBlogs,
        }
    })
}



exports.filterByAuthorAndYearHandler = (req ,res) => {
    let blogs = []
    for(let blog of database.blogs) {
        if(blog.author === req.params.author && blog.year === Number(req.params.year)) {
            blogs.push(blog)
        }
        res.json({
            status: "succes",
            data: {
                blogs
            }
    })
    }
}