import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const healthcheck = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Server is running"));
});

const healthcheckError = asyncHandler(async (req, res) => {
  return res.status(500).json(new ApiError(500, "Server is not running"));
});

export { healthcheck, healthcheckError };
