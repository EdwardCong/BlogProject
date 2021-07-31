import { connectToDatabase } from "../../util/mongodb"

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const data = req.body;
  const response = db.collection("posts").insertOne(data);
  res.status(200).json({success: true, post: response})
}