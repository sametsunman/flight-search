import React from "react";
import {
    Autocomplete,
    Button,
    FormControl,
    TextField
} from '@mui/material';
import ImportExport from '@mui/icons-material/ImportExport';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Search({ 
    handleBookType,
    airports,
    originCity,
    setOriginCity,
    destinationCity,
    setDestinationCity,
    departureDate,
    setDepartureDate,
    btnType,
    returnDate,
    setReturnDate,
    passengerCount,
    handleCount,
    handleSearch 
}) {

    const bookType = [
        {
          name: "Round trip",
          id: "return",
        },
        {
          name: "One way",
          id: "oneWay",
        }
      ];

      
    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="card">
                    <div className="card-body">
                        <div className="btn-group d-flex justify-content-center mb-3">
                            {bookType.map((type) => {
                                return (
                                    <Button
                                        className="btn"
                                        variant={btnType === type.id ? "contained" : "outlined"}
                                        color="primary"
                                        key={type.id}
                                        onClick={() => handleBookType(type.id)}
                                    >
                                        {type.name}
                                    </Button>
                                );
                            })}
                        </div>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Autocomplete
                                id="from-airport"
                                options={airports.sort((a, b) => -b.name.localeCompare(a.name))}
                                groupBy={(option) => option.city}
                                getOptionLabel={(option) => `${option.name} (${option.short})`}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="From" />}
                                value={originCity}
                                onChange={(e, value) => {
                                    setOriginCity(value)
                                }}
                            />
                        </FormControl>
                        <div className="d-flex justify-content-center">
                            <div className="text-muted">{btnType === "return" ? <ImportExport /> : <ArrowDownward />}</div>
                        </div>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Autocomplete
                                id="to-airport"
                                options={airports.sort((a, b) => -b.name.localeCompare(a.name))}
                                groupBy={(option) => option.city}
                                getOptionLabel={(option) => `${option.name} (${option.short})`}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="To" />}
                                value={destinationCity}
                                onChange={(e, value) => setDestinationCity(value)}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <DatePicker label="Departure date" value={departureDate} onChange={
                                (e) => setDepartureDate(e)
                            } />
                        </FormControl>
                        {btnType === "return" &&
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <DatePicker label="Return date" value={returnDate} onChange={
                                    (e) => setReturnDate(e)
                                } />
                            </FormControl>
                        }
                        <div
                            className="d-flex justify-content-center mt-2"
                            style={{ alignItems: "center" }}
                        >
                            <button
                                type="button"
                                className="btn btn-secondary mr-2"
                                onClick={() => handleCount("less")}
                            >
                                -
                            </button>
                            <div className="text-muted">
                                {passengerCount} passengers
                            </div>
                            <button
                                type="button"
                                className="btn btn-secondary ml-2"
                                onClick={() => handleCount("add")}
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <Button
                                type="button"
                                className="btn search_btn mt-2"
                                onClick={handleSearch}
                            >
                                <b>Search flights</b>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search