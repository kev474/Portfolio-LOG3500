function Equipe() {

  const membres = [
    {
      nom: "Rachel ST JEAN",
      role: "Développement React (Frontend)"
    },
    {
      nom: "Kervins Lucien HERIVEAUX",
      role: "Intégration HTML / CSS"
    },
    {
      nom: "Djelissa CESAR",
      role: "Gestion de la base de données"
    }
  ];


  return (

    <section>

      <h1>Notre équipe</h1>


      <div className="team-container">

        {membres.map((membre, index) => (

          <div className="team-card" key={index}>

            <h2>
              {membre.nom}
            </h2>

            <p>
              {membre.role}
            </p>

          </div>

        ))}

      </div>


    </section>

  );

}


export default Equipe;