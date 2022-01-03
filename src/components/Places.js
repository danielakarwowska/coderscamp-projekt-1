  export default class PlacesBox {
     constructor (data, container, taskNumber){
         this.data = data,
         this.container = container,
         this.setPlacesData(taskNumber);
     }
    
    setPlacesData(taskNumber){
        for (const [key, value] of Object.entries(this.data)) {
            key != 'geometry'
            ? (document.getElementById(`${key}${taskNumber}`).innerHTML = value)
            : (document.getElementById(`${key}${taskNumber}`).src = value);
        } 
    }
  }
    