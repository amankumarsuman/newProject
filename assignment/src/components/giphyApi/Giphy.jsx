import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoaderComponent } from "../loaderComponent/Loader";
import { GifSearchBox } from "../renderGif/GifSearchBox";
import "../style.css";

const GiphyApi = ({ handleSetData }) => {
  //state for getting input data
  const [search, setSearch] = useState("");

  //state to store input data
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "XYH7yYHPHnI7WFvZJwyD1MVeCO76nvSH",
            limit: 100,
          },
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };

    getData();
  }, []);

  //function for showing data which is getting from api
  const renderGifs = () => {
    if (isLoading) {
      return <LoaderComponent />;
    }
    return currentItems.map((el) => {
      return (
        <div
          onClick={() => handleSetData(el.images.fixed_height.url)}
          key={el.id}
        >
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  //function to show if any error occurs during api call
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);
    setSearch("");

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "XYH7yYHPHnI7WFvZJwyD1MVeCO76nvSH",
          q: search,
          limit: 100,
        },
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

  return (
    <>
      <GifSearchBox
        renderError={renderError}
        handleSubmit={handleSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <div className="renderGifDiv">{renderGifs()}</div>
    </>
  );
};

export { GiphyApi };
