import React from 'react';
import { Icon, Typography } from '@mui/material';

function TicketCard({ data, passengerCount }) {

  return (
    <>
      {data.map((flight, i) => {
        return (
          <div className="card mb-3" id="ticket_card" key={i}>
            <div className="card-body">
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    width: '60%',
                    fontSize: '13px',
                    display: 'flex',
                    lineHeight: '1.5rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        marginBottom: '6px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignSelf: 'center', fontSize: '11px' }}>
                        <b style={{ fontSize: '16px' }}>{flight.time} </b>
                      </div>
                      <div style={{ display: 'flex', alignSelf: 'center', fontSize: '11px' }}>
                        <b style={{ marginRight: '3px' }}>{passengerCount} </b><Icon>people</Icon>
                      </div>
                      <span>
                        <b style={{ fontSize: '16px' }}>₺{flight.price * passengerCount}</b>
                      </span>

                    </div>
                    <div>
                      <b>
                        {flight.from?.name} {'>>'} {flight.to?.name}
                      </b>
                    </div>
                    <div>{flight.code}</div>
                    <div>Duration: {flight.duration}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '40%',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100px', width: '140px'
                  }}>
                    <img
                      src={flight.airline?.logo}
                      alt="flight_img"
                      style={{ height: '40px', width: '40px' }}
                    />
                    <Typography variant="subtitle1">
                      {flight.airline?.name}
                    </Typography>
                  </div>
                  <div>
                    <button type="button" className="btn btn-sm btn-info" disabled={flight.available === 0}>
                      <b>Book</b>
                    </button>
                  </div>
                </div>
                
              </div>
              {flight.available !== 0 && flight.available < 5 && <span style={{ fontSize: '15px', color: '#e30909', fontWeight: 600 }}>{flight.available} available seat left</span>}
              {flight.available === 0 && <span style={{ fontSize: '15px', color: '#5c5c5c', fontWeight: 600 }}>FULL</span>}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TicketCard;
