import React, { useEffect, useState } from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { UsersTable } from './components/users-table'
import { Modal } from './components/modal'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [reload, setReload] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    setReload(false)
    setUsers(JSON.parse(localStorage['users'] || '[]'))
  }, [reload])

  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className="app">
      <div className="flex-1">
        <Header />
        <div className="page-content">
          <UsersTable openModal={toggleModal} users={users} setUser={setUser} setReload={setReload} />
          {showModal && (
            <Modal setReload={setReload} users={users} toggleModal={toggleModal} user={user} setUser={setUser} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
