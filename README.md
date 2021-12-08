# Boris-Bikes

the first part of the project

As a person, So that I can use a #bike, I'd like a #docking #station to release a bike.

As a person, So that I can use a good #bike, I'd like to see if a bike is working

As a person, So that I can use a bike, I'd like a docking station to #release #a #bike.

As a person, So that I can use a good bike, I'd like to see if a #bike #is #working

| Objects         | Messages         |
| --------------- | ---------------- |
| Person          |                  |
| Bike            | is_bike_working? |
| Docking Station | release_bike     |

Bike <-- working? --> true/false
DockingStation <-- release_bike --> a Bike

Challenge 3

TypeError ---> NameError
Filepath ---> 2: from /Users/nasteha/.rvm/rubies/ruby-3.0.0/lib/ruby/gems/3.0.0/gems/irb-1.3.0/exe/irb:11:in `<top (required)>' linenumber ---> 1: from (irb):1:in `<main>'
error_means ---> error was due to uninitialized object name (DockingStation)
solution ---> initialing a new object before assigning it
