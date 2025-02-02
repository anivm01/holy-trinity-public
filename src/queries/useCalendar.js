import { useQuery } from 'react-query';
import { fetchCalendar } from '../utils/api';

export const useCalendar = () => {
    return useQuery('calendar', fetchCalendar, {
        refetchOnWindowFocus: false,
    });
}

