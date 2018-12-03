Search The Web
===

Use `fetch` and VueJS to search and fetch data from a third-party API.

## Code Kata

Complete [today's Kata](https://www.codewars.com/kata/nice-array)

## Choose an API

This lab will have you evaluate an API and read the docs to deduce what is required to display data. You will
likely need to sign up for an api key. (Remember, **be skeptical of API until you test it out!**)

_Possible_ API choices:

* https://service.civicpdx.org/
* https://newsapi.org/
* https://developers.google.com/books/
* https://www.goodreads.com/api
* https://pokeapi.co/api/v2/

API Requirements:

* Has to support CORS (search from AJAX call) verify [here](test-cors.org) (but sometimes this site is flakey, try a 
call from then browser console or your Vue app.)
* Supports searching or some type of parameter
* You most likely will need to sign up for an API "key"

## App Requirements

### Part 1

Use a default `GET` (or hard-code a query parameter) and display data.

#### Router

Add in a router and create a `path` for your search that loads your `Items` component (use domain name!).

```
App
  |
  +- RouterView
      |
      +- Home
      |
      +- Items (use domain name)
          |
          +- List (optional)
              |
              +- [Item]
```

#### Model

1. Encapsulate API call to service in a module
1. Import api module to (`Items`) component. Use the `created` life-cycle method to initiate the search.
1. Set the data when returned from the callback
1. Optional first step: Test by display {{ list.length }} in your component
1. Create `Item` components using `v-for`

#### View

1. Display an `Item` component for each list item (use domain names!)


### Part 2

(Use domain names)
```
  
Items
  |
  +- Search
  |
  +- ItemList (optional)
      |
      +- [Item]
```

Instead of data search functionality being initiated by component loading, use a method that
runs the search in response to a search form. You will need to add a parameter that takes the search term. 
Pass the method as a callback prop to the child `Search` component.

### Part 3

Store the search term in the url!
* The `Search` component directly changes url via `this.$router` and does not take a callback from parent
* The `Items` component needs to watch the router and mine the query info to do a new search
* Add `watch` in `Items` and `Search` to keep in sync

### Part 4

Add loading and error components:
* Let your user know when a search is occurring by showing a loading UI.
* Let your user know when errors happen (put in an "easter egg" error if needed)

## Bonus

### Detail View

```
App
  |
  +- RouterView
      |
      +- Home
      |
      +- Items
      |
      +- Detail
  
```

Add routes to your app, and add a detail view! When the user clicks on an item, go to `/items/:id` and fetch additional information about the clicked item.


## Rubric

* Expose API via service module (`fetch`, async callback, etc.) **2pts**
* Display Results **2pts**
* Implement Search **2pts**
* Use the url **2pts**
* Loading and error status **2pts**
