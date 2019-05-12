# Ping Pong
#### Class Assignment Epicodus Intro to Programming, 2019.05.10
#### By Bernice Carbaugh

## Description
Takes two numbers from a user and returns a range of numbers between the two numbers (inclusive) with the following exceptions:
- Numbers divisible by 3 are replaced with "ping"
- Numbers divisible by 5 are replaced with "pong"
- Numbers divisible by 15 are replaced with "ping pong"

## Specifications
Behavior
1. count from the first smaller number to the second larger number, inclusive of either number
1. if both numbers are the same, only display that number
1. perform exceptions for all numbers in the output range that meets these conditions
  - if divisible by 3, replace with "ping"
  - if divisible by 5, replace with "pong"
  - if divisible by 15, replace with "ping pong"
  - 0 should just be returned as 0
1. validate inputs input validations:
  - if second number is smaller than the first, alert user and stop
  - if either number is non-positive, alert user and stop
  - if either input is non-numeric, alert user and stop
  - if first number is missing, assume 0
  - if second number is missing, alert user and stop 
1. if the difference between the second and first number is over 100, alert user and stop

## Setup / Installation Requirements
[Click here](http://bernicecarbaugh.github.io/ping-pong/) to view the page on your browser

## Known Bugs
None

## Support and Contact Details
For any questions or feedback, contact Bernice Carbaugh at bernicecarbaugh@yahoo.com

## Technologies Used
HTML
CSS/Bootstrap
Javascript/JQuery

## Legal
*This software is licensed under the MIT License*
Copyright (c) 2019 **Bernice Carbaugh**