// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

import { useState } from "react";

// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

// Exempel på användning:

import { useEffect } from "react";

//placeholder for the actual link. I guess this (userFetchedData in this case) is a custom hook?
function useFetchData(fetchedLink) {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(false);

  // State to store the fetched data (initially an empty array)
  const [data, setData] = useState([]);

  // Asynchronous function to fetch data from the provided URL
  async function getData() {
    const response = await fetch(fetchedLink);
    const data = await response.json();
    setData(data);
  }

  // useEffect to trigger data fetching when the component mounts
  useEffect(() => {
    // Set loading to true before fetching data
    setIsLoading(true);

    try {
      // Attempt to fetch data
      getData();
    } catch (error) {
      // Log any errors that may occur during data fetching
      console.log(error);
    }

    // Set loading to false after fetching data
    setIsLoading(false);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Return an object with the fetched data and loading status
  return { data, isLoading };
}

// Component to display a list of users using the useFetchData hook
function UserList() {
  // Destructure data and isLoading from the useFetchData hook
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Display a loading message while data is being fetched
  if (isLoading) return <div>Loading...</div>;

  // Display the list of users when data has been fetched
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Main App component that includes the UserList component
function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

// Export the App component as the default export
export default App;
