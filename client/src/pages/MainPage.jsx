import React from 'react'
import Header from '../components/Header'
import PasswordGenerator from '../components/PasswordGenerator'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"

const MainPage = () => {
    const colRef = collection(db, "passwords")
    getDocs(colRef).then((snapshot) => {
        let passwords = []
        snapshot.docs.forEach((doc) => {
            passwords.push({ ...doc.data(), id: doc.id })
        })
    }).catch((err) => {
        console.log(err.message)
    })
    return (
        <>
            <Header />
            <PasswordGenerator />
        </>
    )
}

export default MainPage