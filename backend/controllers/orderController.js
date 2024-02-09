import Order from "../models/OrderModel";
import asyncHandler from "../middleware/asyncHandler";

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Add order..");
});

// @desc Get login user orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders..");
});

// @desc Get order by ID
// @route Get /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("Get order by Id..");
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPay = asyncHandler(async (req, res) => {
    res.send("Update order to paid..");
  });

  // @desc Update order to delivered
// @route GET /api/orders/:id/deliver
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send("Update order to delivered...");
  });
