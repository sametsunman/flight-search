import { createServer, Model, belongsTo, RestSerializer } from 'miragejs'


let ApplicationSerializer = RestSerializer.extend()

createServer({
serializers: {
    application: ApplicationSerializer
},
  models: {
    airport: Model,
    airline: Model,
    flight: Model.extend({
        from: belongsTo("airport"),
        to: belongsTo("airport"),
        airline: belongsTo("airline")
    })
  },
  seeds(server) {
    const ist = server.create('airport', { 
        name: 'İstanbul Havalimanı',
        city: 'İstanbul',
        short: 'IST'
    });

    const esb = server.create('airport', {
        name: 'Esenboğa Havalimanı',
        city: 'Ankara',
        short: 'ESB'
    });

    const adb = server.create('airport', {
        name: 'Adnan Menderes Havalimanı',
        city: 'İzmir',
        short: 'ADB'
    });

    const ant = server.create('airport', {
        name: 'Antalya Havalimanı',
        city: 'Antalya',
        short: 'ANT'
    });

    const saw = server.create('airport', {
        name: 'Sabiha Gökçen Havalimanı',
        city: 'İstanbul',
        short: 'SAW'
    });

    const tzx = server.create('airport', {
        name: 'Trabzon Havalimanı',
        city: 'Trabzon',
        short: 'TZX'
    });

    const thy = server.create('airline', {
        name: 'Türk Hava Yolları',
        short: 'THY',
        logo: 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1684333313',
    });

    const pgt = server.create('airline', {
        name: 'Pegasus',
        short: 'PGT',
        logo: 'https://cdn.worldvectorlogo.com/logos/pegasus-airlines.svg',
    });

    const sxs = server.create('airline', {
        name: 'SunExpress',
        short: 'SXS',
        logo: 'https://cdn.worldvectorlogo.com/logos/sunexpress.svg',
    });



    server.create('flight', {
        from: ist,
        to: esb,
        price: 1200,
        date: '2023-09-03',
        time: '07:00',
        duration: '1 hour 5 minutes',
        capacity: 100,
        available: 20,
        airline: thy,
        code: 'TK2023',
    });

    server.create('flight', {
        from: esb,
        to: ist,
        price: 2500,
        date: '2023-09-03',
        time: '19:00',
        duration: '1 hour 15 minutes',
        capacity: 100,
        available: 12,
        airline: thy,
        code: 'TK2224',
    });

    server.create('flight', {
        from: ist,
        to: adb,
        price: 1300,
        date: '2023-09-03',
        time: '09:00',
        duration: '1 hour 10 minutes',
        capacity: 100,
        available: 20,
        airline: thy,
        code: 'TK2343',
    });

    server.create('flight', {
        from: adb,
        to: ist,
        price: 1900,
        date: '2023-09-03',
        time: '22:00',
        duration: '2 hour 30 minutes',
        capacity: 100,
        available: 0,
        airline: thy,
        code: 'TK3843',
    });

    server.create('flight', {
        from: saw,
        to: tzx,
        price: 2700,
        date: '2023-09-03',
        time: '06:15',
        duration: '1 hour 45 minutes',
        capacity: 100,
        available: 2,
        airline: pgt,
        code: 'PG3484',
    });

    server.create('flight', {
        from: tzx,
        to: saw,
        price: 2350,
        date: '2023-09-03',
        time: '16:00',
        duration: '1 hour 50 minutes',
        capacity: 100,
        available: 16,
        airline: pgt,
        code: 'PG2056',
    });

    server.create('flight', {
        from: ist,
        to: esb,
        price: 1600,
        date: '2023-09-03',
        time: '11:00',
        duration: '1 hour 5 minutes',
        capacity: 100,
        available: 15,
        airline: sxs,
        code: 'SX4330',
    });

    server.create('flight', {
        from: ist,
        to: tzx,
        price: 1200,
        date: '2023-09-03',
        time: '08:00',
        duration: '1 hour 20 minutes',
        capacity: 100,
        available: 0,
        airline: thy,
        code: 'TK2033',
    });

    server.create('flight', {
        from: ist,
        to: esb,
        price: 1200,
        date: '2023-09-03',
        time: '09:00',
        duration: '1 hour 15 minutes',
        capacity: 100,
        available: 1,
        airline: thy,
        code: 'TK2933',
    });

    server.create('flight', {
        from: ist,
        to: esb,
        price: 1200,
        date: '2023-09-03',
        time: '12:00',
        duration: '1 hour 20 minutes',
        capacity: 100,
        available: 5,
        airline: thy,
        code: 'TK3302',
    });

    server.create('flight', {
        from: adb,
        to: saw,
        price: 1200,
        date: '2023-09-03',
        time: '14:00',
        duration: '1 hour 10 minutes',
        capacity: 100,
        available: 7,
        airline: thy,
        code: 'TK2677',
    });

    server.create('flight', {
        from: tzx,
        to: saw,
        price: 2900,
        date: '2023-09-03',
        time: '17:00',
        duration: '1 hour 50 minutes',
        capacity: 100,
        available: 4,
        airline: pgt,
        code: 'PG4421',
    });

    server.create('flight', {
        from: ant,
        to: ist,
        price: 1100,
        date: '2023-09-03',
        time: '18:00',
        duration: '1 hour 40 minutes',
        capacity: 100,
        available: 3,
        airline: pgt,
        code: 'PG4533',
    });

    server.create('flight', {
        from: ant,
        to: ist,
        price: 1350,
        date: '2023-09-03',
        time: '10:00',
        duration: '1 hour 10 minutes',
        capacity: 100,
        available: 1,
        airline: sxs,
        code: 'SX2543',
    });

    server.create('flight', {
        from: esb,
        to: ist,
        price: 1620,
        date: '2023-09-03',
        time: '20:00',
        duration: '1 hour 15 minutes',
        capacity: 100,
        available: 25,
        airline: sxs,
        code: 'SX2126',
    });

  },
  routes() {
    this.namespace = 'api';
;

    this.get('/flights');
    this.get('/airports');
    this.get('/airlines');

    this.get('/flights/:from/:to/:date', (schema, request) => {
        
        let result = schema.flights.all().filter((flight) => {
            return flight.date === request.params.date && flight.from.short === request.params.from && flight.to.short === request.params.to;
          });

      return result;
    });

    this.get('/flights/:from/:to/:date/:date2', (schema, request) => {
        
        let result = schema.flights.all().filter((flight) => {
          return (flight.date === request.params.date && flight.from.short === request.params.from && flight.to.short === request.params.to) || (flight.date === request.params.date2 && flight.from.short === request.params.to && flight.to.short === request.params.from);
        });

        return result;
      });

  },
})