import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealsList } from "../components/MealsList";
import { Search } from "../components/Search";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = React.useState([]);
  const [filteredMeals, setFilteredMeals] = React.useState([]);
  const { goBack, push } = useHistory();
  const { pathname, search } = useLocation();

  const handleSearch = (str) => {
    setFilteredMeals(
      meals.filter((item) =>
        item.strMeal.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  React.useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
      setFilteredMeals(
        search
          ? data.meals.filter((item) =>
              item.strMeals
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.meals
      );
    });
  }, [name, search]);

  return (
    <>
      <div className="categoryTitle">
        <h1>Category {name}</h1>
        <button className="btn cyan" onClick={goBack}>
          Go Back
        </button>
      </div>
      <Search cb={handleSearch} />

      {!meals.length ? <Preloader /> : <MealsList meals={filteredMeals} />}
    </>
  );
}

export { Category };
