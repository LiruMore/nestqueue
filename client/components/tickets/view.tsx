import Ticket from "@/lib/types/ticket";
import Button from "../ui/button";
import { FolderCog } from "lucide-react";

interface TicketViewProps {
  className?: string;
  ticket?: Ticket;
  onDismiss: () => void;
}

export default function TicketView({
  className = "",
  ticket,
  onDismiss,
}: TicketViewProps) {
  if (!ticket) {
    return <div>Loading...</div>;
  }

  const createdOn = new Date(ticket.createdOn).toDateString();
  const updatedAt = new Date(ticket.updatedAt).toDateString();

  return (
    <div className={className}>
      <div className="p-.5 flex felx-container flex-aline-center ">
        <FolderCog width={16} height={16} />
        <p>{ticket.id}</p>
      </div>
      <p>{ticket.title}</p>
      <p>{ticket.priority}</p>
      <p>{ticket.description}</p>
      <p>{ticket.category}</p>
      <p>{ticket.site}</p>
      {ticket.assignedTo ? (
        <p>Assigned to {ticket.assignedTo}</p>
      ) : (
        <p>Unassigned</p>
      )}
      <p>Created by {ticket.createdBy}</p>
      <p>Created on {createdOn}</p>
      <p>Last modified on {updatedAt}</p>
      <Button onClick={onDismiss}>Close</Button>
    </div>
  );
}
