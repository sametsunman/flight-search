import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel, Select,
  MenuItem
} from '@mui/material';
import forwardArrow from "../assets/Forward.svg";
import TicketCard from "./TicketCard";
import EmptyPage from "./emptyPage";
import NoDataPage from "./noDataPage";
import LoadingPage from "./SkeletonPage";
import axios from "axios";

function Result(props) {
  const {
    originCity,
    destinationCity,
    flights,
    bookReturn,
    isSearchClicked,
    passengerCount,
    isLoading,
  } = props;

  const [airlines, setAirlines] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    handleAirlines();
  }, []);

  const handleAirlines = () => {
    axios('/api/airlines')
      .then((res) => setAirlines(res.data.airlines))
      .catch((err) => console.log(err))
  }

  const flightData = flights.map((flight) => {
    const isReturn = originCity.id !== flight.from;
    const airline = airlines.find((airline) => airline.id === flight.airline);
    const from = isReturn ? destinationCity : originCity;
    const to = isReturn ? originCity : destinationCity;

    return {
      ...flight,
      airline,
      from,
      to,
      isReturn
    }
  }).sort((a, b) => {
    console.log(a.time)
    if (sort === 'price') {
      return a.price - b.price;
    } else if (sort === 'departure') {
      return parseInt(a.time) - parseInt(b.time);
    } else if (sort === 'duration') {
      return a.duration - b.duration;
    } else {
      return 0;
    }
  });

  return (
    <div className="card" style={{ height: "100%", marginTop: "32px" }}>
      {isLoading ?
        <LoadingPage />
        : <div className="card-body">
          {!isSearchClicked &&
            flights.length === 0 ? (
            <EmptyPage />
          ) : isSearchClicked &&
            flights.length === 0 ? (
            <NoDataPage />
          ) : (
            <div>
              <div className="d-flex justify-content-between mb-4">
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <span>
                    <img src={forwardArrow} alt="arrow" className="ml-2" />
                  </span>{" "}Available flights
                </div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel id="select-sort-label">Sort By</InputLabel>
                  <Select
                    labelId="select-sort-label"
                    id="select-sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    autoWidth
                    label="Sort By"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="departure">Departure Time</MenuItem>
                    <MenuItem value="duration">Duration Time</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                {bookReturn && isSearchClicked ? (
                  <div className="row">
                    <div className="col">
                      <div style={{ color: "deepskyblue", fontWeight: "bold" }}>
                        Departure flight
                        <p style={{ fontSize: '15px' }}>{originCity.city}</p>
                      </div>
                      <TicketCard
                        data={flightData.filter(flightData => !flightData.isReturn)}
                        passengerCount={passengerCount}
                      />
                    </div>
                    {flights.length && flights ? (
                      <div className="col">
                        <div style={{ color: "deepskyblue", fontWeight: "bold" }}>
                          Return flight
                          <p style={{ fontSize: '15px' }}>{destinationCity.city}</p>
                        </div>
                        <TicketCard
                          data={flightData.filter(flightData => flightData.isReturn)}
                          passengerCount={passengerCount}
                        />
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <div style={{ color: "deepskyblue", fontWeight: "bold" }}>
                      Departure flight
                      <p style={{ fontSize: '15px' }}>{destinationCity.city}</p>
                    </div>
                    <TicketCard
                      data={flightData}
                      passengerCount={passengerCount}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default Result;
