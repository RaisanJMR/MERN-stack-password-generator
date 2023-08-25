import { useState, useEffect } from 'react'
import usePasswordGenerator from '../hooks/usePasswordGenerator'
import StrengthChecker from '../utils/StrengthChecker'
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { AiFillDelete } from "react-icons/ai"
import { db } from '../firebase'

const PasswordGenerator = () => {

  const [length, setLength] = useState(4)
  const [checkboxData, setCheckBoxData] = useState([
    { title: "uppercase", state: false },
    { title: "lowercase", state: false },
    { title: "numbers", state: false },
    { title: "symbols", state: false },
  ])
  const [copied, setCopied] = useState(false)
  const [passwords, SetPasswords] = useState([])
  const { password, error, generatePassword } = usePasswordGenerator()

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkboxData]
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state
    setCheckBoxData(updatedCheckboxData)
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  useEffect(() => {
    const getPasswords = () => {
      const colRef = collection(db, "passwords")
      const q = query(colRef, orderBy("createdAt"))
      try {
        onSnapshot(q, (snap) => {
          const savedPasswords = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          SetPasswords(savedPasswords)
        })
      } catch (error) {
        console.log("ERROR FETCHING DATA")
      }
    }
    getPasswords()
  }, [])
  const delPassword = (id) => {
    const docRef = doc(db, "passwords", id)
    deleteDoc(docRef).then(() => {
      alert("PASSWORD DELETED")
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className='content'>
      <div className="content-container">
        <div className="content-header">
          {error ? <h1 className='error'>{error}</h1> : <h1 className="password">{password}</h1>}
          <button className="copy" onClick={copyPassword}>{copied ? "copied" : "copy"}</button>
          <button className='copy' onClick={() => generatePassword(checkboxData, length)}>generate</button>
        </div>
        <div className="pass-length">
          <span>
            <label htmlFor="length">number of character</label>
            <label htmlFor="passLen">{length}</label>
          </span>
          <input type="range" min="4" max="20" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
        <div className="chkbox">
          {checkboxData.map((chk, index) => {
            return (
              <div key={index}>
                <input type="checkbox" className='chkround' onChange={() => handleCheckboxChange(index)} checked={chk.state} />
                <label htmlFor="chktitle">{chk.title}</label>
              </div>
            )
          })}
        </div>
        <StrengthChecker password={password} />
      </div>
      <div className="generated-passwords">
        {passwords.map((data, index) => {
          return (
            <div className='password-item' key={data.id}>
              <p>
                {data.generatedPassword}
              </p>
              <button className='del-password' onClick={() => delPassword(data.id)}><AiFillDelete /></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PasswordGenerator