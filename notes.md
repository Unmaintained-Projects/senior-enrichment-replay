
#### Aircrafts
  * have profile info including:

  * must track the aircraft it succeeds via a reference called 'succeeded'

#### Countries
  * have profile info including:
  * must have a method `getTopFive` which finds the top 5 strongest nations sorted by GFI (0 is the strongest, 10 is the weakest)

### Views and Functionality

- Navigation: as a user I...
  * will land on **Home** by default
  * can navigate to **Countries** from **Home**
  * can navigate to **Aircrafts** from **Home**
  * can navigate to view a top 5 **Single Country** from **Home** (see `Views` below for more details)
  * can navigate to view a **Single Country** from **Countries**
  * can navigate to view a **Single Aircraft** from **Aircrafts**
  * can navigate to view a **Single Aircraft** from **Single Country** (for any aircraft that the country owns)
  * can navigate to view an aircrafts' **Single Country** from **Single Aircraft**

- Views: as a user I...
  * see a navbar in every view
  * see a scoreboard of the top 5 countries, in order, measured by GFI (Global Firepower Index - 0 is strongest(top), 10 is the weakest(bottom)) on the **Home** view
  * see a list of all countries on the **Countries** view
  * see a list of all aircrafts on the **Aircrafts** view
  * see details about a country on the **Single Country** view, including that country's aircrafts
  * see details about an aircraft on the **Single Aircraft** view, including that aircrafts' country

- Actions: as a user I...
  * can create a country
  * can edit a country's info, including adding/removing an aircraft to/from that country
  * can delete a country
  * can create an aircraft
  * can edit an aircraft's info, including the country that owns the aircraft
  * can delete an aircraft

### Routes

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
DELETE
- a country
  - deletes all aircrafts associated with the country

```

### How to test functionality without a frontend
- GET: use your browser
- POST / PUT / DELETE :
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
- Databases: use Sequelize in your routes and see if you are receiving what you expect


## Video Walkthrough

Please submit a 3-minute screencast of a walk-through of the functionality *and code* (focus mostly on code) for each user story in your app. E.g. for "As a user, I can create a campus", please show us that you can successfully create a campus in your app, and also the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that [here](https://support.apple.com/kb/PH5882?locale=en_US&viewlocale=en_US)).

Once you've recorded your screencast, please *upload it to YouTube as an unlisted video*. Email `academics@fullstackacademy.com` with the title `Senior Enrichment Submission: [Your Name]` and include your repo link and YouTube recording link. This will aid us in evaluating your submission.

## Evaluation
[Rubric](https://docs.google.com/document/d/1opwC-nuzmc84jTZqpQn1hsXiMxWSpkK_TwQAOHEEbEs/edit?usp=sharing)

- Code modularity/readability (25%)
- Models (25%)
- Routes (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)

---------

SEED FILE: node seed.js

# TO DO LIST

## In Seed.js
[] add cost to all aircrafts
[] link up association in seed file

## In models
[] complete class and instance methods

## Final Steps
[] CSS
[] refactor to react-redux

