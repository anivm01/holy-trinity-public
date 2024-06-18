import { useQuery } from 'react-query';
import { fetchAnnouncement } from '../utils/api';


export const useAnnouncement = () => {
    return useQuery('announcement', fetchAnnouncement, {
        refetchOnWindowFocus: false,
    });
};