const fs = require("fs");
const pickle = require("pickle");
const path = require("path");

// Route handler function
export const handleRecommendation =  async (req, res) => {
  try {
    const query = req.query.query; // Get the user's query from the request query params
    const n = parseInt(req.query.n); // Get the number of recommendations to return from the request query params

    // Load the pickle file of the NLP model
    const modelPath = path.join("../model/model.pickle");
    const model = pickle.load(fs.readFileSync(modelPath));

    // Use the model to make predictions on the user's query
    const recommendations = model.recommend_destinations(query, n);

    // Return the top n recommended destinations as a JSON response
    res.status(200).json(recommendations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

