import logo from './logo.svg';
import React, {useEffect,useState} from "react"

import './App.css';


const App = () => {
  const [dates, setDates] = useState([])
const fetchUserData = () => {
  fetch("https://date.nager.at/api/v3/PublicHolidays/2023/AT")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setDates(data)
    })
}
useEffect(() => {
  fetchUserData()
}, [])

// return (
//   <div>
//    <p className='name'>Holiday Calender</p>
//   </div>
// );
// }
return (
  <div>
    <div className='datas'>
    {dates.length > 0 && (
      <ul>
        {dates.map(dates => (
          <li key={dates.date}>{dates.date},     {dates.localName},      {dates.name}       {dates.launchYear},     {dates.countryCode},    {dates.fixed}</li>
        ))}
      </ul>
    )}
    {/* {dates.length > 0 && (
      <ul>
        {dates.map(dates => (
          <li key={dates.name}>{dates.name}</li>
        ))}
      </ul>
    )} */}
    </div>
  </div>
);
}
export default App;
