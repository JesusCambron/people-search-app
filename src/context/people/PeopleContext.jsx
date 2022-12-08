import { createContext, useEffect, useState } from "react";

const PeopleContext = createContext();

const FILTER_TIME = 2000;
const SERVER_URL = "https://jsonplaceholder.typicode.com";
const initialPeople = null;
const initialName = "";

const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState(initialPeople);
  const [name, setName] = useState(initialName);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Remove spaces at the beginning and end of the name,
    // also if the name has two or more spaces between word
    setName(name.replace(/\s{2,}/, " "));
    setName(name.trim());
    if (!name || name.trim() === "") {
      setPeople(initialPeople);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const filterTimeOut = setTimeout(() => {
      fetch(`${SERVER_URL}/users?name=${name}`)
        .then((response) => response.json())
        .then((data) => {
          setPeople(data);
          setIsLoading(false);
        });
    }, FILTER_TIME);

    return () => {
      clearTimeout(filterTimeOut);
    };
  }, [name]);

  return (
    <PeopleContext.Provider value={{ people, isLoading, setName }}>
      {children}
    </PeopleContext.Provider>
  );
};

export { PeopleProvider };
export default PeopleContext;
