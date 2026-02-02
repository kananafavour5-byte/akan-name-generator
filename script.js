function generateAkanName() {
console.log("function is running");

const dob = document.getElementById("dob").value;
console.log(dob);

const date = new Date(dob);
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

console.log(day, month, year);

const genderinput = document.querySelector('input[name="gender"]:checked');

if (!genderinput) {
  console.log("No gender selected");
  return;
}
const gender = genderinput.value;
console.log(gender);

if (day < 1 || day > 31) {
    console.log("Invalid day");
    return;
  }
  if (month < 1 || month > 12) {
    console.log("Invalid month");
    return;
  } 

  const CC = Math.floor(year / 100);
  const YY = year % 100;
    const MM = month;
    const DD = day;

    const d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;
    console.log("Day index: " + d);
    
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[d];
    } else if (gender === "female") {
      akanName = femaleNames[d];
    }
    document.getElementById("result").innerText = "Your Akan name is " + akanName;
  }