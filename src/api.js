import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const res = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await res.json();
};

const getAllCategories = async () => {
  const res = await fetch(API_URL + "categories.php");
  //   const res = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
  return await res.json();
};

const getFilteredCategory = async (catName) => {
  const res = await fetch(API_URL + "filter.php?c=" + catName);
  return await res.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
