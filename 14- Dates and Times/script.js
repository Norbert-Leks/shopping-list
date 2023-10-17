let d; 

d = new Date();

d = d.toString();

d = new Date(2021, 6, 10, 12 , 30 , 0)

d = new Date('2021-07-10');

d = new Date('07-10-2022 12:30:00');

// Converting the time stamp(MS) into a date.
d = new Date(1657452600000);

// Converting the time stamp into seconds.
d = Math.floor(Date.now() / 1000);

console.log(d);

