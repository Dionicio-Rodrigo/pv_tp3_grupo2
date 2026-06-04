import { useState, useEffect } from 'react';
import proyectoService from "../services/proyectoServices.js";
import { Grid, Typography, Card, CardContent, Paper, List, ListItem, ListItemText, Box } from "@mui/material";

const DashBoard = () => {
  const [proyectos, setProyectos] = useState([]);
  const[mensajes, setMensajes] = useState([
     { de: "Alicia", cantidad: 2 },
    { de: "Marcos", cantidad: 4 },
    { de: "Héctor", cantidad: 3 }
  ]);

  useEffect(() => {
    const data = proyectoService.obtenerProyectos();
    setProyectos(data);
  }, []);

  const encurso = proyectos.filter((p)=> !p.finalizado).length;

  const totalMensajes = mensajes.reduce((total, mensaje) => total + mensaje.cantidad, 0);

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
    
      <Grid item xs={12} md={4}>
        <Card sx={{bgcolor: '#f5f5f5'}}>
          <CardContent>
           <Typography color ="textSecondary" variant="overline">Proyectos en curso</Typography> 
            <Typography variant="h4">{encurso}</Typography>
          </CardContent>
        </Card>
      </Grid>

       <Grid item xs={12} md={4}>
        <Card sx={{ bgcolor: '#e3f2fd' }}>
          <CardContent>
            <Typography color="textSecondary" variant="overline">Mensajes Pendientes</Typography>
            <Typography variant="h4">{totalMensajes}</Typography>
          </CardContent>
        </Card>
      </Grid>

        <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>Objetivos Generales</Typography>
          <Typography variant="body1" paragraph>
            Somos un grupo de la facultad convencidos de que la ingeniería se aprende resolviendo problemas de verdad.
            Queremos que aquí aprendas a liderar y a fabricar soluciones reales.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>Novedades</Typography>
        <Paper>
          <List>
            <ListItem divider><ListItemText primary='"Nutrición con Energía" se suspende el próximo viernes' /></ListItem>
            <ListItem divider><ListItemText primary='La inscripción para el Taller de SQL ha terminado' /></ListItem>
            <ListItem divider><ListItemText primary='"Probabilidad en Acción" prepara su presentación final' /></ListItem>
            <ListItem><ListItemText primary='Se compraron nuevos filamentos para Impresiones 3D' /></ListItem>
          </List>
        </Paper>
      </Grid>

       <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>Panel de Mensajes</Typography>
        <Paper>
          <List>
            {mensajes.map((m, index) => (
              <ListItem key={index} divider={index !== mensajes.length - 1}>
                <ListItemText primary={m.de} secondary={`${m.cantidad} mensajes nuevos`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>     

    </Grid>
  );    

};

export default DashBoard;
