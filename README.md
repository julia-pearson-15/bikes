# Bringing it All Together

***Work together to create a full-stack JavaScript application***

## Deliverables

- Work with a partner to tackle the prompt below.
    - You'll need to set up and work with a Mongo Database
    - You'll be creating an Express app that includes a RESTful API for CRUDding resources in your database
    - You'll use AJAX to CRUD resources without refreshing the page
- Each member of your team should be involved in each part of the application and should be able to explain why any piece of code was written/what its purpose is. Consider pair programming.
- For your `events` resource, you will need to create:
    - A collection of documents in a MongoDB database
    - A series of RESTful API routes designed to serve JSON information to the client-side portion of your application
    - Create, Read, Update, and Delete functionality using AJAX

## The Prompt: Bikes Everywhere

![](http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/5/29/1369837030288/Citi-Bikes-New-York-002.jpg)

You've been tasked with the creation of the DOT's new bicycle safety website! The NYC Department of Transportation holds events throughout the year designed to educate and provide resources for urban cyclists. They need an attractive platform to make their event calendar available online, as well as allow folks to RSVP for events.

You've been provided with a JSON document with some starter data that includes information about events and attendees. It's up to you and your team to create an Express/MongoDB/AJAX application that will serve up the data.

### Features:

The [DOT representative](http://11244-presscdn-0-93.pagely.netdna-cdn.com/wp-content/uploads/2012/01/Government-Employee.jpg) you're working with has given you the following list of features they want in the final product:

1. An informative landing page (copy has been provided to you).
1. An event calendar page, which will display a monthly calendar that contains clickable scheduled events. 
    - The 'events' feature of your application should consist of a single-page application.
    - When the user navigates to the event page, the current month should be shown.
    - When the user clicks on an event, a modal show be shown. This modal will allow users to see further information about a particular event, leave a comment on the event, and RSVP for the event.
    - Users should be able to see the current number of attendees for each event along with the number of spots left.
    - Users must leave their name and email in order to RSVP.
    - Users should be able to see a list of all current comments.

#### "Great to Have":

- Implement authorization in your application - allow users to log in. Create a page that shows them all upcoming event they've RSVP'd for.
- Create an admin page that allows administrators to manage calendar events.
- Filter out inappropriate language in comments left on the event pages.
- Include a CSS framework.

## Resources

- [Content](content.md)
- [Images](./img)
- http://fullcalendar.io/
- http://kylestetz.github.io/CLNDR/
- http://passportjs.org/docs/username-password
- https://www.npmjs.com/package/bcrypt-nodejs

## Groups

