import Added from "../model/addItem.js";

export const addItem = async (req, res) => {
  try {
    console.log(req.body);
    // res.status(200).json(req.body);
  } catch (error) {
    console.log(error.message);
  }
};
