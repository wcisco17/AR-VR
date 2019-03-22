# FlingAR
This repository contains code, screenshots and updates of the Augmented Reality project for DTI

# Getting Started with Development
1. Clone this repo to your desktop and extract files
2. Open command line and navigate to the root folder using `cd` commands 
3. `npm install`
4. `npm start`
5. Download viro media player and update AR core if your phone does not have it
6. get your ip address of the computer on the network and in the side pannel where it says testbed enter it there
7. Click Go! and allow all permsions 

** if there are any arrors or freezing it may be because your phone is not compatible or there may be issues with network you may want to clear viro media player cahce and restart it


# Current Goals
- Display drone detections in Augumented reality and allow for the user of the app to view information about that specific drone
- Implement a function that will take in lat, long, alt, sensory data coordinated and map the Drone detections accuratley into the scene.
- Implement a map feature that will display the drones within a parameter 
- Incoorperate FlyHere features to this project (cannot be a single project since FlyHere uses Expo which is non compatible)
- Incoorperate VR + ability to pick from multiple airstrips, such that DTI can inspect drones even when not being physically present

# Possible Future Goals
- Possibility to report drones 
- Possibility to call owners and cancel lisence through app


# Work Breakdown Timeline
(11-15 March 2019) : Was searching for the devlopment platform that i would use to build this AR app

(18 March 2019) : Spent the day looking into possible react native modules that i could use that would be cross platform compatible, i decided to use Viro on this day as it provided a better service

(19 - 20 March 2019) : Downloaded the Flyhere application source code and tried to implement the AR code that i had, on the 20th i realized that EXPO was the cause of the multiple ambiguous errors i was getting so then i started a new react native project

(21 March 2019) : I implemented both AR and VR versions into the app i also added drone detection boxes into the scene with ownership information present for authorised personel to see

(22 March 2019) : I created this repo and uploaded requwested code and screenshot samples, I also starting thinking how we should structure the application in terms of design so that we can make a nice app for the appstore, i shall discuss with Michael on monday about how he would like it designed.

** I shall update this section once a week so that you are aware of the developments


# What we have so far 
So currently i have implemented our idea in both AR and VR users of the app have the ability to view the drone information when they click on it. Please note i have not added any aditional designs like splash screen and tabs, this shall be discussed with and decided upon next week. Please view the Screenshots below of our application:


/ images shall follow soon working on taking them





# Technology Stack
1. React Native with (native cli not expo)
2. Viro Module
3. AWS server instance to serve coordinates (in the future when we have drones with devices attached)
4. ARcore supported mobile device (Please note this application will not function if phone does not have ARcore)
5. Viro Media Player to test the application using testbed, this allow for the application to be tested whilst being coded


