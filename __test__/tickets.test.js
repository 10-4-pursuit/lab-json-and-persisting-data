const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { nanoid } = require("nanoid");

const { 
  addGenerateTicket,
  getSingleTicket,
  getTickets,
  addTicket,
  updateTicket,
  deleteTicket
  } = require("../src/tickets.js");
  
const data = require("../data/tickets.json");
const { test } = require("node:test");
  
  console.log(data);
  
  describe("getTickets()", () => {
    it("gets all expected tickets", () => {
      expect(getTickets()).toEqual(data);
    })

    
  });

  // describe('getSingleTicket', () => {
  //   it('should return the ticket with the specified ID', () => {
  //     const tickets = [
  //       { ticketHolder: "Esther Weissnat", ticketPrice: 61144.38, id: "ZPdK", },
  //       { ticketHolder: "Rogelio Howell", ticketPrice: 33549.69, id: "bFTN", },
  //       { ticketHolder: "Katherine Schiller", ticketPrice: 3269.8, id: "I44l", },
  //       { ticketHolder: "Silvia Wolf", ticketPrice: 61791.64, id: "2UtE", },
  //     ];
  
  //     const ticket = getSingleTicket();
  
  //     expect(ticket).toEqual({ ticketHolder: "Katherine Schiller", ticketPrice: 3269.8, id: "I44l", });
  //   });
  
    it('should return null if the ticket with the specified ID is not found', () => {
      const tickets = [
        { id: 1, name: 'Ticket 1' },
        { id: 2, name: 'Ticket 2' },
        { id: 3, name: 'Ticket 3' },
      ];
  
      const ticket = getSingleTicket(4);
  
  //     expect(ticket).toBeNull();
  //   });
  
  //   it('should throw an error if the tickets array is empty', () => {
  //     const tickets = [];
  
  //     expect(() => getSingleTicket(1)).toThrowError('Tickets array is empty');
  //   });
  });