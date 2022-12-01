# FikaSearch


https://user-images.githubusercontent.com/24406890/205122276-ffe037b8-dd9e-496b-b28f-ebc9a4aedb02.mp4



## Get started

- Install node modules with
  `yarn`

- Followed by
  `yarn run ios` or `yarn run android`

## Technologies used

- React-Native
- Tanstack

## What I would do with more time

- Lots of style changes not limited to but including...
  - In general, the MovieCard component and spacing between components etc.
    - Could have used a css framework.
  - Different layouts for different size screens
  - Using refs to scroll the movie list up when a new page is selected or search term added.
- Set up linting
- More tests for error states and better handling of error states.
  - Given the time I have I was unable to test the react-query error state due to issues with 'msw' and wanting to focus more on the task in hand.
- Missing tests for `Layout` and `App` components
- Filter by genre function
- Possible different component for pagination, option of prefetching data for the next page (more suitable for a pagination component that allows you to click on icon for next page).
- Use TypeScript.
