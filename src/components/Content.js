import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import moment from "moment";
import Result from "./Result";
import Search from "./Search";

function Content() {
  const [isLoading, setIsLoading] = useState(false);
  const [btnType, setbtnType] = useState("return");
  const [passengerCount, setPassengerCount] = useState(1);

  const [bookReturn, setBookReturn] = useState(true);
  const [originCity, setOriginCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const [airports, setAirports] = useState([]);
  const [flights, setFlights] = useState([]);



  useEffect(() => {
    handleAirports();
  }, []);


  const handleAirports = () => {
    axios('/api/airports')
      .then((res) => setAirports(res.data.airports))
      .catch((err) => console.log(err))
  }

  const handleFlightSearch = (searchType) => {
    const from = originCity.short;
    const to = destinationCity.short;
    const date = moment(departureDate).format("YYYY-MM-DD");
    const date2 = moment(returnDate).format("YYYY-MM-DD");
    let url = `/api/flights/${from}/${to}/${date}`;

    if (bookReturn && returnDate) {
      url += `/${date2}`
    }

    axios(url).then((res) => {
      setFlights(res.data.flights);
    }).finally(() => {
      setIsLoading(false);
    }).catch((err) => console.log(err));
  };

  const handleBookType = (id) => {
    setbtnType(id);
    if (id === "oneWay") {
      setIsSearchClicked(false);
      setBookReturn(false);
      setReturnDate(null);
    } else if (id === "return") {
      setIsSearchClicked(false);
      setBookReturn(true);
    }
  };

  const handleCount = (key) => {
    if (key === "add") {
      if (passengerCount >= 5) {
        return;
      }
      setPassengerCount(passengerCount + 1);
    } else if (key === "less") {
      if (passengerCount === 1) {
        return;
      }
      setPassengerCount(passengerCount - 1);
    }
  };


  const handleSearch = () => {
    if (bookReturn && !returnDate) {
      alert("Return date can't be empty!");
    } else if (!originCity) {
      alert("Origin city can't be empty!");
    } else if (!destinationCity) {
      alert("Destination city can't be empty!");
    } else if (!departureDate) {
      alert("Departure date can't be empty!");
    } else if (bookReturn && !returnDate) {
      alert("Return date can't be empty!");
    }

    if (originCity && destinationCity && departureDate) {
      setIsLoading(true);
      setIsSearchClicked(true);
      handleFlightSearch();
    }
  };

  return (
    <Container>
      <Search
        handleBookType={handleBookType}
        airports={airports}
        originCity={originCity}
        setOriginCity={setOriginCity}
        destinationCity={destinationCity}
        setDestinationCity={setDestinationCity}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        btnType={btnType}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        passengerCount={passengerCount}
        handleCount={handleCount}
        handleSearch={handleSearch}
      />

      <Result
        originCity={originCity}
        destinationCity={destinationCity}
        flights={flights}
        bookReturn={bookReturn}
        isSearchClicked={isSearchClicked}
        passengerCount={passengerCount}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default Content;
