import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Form = () => {
  const [team, setTeam] = useState([])
  const [oneMates, setOneMates] = useState('')
  const url = 'http://localhost:8000/team'

  useEffect(() => {
    const getAllMates = () => {
      Axios.get(url)
        .then(res => res.data)
        .then(data => setTeam(data))
        .catch(err => console.log(err))
    }
    getAllMates()
  }, [])

  const handleMates = (name) => setOneMates({ name })

  const postTeam = (event) => {
    event.preventDefault()
    if (!oneMates.name) return true
    Axios.post(url, oneMates)
      .then(res => res.data)
      .then(data => setTeam(data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
    Les Argonautes
        </h1>
      </header>
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form class="new-member-form" onSubmit={(event) => postTeam(event)}>
          <label for="name">Nom de l&apos;Argonaute</label>
          <input id="name" name="name" type="text" placeholder="Charalampos" onChange={(event) => handleMates(event.target.value)} />
          <button type="submit">Envoyer</button>
        </form>
        <h2>Membres de l'équipage</h2>
        <section class="member-list">
          {team.map(mates => <div class="member-item">{mates.name}</div>)}
        </section>
      </main>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  )
}

export default Form;