import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
const Confirmation = () => {
  const { uniqueIdentifier } = useParams();

  useEffect(() => {
    const confirmUser = async () => {
      try {
        const userRef = doc(db, 'waitlist', uniqueIdentifier);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          // User found, mark as confirmed
          await updateDoc(userRef, { isVerified: true });
          console.log('User confirmed successfully.');
        } else {
          // User not found
          console.log('User not found.');
        }
      } catch (error) {
        console.error('Error confirming user:', error);
      }
    };

    confirmUser();
  }, [uniqueIdentifier]);
  return (
    <div className="container">
      <div className="mt-5">
        <h2 style={{ textAlign: 'center' }}>Congratulations</h2>
        <h4 style={{ textAlign: 'center' }}>
          You've have been added to the waitlist
        </h4>
      </div>
    </div>
  );
};

export default Confirmation;
