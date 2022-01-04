export default class PlacesBox {
  constructor(data, taskNumber) {
    // this.data = data;
    // this.setPlacesData(taskNumber);
  }

  setPlacesData(data, taskNumber) {
    for (const [key, value] of Object.entries(data)) {
      key != 'geometry'
        ? (document.getElementById(`${key}${taskNumber}`).innerHTML = value)
        : (document.getElementById(`${key}${taskNumber}`).src = value);
    }
  }
}
