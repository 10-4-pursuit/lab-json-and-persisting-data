const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { nanoid } = require("nanoid");

const tickets = require("../data/tickets.json");

// Gave each indivisual ticket an ID upon purchase. and returns the ticket with an indivisual id using nanoid.
function addTicket(data) {
    data.id = nanoid(4)
    tickets.push(data);
    saveCurrentTicket()
    return data;
  }

  function addGenerateTicket() {
    const airlineTicket = {
      id: nanoid(4),
      ticketHolder: faker.name.fullName(),
      airport: faker.address.state(),
      airportAbbr: faker.address.stateAbbr(),
      dateAndTimePurchased: faker.datatype.datetime(),
      ticketPrice: faker.datatype.float(),
      precheckCompleted: faker.datatype.boolean()
    };
    tickets.push(airlineTicket);
    saveCurrentTicket();
    return airlineTicket;
  }

  
  // Reading all supermarkets
  function getTickets() {
    return tickets;
  }
  
  // Reading a single supermarket
  function getSingleTicket(id) {
    const result = tickets.find(ticket => ticket.id === id);
  if(result) {
    return result;
  }
  return null;
}
  
  // Updating a supermarket
  function updateTicket(id, data) {
    const index = tickets.findIndex(ticket => ticket.id === id)
    tickets[index] = {
      ...tickets[index],
      ...data
    };
    saveCurrentTicket()
    return tickets[index];
  }
  
  // Delete a supermarket
  function deleteTicket(id) {
    const index = tickets.findIndex(ticket => ticket.id === id);
    if(id[index]) {
      const deleted = tickets.splice(index, 1);
      saveCurrentTicket()
      return deleted;
    }
    return `Error: ticket with ID ${id} not found`;
  }
  
  function saveCurrentTicket() {
    const stringifiedData = JSON.stringify(tickets, null, 2);
    fs.writeFileSync("./data/tickets.json", stringifiedData)
    // console.log(stringifiedData);
    // console.log(typeof stringifiedData === "string")
  }
  
  // addSuperMarket({ name: "Great Foods", address: "1 Main Street", rating: 3.5 });
  // addSuperMarket({ name: "Best Foods", address: "2 Second Street", rating: 4.2 });
  // console.log("Before update", getSuperMarkets());
  // updateSuperMarket(0, { name: "Ultra Foods", rating: 3.2 })
  // console.log("After update", getSuperMarkets());
  
  // deleteSuperMarket(1);
  // console.log("After delete", getSuperMarkets());
  
  // for(let i = 0; i < 5; i ++) {
  //   addSuperMarket({
  //     name: faker.company.name(),
  //     address: faker.address.streetAddress(),
  //     rating: Number((Math.random() * 5).toFixed(2))
  //   });
  // }
  
  // console.log(getSuperMarkets());
  
  // updateTicket(index, data {
    
  // })
  
  saveCurrentTicket();
  
  module.exports = {
    addGenerateTicket,
    getSingleTicket,
    getTickets,
    addTicket,
    updateTicket,
    deleteTicket
  }