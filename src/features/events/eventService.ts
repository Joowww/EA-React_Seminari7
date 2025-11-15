import api from '../../api';
import type { Event } from '../../modules/event';

export const getEvents = async (): Promise<Event[]> => {
  const res = await api.get('/event');
  return res.data;
};

export const joinEvent = async (eventId: string): Promise<any> => {
  const res = await api.post(`/event/${eventId}/join`);
  return res.data;
};

export const unjoinEvent = async (eventId: string): Promise<any> => {
  const res = await api.post(`/event/${eventId}/unjoin`);
  return res.data;
};

export const getEventWithParticipants = async (eventId: string): Promise<Event> => {
  const res = await api.get(`/event/${eventId}/participants`);
  return res.data;
};