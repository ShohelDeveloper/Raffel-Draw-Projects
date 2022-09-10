const Ticket = require('../modules/ticket')

class MyDB{
    constructor() {
        this.tickets = []
    }

    /**
     * Create A Ticket
     * Constructor Function
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket} return a ticket object 
     */

    create(username, price) {
          const ticket = new Ticket(username,price)
          this.tickets.push(ticket)
          return ticket
    }

    /**
     * Create Multple Ticket For A singel User
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket} 
     */

    bulkCreate(username,price, quantity) {
        const result = []
        for(let i = 0; i <quantity; i++) {
            const ticket  = this.create(username,price) //this create is not a methos, this is up function
            result.push(ticket)
        }
        return result
    }

    /**
     * Return All Avaliable Ticket
     * 
     */

    find() {
        return this.tickets
    }

        /**
     * Find Single Ticket By ticket ID
     * @param {string} ticketId
     * @returns {Ticket}
     */

         findById(ticketId) {
            const ticket = this.tickets.find(
                /**
                 * @param {Ticket} ticket
                 */
    
                (ticket) => ticket.id === ticketId
            )
            
            return ticket
            
        }
        
      /**
       * Find all tickets for a given users
       * @param {string} username
       * @return {Array<Ticket>} 
       */
        findByUsername(username) {
               const tickets = this.tickets.filter(
                /**
                 * @param {Ticket} ticket
                 */
    
                (ticket) => ticket.username === username
               )
               return tickets
        }
    
        /**
         * Update Data
         * @param {string} ticketId
         */
    
        updateById(ticketID,ticketBody) {
            const ticket = this.findById(ticketID)
            ticket.username = ticketBody.username ?? ticket.username
             ticket.price = ticketBody.price ?? ticket.price
            ticket.updateAt  = new Date()
    
            return ticket
            
        }

        /**
         * updateUsername
         * @param {string} username
         */

         updateTicketByUsername(findUsername,userbody) {
            const user = this.findByUsername(findUsername)
            user.username =  userbody.findUsername ?? user.username
            user.price = userbody.price ?? user.price
            user.updateAt  = new Date()
    
            return user
         }
         
       /**
        * Delete Ticket From DB
        * @param {string} ticketId
        */
    
       deleteById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId)
     
        if(index !== -1) {
              this.tickets.splice(index,1)
    
              return true
        }else{
            return false
        }
       }


   /**
    *  Find Winner
    * @param {number} winnerCount 
    * @returns {Array<Ticket>}
    */


   draw(winnerCount) {
       let winnerIndexes = new Array(winnerCount)

      let index = 0
      while (index < winnerCount) {
        let winnerIndex = Math.floor(Math.random() * this.tickets.length)
        console.log('Winner Index', winnerIndex)
        if( !winnerIndexes.includes(winnerIndex)) {
            winnerIndexes[index++] = winnerIndex
            continue;
        }
      }


       const winners = winnerIndexes.map(index => this.tickets[index])
       return winners 
   }

}

const myDB = new MyDB()

module.exports = myDB