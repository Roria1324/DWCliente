"use strict";

const validateProductName = (name) => {
  if (!name) return false;
  if (name.trim().length < 4) return false;

  return true;
};

const validateProductPrice = (price) => {
  const num = Number(price);
  if (num < 0) return false;
  if (isNaN(num)) return false;
  if (!num) return false;

  return true;
};

const validateProductWeigth = (weight) => {
  const num = Number(weight);
  if (num < 0) return false;
  if (isNaN(num)) return false;
  if (!num) return false;

  return true;
};

const validateProfileName = (name) => {
  if (!name) return false;
  if (!name.trim()) return false;
  return true;
};

const validateAllProfile = (formData) => {
  let error = {};

  if (!validateProfileName(formData.full_name)) {
    error.full_name = "Name cannot be empty.";
  }

  return error;
};

const validateAllProducts = (product) => {
  let error = {};

  if (!validateProductName(product.name)) {
    error.name = "Product name must be at least 4 characters long.";
  }

  if (!validateProductPrice(product.price)) {
    error.price = "Price must be a positive number.";
  }

  if (!validateProductWeigth(product.weight)) {
    error.weight = "Weight must be a positive number.";
  }

  return error;
};

export { validateAllProducts, validateAllProfile };
