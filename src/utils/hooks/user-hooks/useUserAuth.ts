import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { UserActions } from '../../types/JsonCommunicationType';

// Custom hook for user authentication
export const useUserAuth = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const { dispatch } = useAuthContext();

  // Function to handle authentication
  const auth = async (email: string, password: string, url: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${url}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (res.ok) {
        dispatch({
          type: UserActions.LOGIN,
          payload: json,
        });

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError('An error occured.Please try again');
    }
  };

  // Return the auth function, loading state, and error state
  return { auth, isLoading, error };
};
