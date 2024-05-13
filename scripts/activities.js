"use strict";

let categories = [
  "Adventures",
  "Arts & Crafts",
  "Museums",
  "Wine Tastings",
  "Other",
];

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description:
      "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.0,
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description:
      "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
    location: "145 FM 103",
    price: 145.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description:
      "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description:
      "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description:
      "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.0,
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description:
      "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.0,
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description:
      "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description:
      "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description:
      "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 0.0,
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description:
      "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.0,
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description:
      "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.0,
  },
];

window.onload = function () {
  // called the categoriesDropDown function to run when window loads
  catagoriesDropdown();

  let selectCategory = document.querySelector("#selectCategory");
  selectCategory.addEventListener("change", catagorychange);
};
// created a function that appends the categories into the dropdown
function catagoriesDropdown() {
  // called the category select and stored it into a variable called dropDownCategory
  let dropDownCategory = document.querySelector("#selectCategory");
  //   called the activities select and stored it into a variable called dropDownActivities
  let dropDownActivities = document.querySelector("#selectActivities");
  // created a variable for the categories length
  let categoriesLength = categories.length;
  // created a variable for creating the option element
  let defaultOption = document.createElement("option");
  // assigned the defaultOtion.textContent with a string called Select an Category
  defaultOption.textContent = "Select a Category";
  // gave the defaultOtion a value of emptt string
  defaultOption.value = "";
  // appended the defaultOption to the dropdown
  dropDownCategory.appendChild(defaultOption);
  // created a for loop to append each item int he category variable and then appended them to the dropdown
  for (let i = 0; i < categoriesLength; i++) {
    // created a variable for creating the option element and assigned it to a varibale called newOptions
    let newOptions = document.createElement("option");
    // assigned the newOptions.textContent with whatever is in the categories current index
    newOptions.textContent = categories[i];
    // assigned the newOptions.value with whatever is in the categories current index
    newOptions.value = categories[i];
    // appended the newOptions to the dropdown
    dropDownCategory.appendChild(newOptions);
    // made the dropdown for activities hidden
    dropDownActivities.style.display = "none";
  }
}
// created a function when user picks a catagory it will show the activities for each one
function catagorychange() {
  // called the category select and stored it into a variable called dropDownCategory
  let dropDownCategory = document.querySelector("#selectCategory");
  //   called the activities select and stored it into a variable called dropDownActivities
  let dropDownActivities = document.querySelector("#selectActivities");
  // created a variable for creating the option element and assigned it to a varibale called selectActivityOption
  let selectActivityOption = document.createElement("option");
  // created a variable for the length of activities
  let activitiesLength = activities.length;
  // created a variable called getIndex that get's the current selected dropdownCategory index and subtracts it's value by 1
  let getIndex = dropDownCategory.selectedIndex - 1;
  // sets the length of the activities select element to 0 so we don't get extra activities besides the only ones that are supposed to be there
  dropDownActivities.length = 0;
// made the dropDownActivities visible using style.display = 'inline' whenever picks a category
  dropDownActivities.style.display = "inline";
// made an if statemenet with a condition to run if the category drop down selected index is -1
  if (getIndex === -1) {
    // hide the drop down for activities if condition is true
    dropDownActivities.style.display = "none";
  }
// made selectActivityOption.textContent take in string Select an Activity
  selectActivityOption.textContent = "Select an Activity";
//   gave selectActivityOption.value and empty string
  selectActivityOption.value = "";
//   append the selectActivityOption to the dropdown for activities 
  dropDownActivities.appendChild(selectActivityOption);
//   created a for loop to loop through the array of objects 
  for (let i = 0; i < activitiesLength; i++) {
    // created a create element for options and gave it to activityOptions
    let activityOptions = document.createElement("option");
    // made an if statement that takes in a condition if the activities index category equals the exact same as the category dropdown value
    if (activities[i].category === dropDownCategory.value) {
    // made activityOptions.textContent take in what is the current index name of the activities
      activityOptions.textContent = activities[i].name;
    //  made activityOptions.value take in what is the current index id of the activities
      activityOptions.value = activities[i].id;
    // append the activityOptions to the dropdown for activities 
      dropDownActivities.appendChild(activityOptions);
    }
  }
}
