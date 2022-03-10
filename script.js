//SWITCH


function day(d, m, y)
{
    let a = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    y -= (m < 3) ? 1 : 0;
    return (Math.round( y + y/4 - y/100 + y/400 + a[m-1] + d) % 7);
}

let date = day(29, 03, 2022)

switch (date) {
    case 1:
        if(date=='1') {
            date="Monday"
        }
        break;

    case 2:
        if(date=='2') {
            date="Tuesday"
        }
        break;
    
    case 3:
        if(date=='3') {
            date="Wednesday"
        }
        break;
    
    case 4:
        if(date=='4') {
            date="Thursday"
        }
        break;
    
    case 5:
        if(date=='5') {
            date="Friday"
        }
        break;
    
    case 6:
        if(date=='1') {
            date="Saturday"
        }
        break;

    case 7:
        if(date=='7') {
            date="Sunday"
        }
        break;
    
    default:
        date="Invalid Date"
        break;
}

console.log(date)
document.write(date)