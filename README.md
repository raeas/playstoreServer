# playstoreServer

## Module Server-side programming with Node and Postgres

### Checkpoint 4 Working with the Express response object

### Objective

Build an Express server with a GET endpoint /apps. By default return the complete list of apps in the array. The endpoint accepts the following optional query parameters:

Parameter |	Value |	Description
--------- | ----- | -----------
sort | 'rating' or 'app' | sort the list by either rating or app, any other value results in an error, if no value provided do not perform a sort.
genres | one of ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'] | If present the value must be one of the list otherwise an error is returned. Filter the list by the given value.
