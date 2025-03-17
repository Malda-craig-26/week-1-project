Deliverables
Display Ramen Images:

Create a displayRamens() function.

Load images from the ramens array using standard JavaScript array methods (e.g., forEach) and append them as <img> elements inside the #ramen-menu div.

Ramen Detail Display:

Clicking a ramen image triggers a handleClick function that displays the ramen details (name, restaurant, and optionally rating and comment) in the #ramen-detail div.

Handle New Ramen Form Submission:

Create an addSubmitListener function.

When a user fills out the form and submits it, add the new ramen image to the #ramen-menu div. Updating the DOM is sufficient (no data persistence required).

Initialize App:

Write a main function that initializes your application by invoking:

displayRamens()

addSubmitListener()

Ensure that the DOM content is fully loaded before the main function runs.