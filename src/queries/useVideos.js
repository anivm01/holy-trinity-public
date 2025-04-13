import { useQuery } from 'react-query';
import { fetchVideos, } from '../utils/api';


export const useVideos = () => {
    return useQuery('videos', fetchVideos, {
        refetchOnWindowFocus: false,
    });
};


