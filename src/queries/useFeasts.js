import { useQuery } from 'react-query';
import { fetchFeasts, fetchNextFeasts } from '../utils/api';

export const useFeasts = () => {
    return useQuery('feasts', fetchFeasts, {
        refetchOnWindowFocus: false,
    });
}

export const useNextFeasts = () => {
    return useQuery('nextFeasts', fetchNextFeasts, {
        refetchOnWindowFocus: false,
    });
}