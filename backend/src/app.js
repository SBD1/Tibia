const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
      host : 'db',
      port : 5433,
      user: 'postgres',
      password: 'postgres',
      database: 'tibia',
    },
});

app.use(cors());
app.use(bodyParser.json());

// let teste = db.select('*')
// .from('item');

app.get("/armas", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('armas');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/batalha", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('batalha');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/batalha_pvc_cm", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('batalha_pvc_cm');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/batalha_pvc_sm", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('batalha_pvc_sm');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/batalha_pvp_cm", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('batalha_pvp_cm');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/batalha_pvp_sm", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('batalha_pvp_sm');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/conta", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('conta');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/criatura", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('criatura');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/equipamento", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('equipamento');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/guilda", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('guilda');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/habilidades", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('habilidades');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/historico", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('historico');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/instancia_criatura", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('instancia_criatura');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/instancia_criatura_carrega_instancia_item", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('instancia_criatura_carrega_instancia_item');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/instancia_item", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('instancia_item');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/instancia_item_posicao", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('instancia_item_posicao');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/inventario", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('inventario');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/inventario_guarda_instancia_item", async (req, res) => {
  try {
    console.log("Acessei o banco!");
    const tibia = await db.select().from('inventario_guarda_instancia_item');
    res.status(200).json(tibia);
  } catch (error) {
    console.log("Deu ruim!!!");
    return res.status(400).json({ message: `Can't list tibia: ${error}` });
  }
});

app.get("/item", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('item');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/localizacao", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('localizacao');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/mapa", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('mapa');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/mochila", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('mochila');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/npc", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('npc');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/npc_carrega_instancia_item", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('npc_carrega_instancia_item');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/personagem", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('personagem');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/player", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('player');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/players_guilda", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('players_guilda');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/regiao", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('players_guilda');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/riqueza", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('players_guilda');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/vende", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('players_guilda');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

  app.get("/get_tipo_item", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.raw('SELECT public.get_tipo_item(?)', id_item);
      res.status(200).json(tibia.data);
    } catch (error) {
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list tibia: ${error}` });
    }
  });

module.exports = app;