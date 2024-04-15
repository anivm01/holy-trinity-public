import React from "react";
import { useParams } from "react-router-dom";
import { BroadcastsSingle } from "../../components/Broadcasts";

const SingleBroadcastsPage = () => {
  const params = useParams();
  return <BroadcastsSingle id={params.id} />;
};

export default SingleBroadcastsPage;
