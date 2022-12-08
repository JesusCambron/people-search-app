import React, { useContext } from "react";
import PeopleContext from "../context/people/PeopleContext";
import Loader from "./Loader";
import PeopleItem from "./PeopleItem";

const PeopleList = () => {
  const { people, isLoading } = useContext(PeopleContext);
  return (
    <section className="people-found-container">
      {!isLoading ? (
        <>
          {people ? (
            <>
              {!people.length ? (
                <>
                  <h2 className="ta-center">No people finded</h2>
                </>
              ) : (
                <>
                  <h2 className="ta-center">People found</h2>
                  {people.map((item, index) => (
                    <PeopleItem key={index} item={item} />
                  ))}
                </>
              )}
            </>
          ) : (
            <>
              <h2 className="ta-center">Please type a name to find a people</h2>
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default PeopleList;
