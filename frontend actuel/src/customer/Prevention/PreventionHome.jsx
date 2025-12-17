import { Button } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import PreventionBanner from './Banner/PreventionBanner';



const PreventionHome = () => {
  const navigate = useNavigate();


  return (
    <div className='space-y-20'>
        <section>
            <PreventionBanner />
        </section>
        <section className="space-y-10 lg:space-y-0 lg:flex items-center gap-5 px-20">
          <div className='w-full lg:w-1/2'>
            <h1 className='text-2xl font-semibold pb-9'>
              Comment faire votre prevention ?
             <h4 className='text-sm text-gray-600'>(Aider nous à stopper les departs clandestins et gagner une récompense)</h4> 
             <h4 className='text-sm text-gray-600'>voici comment faire...</h4>
            </h1>
            <div className=' flex flex-wrap justify-center items-center gap-5'>
                <p><strong>Vous êtes temoin de mouvements suspects aux abords des zones côtières ou vous êtes au courant d'un potentiel départ :</strong></p>
              <p>Vous pouvez faire votre prevention de différentes manières :</p>
                <ul className='list-disc list-inside'>
                  <li>En appellant directement la police (le numero de la police se trouve dans la section en dessous)</li>
                  <li>En Contactant l'agence CILMI(numero dans la section en dessous)</li>
                  <li>En Alertant la compagnie NdankNdank</li>
                </ul>
                <p><strong>Pourquoi faire votre prevention en alertant la compagnie NdankNdank :</strong></p>
                <ul className='list-disc list-inside'>
                  <li>Chaque alerte serieuse donnant lieu à une intervention des autorités et empêchant un départ clandestin vous fera gagner une récompense financière</li>
                  <li>Vous pouvez suivre l'évolution de vos alertes et être informé des actions entreprises</li>
                  <li>Vous nous aiderez à créer des reports global sur les mouvements suspects et à fournir des informations précieuses aux autorités</li>
                </ul>
                <p><strong>Comment alerter la compagnie NdankNdank :</strong></p>
                <ul className='list-disc list-inside'>
                  <li>Cliquez sur Alerter NdankNdank dans la section suivante</li>
                  <li>Sur la page d'information de NdankNdank, clique sur creer une prevention</li>
                  <li>Remplissez le formulaire avec les informations demandées puis soumettre</li>
                </ul>
            </div>
          </div>
         <div className="w-full lg:w-1/2 border grid gap-3 grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh] ">
          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://www.marcketbalsan.fr/wp-content/uploads/2022/03/Embarcations-Senegal-02.jpg"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://cilmi.gouv.sn/media/2025/04/cropped-logo-CILMI-1.png"
              alt=""
            />
          </div>
          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://static.wixstatic.com/media/e5c368_45eb7d61808f4643b9f80f9357e710a4~mv2.png/v1/fit/w_2500,h_1330,al_c/e5c368_45eb7d61808f4643b9f80f9357e710a4~mv2.png"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://cilmi.gouv.sn/media/2025/10/SP-CILMI.png"
              alt=""
            />
          </div>
         </div>
        </section>
        <section className="px-20">
        <h1 className="text-3xl font-bold pb-10 ">Faites votre prévention auprès de ces différentes entités</h1>
            <div className='flex flex-wrap gap-5'>
                <div href="https://www.policenational.gouv.sn/" className='cursor-pointer'>
      <div className="w-56 md:w-80 rounded-md bg-slate-100 ">
        <img
          className="w-full h-[15rem] object-cover rounded-t-md"
          src= "https://marinenationale.gouv.sn/sites/default/files/2021-01/action%20de%20l%20etat%20en%20mer.JPG"
          alt=""
        />
        <div className="p-5 space-y-2">
          <h1 className="font-bold text-xl">Police Nationale</h1>
          <div>
            <div className=" text-white text-sm p-1 bg-green-700 rounded-full w-14 flex items-center justify-center gap-1">
              4.5
              <StarIcon sx={{ fontSize: "16px" }} />
            </div>
          </div>
          <p>
            La Police Nationale Sénégalaise en coopération avec la police maritime est chargée de maintenir l'ordre public et de lutter contre la criminalité, y compris les départs clandestins.
             
          </p>
           <p><strong>Numero vert Police:</strong>800 00 17 00 </p>
          <p><strong>Contact:</strong> brppolice@interieur.gouv.sn.</p>
          <p>Dakar</p>
        </div>
      </div>
    </div>
     <div href="https://cilmi.gouv.sn/" className='cursor-pointer'>
      <div className="w-56 md:w-80 rounded-md bg-slate-100 ">
        <img
          className="w-full h-[15rem] object-cover rounded-t-md"
          src= "https://cilmi.gouv.sn/media/2024/11/DSC_0150-scaled.jpg"
          alt=""
        />
        <div className="p-5 space-y-2">
          <h1 className="font-bold text-xl">CILMI Sénégal</h1>
          <div>
            <div className=" text-white text-sm p-1 bg-green-700 rounded-full w-14 flex items-center justify-center gap-1">
              4.5
              <StarIcon sx={{ fontSize: "16px" }} />
            </div>
          </div>
          <p>
            Le CILMI coordonne toutes les actions de l’État sénégalais contre la migration irrégulière.
            Il mène des campagnes de prévention pour sensibiliser les jeunes et proposer des alternatives.
            Il supervise la surveillance des frontières et la lutte contre les réseaux de passeurs.
            Il organise la réinsertion des migrants de retour et encourage la migration légale.
            Enfin, il pilote une stratégie nationale décentralisée grâce aux comités régionaux et départementaux.  
          </p>
          <p><strong>Numero vert cilmi:</strong>800 00 10 15 </p>
          <p><strong>Contact:</strong> cilmi@interieur.gouv.sn</p>
          <p>Dakar</p>
        </div>
      </div>
    </div>
     <div onClick={() => navigate("/prevention/NdankNdank")} className='cursor-pointer'>
      <div className="w-56 md:w-80 rounded-md bg-slate-100 ">
        <img
          className="w-full h-[15rem] object-cover rounded-t-md"
          src= "https://static.wixstatic.com/media/e5c368_de36ac3064de445e80cb8c376518d934~mv2.jpg/v1/fill/w_350,h_240,al_c/e5c368_de36ac3064de445e80cb8c376518d934~mv2.jpg"
          alt=""
        />
        <div className="p-5 space-y-2">
          <h1 className="font-bold text-xl">NdankNdank</h1>
          <div>
            <div className=" text-white text-sm p-1 bg-green-700 rounded-full w-14 flex items-center justify-center gap-1">
              4.5
              <StarIcon sx={{ fontSize: "16px" }} />
            </div>
          </div>
          <p>
            Nous sommes une organisation de Lutte contre la migration clandestine. Nous offrons des solutions de financement pour aider les jeunes à réaliser leurs projets localement et à éviter les risques liés à la migration irrégulière.
            Mais surtout, nous mettons en place un système de prévention qui permet à nos utilisateurs de signaler les mouvements suspects et de gagner des récompenses pour chaque alerte sérieuse.
                
            </p>
            <p><strong>Contact:</strong> ndankndank@interieur.gouv.sn</p>   
            <p><strong>Numero NdankNdank:</strong> 800 44 05 32</p>
          <p> Dakar</p>
          <Button variant="contained" color="primary">
            Créer une prevention
          </Button>
        </div>
      </div>
    </div> 
            </div>
      </section>
        {/* Home Page */}
    </div>
  )
}

export default PreventionHome