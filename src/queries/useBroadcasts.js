import { useQuery } from 'react-query';
import { fetchBroadcasts, fetchLatestBroadcast } from '../utils/api';


export const useBroadcasts = () => {
    return useQuery('broadcasts', fetchBroadcasts, {
        refetchOnWindowFocus: false,
    });
};

export const useLatestBroadcast = () => {
    return useQuery('latestBroadcasts', fetchLatestBroadcast, {
        refetchOnWindowFocus: false,
    });
};
