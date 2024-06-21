//routes/aggregatorRoutes.js
import express from "express";

const createRouter = (aggregatorController) => {
  const router = express.Router();

  router.get(
    "/tariffsByDistrict/:id",
    aggregatorController.getTariffsByDistrictId
  );
  router.get(
    "/providersByDistrict/:id",
    aggregatorController.getProvidersByDistrictId
  );

  router.get("/tariffsByHouse/:id", aggregatorController.getTariffsByHouse);
  router.get("/providersByHouse/:id", aggregatorController.getProvidersByHouse);
  router.get("/fullInfoByHouse/:id", aggregatorController.getFullInfoByHouse);

  return router;
};

export default createRouter;