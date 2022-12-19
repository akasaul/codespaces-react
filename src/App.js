import { useState } from "react";
import AddOns from "./components/AddOns";
import Finish from "./components/Finish";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import { Container } from "./components/Container";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: 0,
    addOns: 0,

  })
  const next = () => {
    console.log(currentPage);
    setCurrentPage((prev) => prev >= 3 ? prev = 3 : prev + 1);
  }
  
  const prev = () => {
    console.log(currentPage);
    setCurrentPage((prev) => prev <=0 ? prev = 0 : prev - 1);

  }
  
  {
    switch (currentPage) {
        case 0:
          return <Container next={next} page={currentPage} prev={prev}>
            <PersonalInfo data={data} setData={setData} />
          </Container>
        case 1:
          return <Container next={next} page={currentPage} prev={prev}>
          <Plan data={data} setData={setData} />
        </Container>

        case 2:
          return <Container next={next} page={currentPage} prev={prev}>
          <AddOns data={data} setData={data} />
        </Container>

        case 3:
          return <Container next={next} page={currentPage} prev={prev}>
          <Finish data={data} setData={data} />
        </Container>

        default:
          return <Container next={next} page={currentPage} prev={prev}>
          <PersonalInfo />
        </Container>;
    }
  }
  // return(/   <div className="App">
  //      <section className="flex container flex-col sm:flex-row md:space-x-16 sm:space-x-5 sm:items-center sm:p-4">
  //       {/* Navigation section  */}
  //         <Nav />
          
  //       {/* Form section  */}
      
  //      </section>

  //       {/* Footer - next step  */}
  //       {/* <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} /> */}
  //   </div>

  // ) 
      {/* <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  
  <title>Frontend Mentor | Multi-step form</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  <!-- Sidebar start -->

  Step 1
  Your info

  Step 2
  Select plan

  Step 3
  Add-ons

  Step 4
  Summary

  <!-- Sidebar end -->

  <!-- Step 1 start -->

  Personal info
  Please provide your name, email address, and phone number.

  Name
  e.g. Stephen King

  Email Address
  e.g. stephenking@lorem.com

  Phone Number
  e.g. +1 234 567 890

  Next Step

  <!-- Step 1 end -->

  <!-- Step 2 start -->

  Select your plan
  You have the option of monthly or yearly billing.

  Arcade
  $9/mo

  Advanced
  $12/mo

  Pro
  $15/mo

  Monthly
  Yearly

  Go Back
  Next Step

  <!-- Step 2 end -->

  <!-- Step 3 start -->

  Pick add-ons
  Add-ons help enhance your gaming experience.

  Online service
  Access to multiplayer games
  +$1/mo

  Larger storage
  Extra 1TB of cloud save
  +$2/mo

  Customizable Profile
  Custom theme on your profile
  +$2/mo

  Go Back
  Next Step

  <!-- Step 3 end -->

  <!-- Step 4 start -->

  Finishing up
  Double-check everything looks OK before confirming.

  <!-- Dynamically add subscription and add-on selections here -->

  Total (per month/year)

  Go Back
  Confirm

  <!-- Step 4 end -->

  <!-- Step 5 start -->

  Thank you!

  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.

  <!-- Step 5 end -->
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>
*/}
   
}

export default App;
