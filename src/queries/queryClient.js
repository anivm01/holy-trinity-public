import { QueryClient } from 'react-query';

// Create and configure the QueryClient
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            refetchOnWindowFocus: true,
        },
    },
});

// Export the configured QueryClient
export default queryClient;