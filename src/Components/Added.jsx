import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Added = () => {
  const [confirmedList, setConfirmedList] = useState([]);

  useEffect(() => {
    const fetchConfirmedList = async () => {
      try {
        const waitlistRef = collection(db, 'waitlist');
        const confirmedQuery = query(
          waitlistRef,
          where('isVerified', '==', true)
        );
        const confirmedSnapshot = await getDocs(confirmedQuery);

        const confirmedData = confirmedSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setConfirmedList(confirmedData);
      } catch (error) {
        console.error('Error fetching confirmed list:', error);
      }
    };

    fetchConfirmedList();
  }, []);

  return (
    <div className=" container mt-5">
      <ul>
        <h1>Confirmed List</h1>
        <hr />
      </ul>

      <ul className="mt-4">
        {confirmedList.map((person) => (
          <li key={person.id} className="mb-4">
            <div>full name : {person.fullname}</div>
            <div>email : {person.email}</div>
            <div>phone number : {person.phoneNumber}</div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Added;
