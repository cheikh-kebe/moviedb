import React from 'react';
import { useParams } from 'react-router';
import { usePersonFetch } from '../Hooks/usePersonFetch';

export const Profile = () => {
  const {personId} = useParams();
  
  const { state, error, loading } = usePersonFetch(personId);
  if (loading) return <div>Chargement</div>;
  if (error) return <div>Une erreur est survenue</div>;
  console.log(state);
  return (
    <div>
      
    </div>
  )
}
