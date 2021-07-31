import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../util/mongodb"

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const post = await db
    .collection("posts")
    .find({ _id: ObjectId(`${req.query.id}`)})
    .toArray()
  res.json(post)
}
