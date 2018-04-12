import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

const AppActions = {
  addItem(item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item > 200 ? "Very High" : item < 100 ? "Very Low" : "Great"
    });
  }
};

export default AppActions;
