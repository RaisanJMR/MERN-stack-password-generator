import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('X#i%V7f63loj')

  const [error, setError] = useState('')
  const generatePassword = (checkboxData, passLength) => {
    let charset = '',
      generatedPassword = ''

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state)

    if (selectedOption.length === 0) {
      setError('select any option')
      setPassword('')
      return
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case 'uppercase':
          charset += 'ABCDEFGHIJKLMNNOPQRSTUWXYZ'
          break
        case 'lowercase':
          charset += 'abcdefghijklmnopqrstuvwxyz'
          break
        case 'numbers':
          charset += '0123456789'
          break
        case 'symbols':
          charset += '!@#$%^&*()_-+?/{}[]'
          break
        default:
          break
      }
    })

    for (let index = 0; index < passLength; index++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      generatedPassword += charset[randomIndex]
    }

    setPassword(generatedPassword)
    setError('')
    if (generatedPassword) {
      const colRef = collection(db, 'passwords')
      addDoc(colRef, {
        generatedPassword,
        createdAt: serverTimestamp(),
      })
        .then(() => {
          alert('ADDED TO DB')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return { password, error, generatePassword }
}

export default usePasswordGenerator
