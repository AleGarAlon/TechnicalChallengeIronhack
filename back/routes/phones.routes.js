const router = require("express").Router();
const phonesData = require("../data/phones.json");

router.get("/", (req, res) => {
  try {
    res.status(200).json(phonesData);
  } catch (error) {
    console.error("Error fetching phones:", error);
    res.status(500).json(error);
  }
});

router.get("/:id", (req, res) => {
    
  try {
    const phoneId = parseInt(req.params.id);
    console.log(phoneId)
    const phone = phonesData.find(phone => phone.id === phoneId);
    
    if (phone) {
      res.status(200).json(phone);
    } else {
      res.status(404).json({ message: "Phone not found" });
    }
  } catch (error) {
    console.error("Error fetching phone:", error);
    res.status(500).json(error);
  }
});

module.exports = router;





