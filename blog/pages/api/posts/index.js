import { connectToDatabase } from "../../../util/mongodb";
import { Post } from "../../../models/Post";



export default async (req, res) => {
  const { db } = connectToDatabase();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await db.collections("posts").find({}).toArray;
        res.status(200).json({ success: true, data: posts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json({ success: true, data: post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    default: 
      res.status(400).json({success: false})
  }
}