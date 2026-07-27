function ProjectCard({ projet }) {

  return (

    <div className="project-card">

      <h3>
        {projet.name}
      </h3>


      <p>
        {projet.description 
          ? projet.description 
          : "Aucune description disponible"}
      </p>


      <p>
        <strong>Langage :</strong> {projet.language || "Non défini"}
      </p>


      <a
        href={projet.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet GitHub
      </a>


    </div>

  );

}

export default ProjectCard;