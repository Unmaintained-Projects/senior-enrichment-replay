
# Countries Model
  * must have a method `getTopFive` which finds the top 5 strongest nations sorted by GFI (0 is the strongest, 10 is the weakest)

# Views and Functionality

- Navigation: as a user I...

  * can navigate to view a top 5 **Single Country** from **Home** (see `Views` below for more details)
  * can navigate to view an aircrafts' **Single Country** from **Single Aircraft**

- Views: as a user I...

  * see a scoreboard of the top 5 countries, in order, measured by GFI (Global Firepower Index - 0 is strongest(top), 10 is the weakest(bottom)) on the **Home** view

  * see details about an aircraft on the **Single Aircraft** view, including that aircrafts' country

- Actions: as a user I...
  * can create a country
  * can edit a country's info, including adding/removing an aircraft to/from that country
  * can delete a country
  * can create an aircraft
  * can edit an aircraft's info, including the country that owns the aircraft
  * can delete an aircraft

# Routes

```
GET
- a country by id
  - populated with aircrafts
  - excluding the description of the aircraft
- top 5 countries
  - by GFI (0 is strongest (top), 10 is weakest (bottom))
  - sorted strongest to weakest
- all aircrafts
  - populated with the name of the country that owns each aircraft
  - excluding the descriptions
```

# In Seed.js
[] add cost to all aircrafts
[] link up association in seed file

# In models
[] complete class and instance methods

# Final Steps
[] CSS
[] refactor to react-redux












# Video Walkthrough

Please submit a 3-minute screencast of a walk-through of the functionality *and code* (focus mostly on code) for each user story in your app. E.g. for "As a user, I can create a campus", please show us that you can successfully create a campus in your app, and also the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that [here](https://support.apple.com/kb/PH5882?locale=en_US&viewlocale=en_US)).

Once you've recorded your screencast, please *upload it to YouTube as an unlisted video*. Email `academics@fullstackacademy.com` with the title `Senior Enrichment Submission: [Your Name]` and include your repo link and YouTube recording link. This will aid us in evaluating your submission.

---------

SEED FILE: node seed.js

---------
<!-- #### Aircrafts
  * have profile info including: -->
  <!-- **** AS PER KATE: IGNORE THIS:
  * must track the aircraft it succeeds via a reference called 'succeeded' -->
