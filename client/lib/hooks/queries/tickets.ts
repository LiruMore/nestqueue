import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateTicket, getTickets } from "@/lib/api/tikets";
import Ticket from "@/lib/types/ticket";

export const useTicketsQuery = () =>
  useQuery({
    queryKey: ["tickets"],

    retry: 0,
    queryFn: () => getTickets(),
  });

export const useCreateTicketQuery = () => {
  const client = useQueryClient();

  return useMutation<Ticket, Error, Partial<Ticket>>({
    mutationFn: (ticket) => CreateTicket(ticket),
    onSuccess: () =>
      client.invalidateQueries({
        queryKey: ["tickets"],
      }),
  });
};
