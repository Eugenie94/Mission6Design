$(function() {
    // function and name of the form
    $("form[name='registration']").validate({

      rules: {
        // names on the left: values
        // names on the right: rules
        civilite: "required",
        name: {
            required: true,
            minlength: 2
        },
        sexe: "required",
        telephone: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true
        },
      },
      // error messages
      messages: {
        name: " Veuillez saisir votre nom.",
        sexe: " Veuillez saisir votre sexe.",
        telephone: {
          required: " Veuillez saisir votre téléphone.",
          minlength: " Votre téléphone doit afficher 10 chiffres.",
          maxlength: " Votre téléphone doit afficher 10 chiffres.",
        },
        email: " Veuillez saisir votre adresse e-mail.",
        website: {
          url: true,
        }

      },

      submitHandler: function(form) {
        form.submit();
        
      }
    });
  });
  