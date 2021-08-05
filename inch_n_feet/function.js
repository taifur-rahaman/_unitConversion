// Foot to inch

//1 foot = 12 inch

function convert_feet(){
    var foot_user = window.prompt("Enter the unit in Feet");
foot_user = parseInt(foot_user);

function foot_to_inch(foot_user)
{
    return foot_user*12;
}

var inch_cal = foot_to_inch(foot_user);

document.getElementById("foot-to-inch").innerHTML = `${foot_user} feet is equal to ${inch_cal} inch`;
}

//Inch to Foot

//1 inch = 0.083333333 foot

function convert_inch(){
    var inch_user = window.prompt("Enter the unit in Inch");
inch_user = parseInt(inch_user);

function inch_to_foot(inch_user)
{
    return inch_user/12;
}

var foot_cal = inch_to_foot(inch_user);

document.getElementById("inch-to-foot").innerHTML = `${inch_user} inch is equal to ${foot_cal} feet`;
}