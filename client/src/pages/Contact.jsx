import { useState } from "react";


function Contact() {


  const [formData, setFormData] = useState({

    nom: "",
    email: "",
    message: ""

  });


  const [envoye, setEnvoye] = useState(false);



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();


    console.log(formData);


    setEnvoye(true);


    setFormData({

      nom: "",
      email: "",
      message: ""

    });

  };



  return (

    <section>

      <h1>
        Contactez-nous
      </h1>


      <form onSubmit={handleSubmit}>


        <input

          type="text"

          name="nom"

          placeholder="Votre nom"

          value={formData.nom}

          onChange={handleChange}

          required

        />



        <input

          type="email"

          name="email"

          placeholder="Votre email"

          value={formData.email}

          onChange={handleChange}

          required

        />



        <textarea

          name="message"

          placeholder="Votre message"

          value={formData.message}

          onChange={handleChange}

          required

        />



        <button type="submit">

          Envoyer

        </button>


      </form>



      {envoye && (

        <p>

          ✅ Votre message a été envoyé avec succès !

        </p>

      )}


    </section>

  );

}


export default Contact;