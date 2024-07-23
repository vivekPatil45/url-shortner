import { storeClicks } from '@/db/apiCliks';
import { getLongUrl } from '@/db/apiUrls';
import useFetch from '@/hooks/useFetch';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners';

const RedirectLink = () => {
    const{id} = useParams();
    const {loading, data, fn} = useFetch(getLongUrl, id);

    const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
        id: data?.id,
        originalUrl: data?.original_url,
    });
    
    useEffect(() => {
        fn();
      }, []);
    
      useEffect(() => {
        if (!loading && data) {
          fnStats();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loading]);
    
      if (loading || loadingStats) {
        return (
          <>
            <BarLoader width={"100%"} color="#36d7b7" />
            <br />
            Redirecting...
          </>
        );
      }
    
      return null;
}

export default RedirectLink

// 02:23:37 URL Info API