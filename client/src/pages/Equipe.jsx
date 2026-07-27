function Equipe() {

  const membres = [
    "Membre 1",
    "Membre 2",
    "Membre 3"
  ];


  return (
    <section>

      <h1>Notre équipe</h1>

      <ul>

        {membres.map((membre, index) => (
          <li key={index}>
            {membre}
          </li>
        ))}

      </ul>

    </section>
  );

}

export default Equipe;