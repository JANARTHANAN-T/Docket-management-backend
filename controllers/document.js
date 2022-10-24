const Document = require("../models/document.js");
const User = require("../models/user.js");

module.exports.getDocument = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findById( user_id ).populate("document");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("Internal Server error");
  }
};

module.exports.addDocument = async (req, res) => {
  try {
    const { user_id } = req.params;
    const document = new Document({ ...req.body });
    const user = await User.findById(user_id);
    user.document.push(document._id);
    await document.save();
    await user.save();
    const userDocs = await User.findById( user_id ).populate("document");
    res.status(200).json(userDocs);
  } catch (err) {
    res.status(500).json({ msg: "Internal Sever Error" });
  }
};

module.exports.showDocument = async (req, res) => {
  try {
    const { doc_id } = req.params;
    const document = await Document.findById(doc_id);
    res.status(200).json(document);
  } catch (err) {
    res.status(500).json({ msg: "Internal Sever Error" });
  }
};
