"use client"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import {app} from '../firebase/credentials'
import axios from "axios"

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [plane, setPlane] = useState(null);


  
  const auth = getAuth(app);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setEmail(null);
        setName(null);
        setPlane(null);
      } 
      else if (user) {
        const findUser = async (email) => {
          try {
            const response = await axios.get(`https://itoa-backend.onrender.com/api/users/${email}`);
            setName(response.data.name);
            setPlane(response.data.subscriptionPlan);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              console.log('User not found');
            } else {
              console.log('Failed to find user:', error.message);
            }
          }
        };
  
        findUser(user.email);
        setEmail(user.email);
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  
  return (
    <UserContext.Provider value={{ name,email,plane }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
