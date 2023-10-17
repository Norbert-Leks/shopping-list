const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'yellow',
    color5: 'orange',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['Red', 'Blue', 'Green', 'Orange']

for (const color in colorArr){
    console.log(colorArr[color]);
}

