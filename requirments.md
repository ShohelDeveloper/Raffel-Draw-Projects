# Lottery API

-  Sell Lottery Ticket
-  Update Lottery Ticktet
-  Delete Lottery Ticket
-  Get all Tickets
-  Get Ticket By Id
-  Bulk Buy (User Can Buy Multiple Ticket At a Time)
-  Raffle Draw

# Ticket:

-  Number (unique)
-  UserName 
-  Price
-  Timestamp(Create a Date & Update a Date)

# Routes:


- /tickets/t/:ticketId GET - Find Single Ticket 
- /tickets/t/:ticketId PATCH - Update ticket by id
- /tickets/t/:ticketId DELETE - delete ticket by id
- /tickets/u/:username GET Find Tickets for a Given User
- /tickets/u/:username PATCH Update Tickets for a Given User
- /tickets/u/:username Delete Update Tickets for a Given User
- /tickets/sell - Create Tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw
- /tickets - Find all tickets