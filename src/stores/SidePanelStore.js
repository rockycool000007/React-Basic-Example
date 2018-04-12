import AppDispatcher from "../dispatcher/AppDispatcher";
import { EventEmitter } from "events";

let _value = "";
const CHANGE_EVENT = "change";

function updateValue(value) {
  _value = value;
}

class SidePanelStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = AppDispatcher.register(payload => {
      updateValue(payload.action.item);
      this.emitChange();
      return true;
    });
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  getValue() {
    return _value;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default new SidePanelStore();
