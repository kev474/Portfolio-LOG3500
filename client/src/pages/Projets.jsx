import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";


function Projets() {


  const [projets,setProjets] = useState([]);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");



  useEffect(() => {


    fetch("https://api.github.com/users/kev474/repos")


    .then((response)=>{

      if(!response.ok){

        throw new Error("Erreur lors du chargement");

      }

      return response.json();

    })


    .then((data)=>{

      setProjets(data);

      setLoading(false);

    })


    .catch((err)=>{

      setError(err.message);

      setLoading(false);

    });



  },[]);



  return (

    <section>

      <h1>
        Nos projets
      </h1>


      {loading && (

        <p>
          Chargement des projets...
        </p>

      )}



      {error && (

        <p>
          {error}
        </p>

      )}



      <div>

        {projets.map((projet)=>(

          <ProjectCard

            key={projet.id}

            projet={projet}

          />

        ))}


      </div>


    </section>

  );


}


export default Projets;