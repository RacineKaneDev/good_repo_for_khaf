import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Step1_Owner = ({ formik }) => {
  const { auth } = useSelector(store => store);
  const navigate = useNavigate();
  const isAuthenticated = auth.user != null;

  return (
    <Box>
      <Typography variant="h5" className="text-center pb-9 font-bold">
        Détails du Propriétaire
      </Typography>

      <div className="space-y-6">
        {isAuthenticated ? (
           // Authenticated State: Read-only info
           <Box className="bg-gray-50 p-6 rounded-md border border-gray-200 text-center space-y-4">
             <Typography variant="body1">
               Vous êtes connecté en tant que :
             </Typography>
             <Typography variant="h6" className="font-bold text-teal-600">
                {auth.user.fullName}
             </Typography>
             <Typography variant="body2" color="textSecondary">
                {auth.user.email}
             </Typography>
             <Typography variant="caption" className="block pt-2 text-gray-500">
               Ces informations seront utilisées pour créer votre entreprise.
             </Typography>
           </Box>
        ) : (
          // Unauthenticated State: Redirect to Login prompt
           <Box className="bg-orange-50 p-6 rounded-md border border-orange-200 text-center space-y-4">
              <Typography variant="h6" color="error">
                Connexion Requise
              </Typography>
              <Typography variant="body1">
                Vous devez être connecté pour devenir partenaire et créer une entreprise.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => navigate("/login")}
                sx={{ mt: 2 }}
              >
                Se Connecter
              </Button>
           </Box>
        )}

        {/* Hidden inputs to keep formik happy if needed, or we just ignore them in this step if auth */}
        {!isAuthenticated && (
          // We could allow detailed registration here, but for consistency with backend requirement,
          // it is safer to force the standard registration flow.
          // However, to match the "form" feel, we could render fields but disabled or just the message above.
          // For this implementation, I'll stick to the message above.
          <></>
        )}
      </div>
    </Box>
  );
};

export default Step1_Owner;
