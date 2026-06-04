import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Paper, Box, Avatar, Divider } from "@mui/material";

const Perfil = () => {
  const [perfil, setPerfil] = useState({
    nombre: "Martin Fernandez",
    dni: "46.369.852",
    correo: "martin.fernandez@unju.edu.ar",
  });

   const [mensaje, setMensaje] = useState({
    destinatario: "",
    asunto: "",
    texto: "",
  });

   return (
    <Grid container spacing={3} sx={{ p : 3 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>Mi Perfil
        </Typography>
      </Grid>

    <Grid item xs={12} md={6}>
      <Paper elevation={3} sx={{ p: 3 }}>
         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}> 
           <Avatar sx={{ width: 80, height: 80, mr: 2 }}/>
             <Box>
              <Typography variant="h5">Martinandez2</Typography>
              <Typography variant="subtitle1" color="textSecondary">Alumno</Typography>
            </Box>
          </Box>

         <Divider sx={{ my: 2 }} />

         <Typography variant="h6" gutterBottom>Información Personal</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre Completo"
                value={perfil.nombre}
                onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="DNI"
                value={perfil.dni}
                onChange={(e) => setPerfil({ ...perfil, dni: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">Actualizar Perfil</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>Nuevo Mensaje</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Destinatario"
                value={mensaje.destinatario}
                onChange={(e) => setMensaje({ ...mensaje, destinatario: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Mensaje"
                value={mensaje.texto}
                onChange={(e) => setMensaje({ ...mensaje, texto: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="secondary">Enviar Mensaje</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>       
    
    </Grid>
  );
};

export default Perfil;
