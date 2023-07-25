
/****
 * 
 * Send data to ls
 */

const sendDataLs = (key , data ) => {
     localStorage.setItem(key , JSON.stringify(data));
};

/****
 * 
 * Get data to ls
 */

const getDataLs = (key ) => {

  if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key));
  }
  return [];
};

/****
 * 
 * create alert 
 */
const createAlert = (msg , type = "danger") => {
  return `
    <p class="alert alert-${type} d-flex justify-content-between"> ${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
   </p>
  `
};

/***
 * 
 * time ago function 
 */
const  timeAgoFromTimestamp = (timestamp) => {
  const now = Date.now();
  const seconds = Math.floor((now - timestamp) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const intervalCount = Math.floor(seconds / secondsInUnit);
    if (intervalCount >= 1) {
      return `${intervalCount} ${unit}${intervalCount > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}


