/* eslint-disable camelcase */
const voyageModel = require("../models/voyageModel");

const voyageController = {
  getAllVoyages: async (req, res) => {
    try {
      const result = await voyageModel.findAllVoyages();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllVoyageByDate: async (req, res) => {
    const { cityStart, cityDestination, DateStart, dateEnd } = req.body;
    try {
      const result = await voyageModel.findAllVoyageByDate(
        cityStart,
        cityDestination,
        DateStart,
        dateEnd
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createOneVoyage: async (req, res) => {
    const {
      id_car,
      id_user,
      cityStart,
      cityDestination,
      DateStart,
      dateEnd,
      seatLeft,
    } = req.body;
    try {
      const result = await voyageModel.createVoyage(
        id_car,
        id_user,
        cityStart,
        cityDestination,
        DateStart,
        dateEnd,
        seatLeft
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = voyageController;
