import React, { useState } from 'react';

interface Props {
    tickets: number;
}

const TicketSystem: React.FC<Props> = (props: Props) => {
    const [ticketsRemaining, setTicketsRemaining] = useState(props.tickets);

    function buyTicket() {
        if (ticketsRemaining > 0) {
            setTicketsRemaining(ticketsRemaining - 1);
            alert(`You have successfully purchased a ticket. There are now ${ticketsRemaining} tickets remaining.`);
        } else {
            alert(`Sorry, there are no more tickets remaining.`);
        }
    }

    return (
        <div>
            <button onClick={buyTicket}>Buy Ticket</button>
            <p>{`Remaining Tickets: ${ticketsRemaining}`}</p>
        </div>
    );
}

export default TicketSystem;
