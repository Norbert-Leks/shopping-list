let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

// Months are zero based.
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-GB').format(d);

x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleString('default', {weekday: 'long', day: 'numeric',});



console.log(x);
