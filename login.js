
    const btnCadastrar= document.querySelector("#btnCadastrar")
    
    
        name_player = btnCadastrar.addEventListener("click", function  (event){
            event.preventDefault();
            
            const formularioCadastro = document.querySelector('#formularioCadastro');
           return formularioCadastro.id_usuario.value;
            
        })

        const createPlayer = (request, response) => {
            const { id_player} = request.body
          
            pool.query('INSERT INTO player (id_player) VALUES ($1)', [id_player], (error, result) => {
              if (error) {
                throw error
              }
              response.status(201).send(`Player criado com sucesso.`)
            })
          }
        
  