const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const Blog = require("../models/blog");
const Comment = require("../models/comments");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/uploads/`);
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

//Route to render Blog-Form(Add New Blog)
router.get("/add-new", (req, res) => {
  return res.render("addBlogs", {
    user: req.user,
  });
});

//showcasing the blog( dynamic routing)
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments=await Comment.find({blogId:req.params.id}).populate('createdBy');
  return res.render("blog", {
    blog,
    user: req.user,
    comments
  });
});

//Route to add new blog
router.post("/add-new", upload.single("coverImage"), async(req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const {title,body}=req.body;
  const blog=await Blog.create({
    title,
    body,
    coverImageURL:`/uploads/${req.file.filename}`,
    createdBy:req.user._id
  });
  return res.redirect(`/blog/${blog._id}`);
});


//Handle Comments for the blog
router.post("/comment/:blogId", async (req, res) => {
  const comment=await Comment.create({
    content:req.body.content,
    blogId:req.params.blogId,
    createdBy:req.user._id
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});


module.exports = router;
