import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.catigores
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.catigores
)

export const selectCatigoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log(categories);
        const categoryMap = categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }
            , {});
        return categoryMap;
    }
)