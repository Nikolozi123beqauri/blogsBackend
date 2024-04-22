
const Blog = require("../models/blogModel.js");

exports.getOneBlogHandler = async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.params.blogId);
    res.json({
      status: "succes",
      data: {
        blog: foundBlog,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      data: error.message,
    });
  }
};

exports.updateBlogHandler = async (req, res) => {
  const updated = await Blog.findOneAndUpdate({
    id: req.params.blogId,
  }, {
    ...req.body
  });
  res.json({
    status:"succes",
    data: {
        blog:updated
    }
  })
};

exports.deleteBlogHandler = async (req, res) => {
    try{
        await Blog.deleteOne({
            id:req.params.blogId
        })
        res.json({
            status:"succes",
            message:"deleted"
    
        })
    }catch(error){
        res.json({
            status:"error",
            message:error
        })
    }
};

exports.getAllBlogsHandler = async (req, res) => {
  const blogs = await Blog.find();
  try {
    res.json({
      status: "succes",
      data: {
        blogs,
      },
    });
  } catch (error) {
    console.log(error);
  }
};



exports.createBlogHandler = async (req, res) => {
  const newBlog = new Blog({
    ...req.body,
  });

  try {
    await newBlog.save();
    res.json({
      succes: true,
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      status: "error",
      data: error.message,
    });
  }
};

exports.findBlogByAuthorHandler = async (req, res) => {
  try {
    const foundBlog = await Blog.find({
      author: req.params.author,
    });
    res.json({
      status: "succes",
      data: {
        blogs: foundBlog,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      data: error.message,
    });
  }
};

exports.filterByAuthorAndYearHandler = async (req, res) => {
    try {
      const foundBlog = await Blog.find({
        author: req.params.author,
        year: req.params.year
      });
      res.json({
        status: "succes",
        data: {
          blogs: foundBlog,
        },
      });
    } catch (error) {
      res.json({
        status: "error",
        data: error.message,
      });
    }
};
