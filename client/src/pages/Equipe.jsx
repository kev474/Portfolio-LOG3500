function Equipe() {
  const membres = [
    {
      nom: "Kervins Lucien Heriveaux",
      role: "Développeur",
      image: "/images/kervins.jpg",
      bio: "Développeur responsable de la conception et de l'intégration des fonctionnalités du portfolio."
    },
    {
      nom: "Djelissa Cesar",
      role: "Développeur",
      image: "/images/djelissa.jpg",
      bio: "Développeur responsable de la logique applicative et des fonctionnalités du projet."
    },
    {
      nom: "Rachel Saint-Jean",
      role: "Designer",
      image: "/images/rachel.jpg",
      bio: "Responsable du design, de l'organisation visuelle et de l'expérience utilisateur."
    }
  ];

  return (
    <section className="equipe">

      <h1>Notre équipe</h1>

      <div className="equipe-container">

        {membres.map((membre) => (
          <article className="membre-card" key={membre.nom}>

            <img
              src={membre.image}
              alt={`Photo de ${membre.nom}`}
            />

            <h2>{membre.nom}</h2>

            <h3>{membre.role}</h3>

            <p>{membre.bio}</p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Equipe;