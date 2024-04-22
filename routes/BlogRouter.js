const express = require("express")
const {
    getOneBlogHandler,
    updateBlogHandler,
    deleteBlogHandler,
    getAllBlogsHandler,
    createBlogHandler,
    findBlogByAuthorHandler,
    filterByAuthorAndYearHandler,
} = require("../handlers/BlogHandler.js")

const blogRouter = express.Router()



blogRouter
.route('/api/v1/blogs')
.get(getAllBlogsHandler)
.post(createBlogHandler)

blogRouter
.route("/api/v1/blog/:blogId")
.get(getOneBlogHandler)
.patch(updateBlogHandler)
.delete(deleteBlogHandler)




blogRouter
.route("/api/v1/blogs/author/:author")
.get(findBlogByAuthorHandler)


blogRouter
.route("api/v1/author/:year")
.get(filterByAuthorAndYearHandler)

module.exports = blogRouter