import { useQuery } from 'react-query';
import { fetchBroadcasts } from '../utils/api';


export const useBroadcasts = () => {
    return useQuery('broadcasts', fetchBroadcasts);
};
