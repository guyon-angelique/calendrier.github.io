function event_maternelles() {
	var accueil_maternelles = [];
	var accueil1 = [6, 4, 2021, 'petites sections'];
		accueil_maternelles.splice(0, 0, accueil1);
	var accueil2 = [26, 4, 2021, 'moyennes sections'];
		accueil_maternelles.splice(1, 0, accueil2);
	var accueil3 = [3, 5, 2021, 'CP et grandes sections'];
		accueil_maternelles.splice(2, 0, accueil3);
	var accueil4 = [10, 5, 2021, 'moyennes sections'];
		accueil_maternelles.splice(3, 0, accueil4);
	var accueil5 = [11, 5, 2021, 'petites sections'];
		accueil_maternelles.splice(4, 0, accueil5);
	var accueil6 = [31, 5, 2021, 'CP et grandes sections'];
		accueil_maternelles.splice(5, 0, accueil6);
	var accueil7 = [1, 6, 2021, 'petites sections'];
		accueil_maternelles.splice(6, 0, accueil7);
	var accueil8 = [7, 6, 2021, 'moyennes sections'];
		accueil_maternelles.splice(7, 0, accueil8);
	var accueil9 = [14, 6, 2021, 'CP et grandes sections']
		accueil_maternelles.splice(8, 0, accueil9);
		
	return accueil_maternelles;
}

function event_bricolages() {
	var dates_bricolages = [];

	
	return dates_bricolages;
}

function event_conges() {
	var dates_conges = [];
	var debut_conges1 = 14;
	var fin_conges1 = 27;
	var nb_conges = fin_conges1 - debut_conges1;
	var conges1 = [];
	for(i=0;i<=nb_conges;i++)
	{
		var jour_conges = debut_conges1+i;
		conges1.splice(i, 0, [jour_conges, 6, 2021, 'conges']);
	}
	dates_conges.splice(0, 0, conges1);
	
	var debut_conges2 = 12;
	var fin_conges2 = 18;
	var nb_conges = fin_conges2 - debut_conges2;
	var conges2 = [];
	for(i=0;i<=nb_conges;i++)
	{
		var jour_conges = debut_conges2+i;
		conges2.splice(i, 0, [jour_conges, 7, 2021, 'conges']);
	}
	dates_conges.splice(1, 0, conges2);
	
	var debut_conges3 = 2;
	var fin_conges3 = 22;
	var nb_conges = fin_conges3 - debut_conges3;
	var conges3 = [];
	for(i=0;i<=nb_conges;i++)
	{
		var jour_conges = debut_conges3+i;
		conges3.splice(i, 0, [jour_conges, 8, 2021, 'conges']);
	}
	dates_conges.splice(2, 0, conges3);	

	return dates_conges;
}

function date() {
	var date = new Date();
	var jour = date.getDate();
	var mois = date.getMonth();
	var annee = date.getYear();

	document.getElementById('cache').innerHTML = '<input type="button" id="jour" value="'+jour+'"/><input type="button" id="mois" value="'+mois+'"/><input type="button" id="annee" value="'+annee+'"/>';
	
}
function afficher_titre() {
	var mois_affiche = document.getElementById('mois').value;
	var annee_affiche = document.getElementById('annee').value;

	if(annee_affiche<=200)
		{
			annee = Number(annee_affiche) + 1900;
		}
    mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
    jours_dans_moi = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if(annee%4 == 0 && annee!=1900)
		{
			jours_dans_moi[1]=29;
		}
    total = jours_dans_moi[mois_affiche];
	document.getElementById('titre').innerHTML = '<p>'+mois[mois_affiche]+' '+annee+'</p>';
}




function calendrier()
{

	var jour = document.getElementById('jour').value;
	var moi = document.getElementById('mois').value;
	var annee = document.getElementById('annee').value;
	var annee = Number(annee) +1900;
	var date = new Date(annee, moi, jour);
	
	var date_du_jour = new Date();
	var jour_date_jour = date_du_jour.getDate();
	var mois_date_jour = date_du_jour.getMonth();
	var annee_date_jour = date_du_jour.getYear();
	var annee_date_jour= Number(annee_date_jour) +1900;
	
	var accueil_maternelles = event_maternelles();
	var affiche_maternelles=[];
	for(j=0;j<accueil_maternelles.length;j++)
	{
	verif_moi = Number(moi)+1;
	if(accueil_maternelles[j][1]==verif_moi && accueil_maternelles[j][2]==annee)
	{
	affiche_maternelles.splice(j, 0, [accueil_maternelles[j][0], accueil_maternelles[j][3]]);
	}}
	
	var bricolages = event_bricolages();
	var affiche_bricolages = [];
	for(j=0;j<bricolages.length;j++)
	{
	verif_moi=Number(moi)+1;
	if(bricolages[j][1]==verif_moi && bricolages[j][2]==annee)
	{
	affiche_bricolages.splice(j, 0, bricolages[j][0]);
	}}
	
	var conges = event_conges();
	var affiche_conges = [];
	
	for(j=0;j<conges.length;j++)
	{
		verif_moi=Number(moi)+1;
		for(i=0;i<conges[j].length;i++)
		{
			
		if(conges[j][i][1]==verif_moi && conges[j][i][2]==annee)
		{
			affiche_conges.splice(j, 0, conges[j][i][0]);
		}
		}
	}
	
	
	
	var test_afficher_event=0;
	if(affiche_maternelles.length!=0 || affiche_bricolages.length!=0 || affiche_conges!=0)
	{
	var test_afficher_event=1;
	}
	
    
    mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
    jours_dans_moi = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if(annee%4 == 0 && annee!=1900)
    {
        jours_dans_moi[1]=29;
    }
    total = jours_dans_moi[moi];
	
    dep_j = date;
    dep_j.setDate(1);
    if(dep_j.getDate()==2)
    {
        dep_j=setDate(0);
    }
    dep_j = dep_j.getDay();
    chaine_liste = '<tbody id="cal_body">';
	chaine_liste += '<tr class="cal_j_semaines"><th>D</th><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th></tr><tr>';

	sem = 0;
    for(i=1;i<=dep_j;i++)
    {
		if(moi==0)
		{
			chaine_liste += '<td class="cal_jours_av_ap">'+(jours_dans_moi[11]-dep_j+i)+'</td>';
			sem++
		}
		else
		{
			chaine_liste += '<td class="cal_jours_av_ap">'+(jours_dans_moi[moi-1]-dep_j+i)+'</td>';
			sem++;
		}
    }
    for(i=1;i<=total;i++)
    {

        if(sem==0)
        {
            chaine_liste += '<tr>';
        }
		if(test_afficher_event==1)
		{
			var maternelles=0;
			var bricolages=0;
			var conges=0;
			var jour_ok=0;
			if(affiche_maternelles.length!=0)
			{
				for(j=0;j<affiche_maternelles.length;j++)
				{
					if(affiche_maternelles[j][0]==i)
					{
						var maternelles=1;
						var detail_maternelles = affiche_maternelles[j][1];
					}
				}
			}
			if(affiche_bricolages.length!=0)
			{
				for(j=0;j<affiche_bricolages.length;j++)
				{
					if(affiche_bricolages[j][0]==i)
					{
						var bricolages=1;
					}
				}
			}
			if(affiche_conges.length!=0)
			{
				for(j=0;j<affiche_conges.length;j++)
				{
					if(affiche_conges[j]==i)
					{
						var conges=1;
					}
				}
			}
			if(jour_date_jour==i && moi==mois_date_jour && annee==annee_date_jour)
			{
				jour_ok=1;
			}
			
			if(jour_ok==1)
			{
				if(bricolages==1)
				{
					chaine_liste += '<td class="bricolages_aujourdhui">'+i+'</td>';
				}
				if(maternelles==1 && conges==0)
				{
					chaine_liste += '<td class="maternelles_aujourdhui">'+i+'</td>';
				}
				if(maternelles==0 && conges==1)
				{
					chaine_liste += '<td class="conges_aujourdhui">'+i+'</td>';
				}
				if(maternelles==1 && conges==1)
				{
					chaine_liste += '<td class="maternelles_conges_aujourdhui" title="Accueil maternelles : '+detail_maternelles+'"><span class="maternelles_double"><span class="int_double">'+i+'</span></span></td>';
				}
				else if(bricolages==0 && maternelles==0 && conges==0)
				{
					chaine_liste += '<td class="cal_aujourdhui">'+i+'</td>';
				}
			}
			else if(jour_ok==0)
			{
				if(bricolages==1)
				{
					chaine_liste += '<td class="bricolages">'+i+'</td>';
				}
				if(maternelles==1 && conges==0)
				{
					chaine_liste += '<td class="maternelles" id="'+i+'" title="Accueil maternelles: '+detail_maternelles+'">'+i+'</td>';
				}
				if(maternelles==0 && conges==1)
				{
					chaine_liste += '<td class="conges">'+i+'</td>';
				}
				if(maternelles==1 && conges==1)
				{
					chaine_liste += '<td class="maternelles_conges" title="Accueil maternelles : '+detail_maternelles+'"><span class="maternelles_double"><span class="int_double">'+i+'</span></span></td>';
				}
				else if(bricolages==0 && maternelles==0 && conges==0)
				{
					chaine_liste += '<td>'+i+'</td>';
				}
			}
		}
		else
		{
			if(jour_ok==i)
			{
				chaine_liste += '<td class="cal_aujourdhui">'+i+'</td>';
			}
			else
			{
				chaine_liste += '<td>'+i+'</td>';
			}
		}
		
        sem++;
        if(sem==7)
        {
            chaine_liste += '</tr>';
            sem=0;
        }
		
		
    }
    for(i=1;sem!=0;i++)
    {
        chaine_liste += '<td class="cal_jours_av_ap">'+i+'</td>';
        sem++;
        if(sem==7)
        {
            chaine_liste += '</tr>';
            sem=0;
        }
    }
    chaine_liste += '</tbody></table>';
document.getElementById('cal_calendrier').innerHTML = chaine_liste;




}


function affichage_event() {
var date = new Date();
var jour = date.getDate();
var mois = date.getMonth();
var annee = date.getYear();
var date_jour = new Date(Number(annee)+1900, mois, jour);

var pour_affichage = [];

var dates_maternelles = event_maternelles();

	if(dates_maternelles.length!=0)
	{
		var verif_maternelles = [];
		for(i=0;i<dates_maternelles.length;i++)
		{
			var verif = new Date(dates_maternelles[i][2], Number(dates_maternelles[i][1])-1, dates_maternelles[i][0]);
			if(verif>=date_jour)
			{
				verif_maternelles.splice(i, 0, [dates_maternelles[i][0], dates_maternelles[i][1], dates_maternelles[i][2], dates_maternelles[i][3], 'maternelles']);
			}
		}
		if(verif_maternelles.length>3)
		{
			nb_supp = Number(verif_maternelles.length)-3;
			var suppr = verif_maternelles.splice(3, nb_supp);
		}
		for(j=0;j<verif_maternelles.length;j++)
		{
			pour_affichage.splice(j, 0, verif_maternelles[j]);
		}
	}
	
var dates_bricolages = event_bricolages();
	if(dates_bricolages.length!=0)
	{
		var verif_bricolages = [];
		for(z=0;z<dates_bricolages.length;z++)
		{
			var verif = new Date(dates_bricolages[z][2], Number(dates_bricolages[z][1])-1, dates_bricolages[z][0]);
			if(verif>=date_jour)
			{
				verif_bricolages.splice(z, 0, [dates_bricolages[z][0], dates_bricolages[z][1], dates_bricolages[z][2], dates_bricolages[z][3], 'bricolages']);
			}
		}
		if(verif_bricolages.length>3)
		{
			nb_supp = Number(verif_bricolages.length)-3;
			var suppr = verif_bricolages.splice(3, nb_supp);
		}
		for(y=0;y<verif_bricolages.length;y++)
		{
			pour_affichage.splice(y, 0, verif_bricolages[y]);
		}
	}

if(pour_affichage.length!=0) {
	for(i=0;i<pour_affichage.length;i++)
	{
		var pour_tri = new Date(pour_affichage[i][2], Number(pour_affichage[i][1])-1, pour_affichage[i][0]);
		var test = pour_tri.getTime();
		pour_affichage[i].splice(0, 0, test);
		
	}
	
	pour_affichage.sort(function(a, b) {
	return a[0] - b[0];});
	
	if(pour_affichage.length!=0) 
	{
		if(pour_affichage.length>3)
		{
			var supp = Number(pour_affichage.length)-3;
			affichage_ok = pour_affichage;
			var a_suppr = affichage_ok.splice(3, supp);
		}
		else
		{
			affichage_ok = pour_affichage;
		}
	}
	
	chaine_liste2 = '<p style="display:none;"></p>';
	for(i=0;i<affichage_ok.length;i++)
	{
		if(affichage_ok[i][5]=='maternelles')
		{
			chaine_liste2 += '<p class="maternelles_aff">Le '+affichage_ok[i][1]+'/'+affichage_ok[i][2]+'/'+affichage_ok[i][3]+' : '+affichage_ok[i][4];
		}
		if(affichage_ok[i][5]=='bricolages')
		{
			chaine_liste2 += '<p class="bricolages_aff">Le '+affichage_ok[i][1]+'/'+affichage_ok[i][2]+'/'+affichage_ok[i][3]+' : '+affichage_ok[i][4];
		}
	}
	document.getElementById('afficher_dates').innerHTML = chaine_liste2;
	
}
var conges = event_conges();
if(conges.length!=0)
{
	var date = new Date(Number(annee)+1900, mois, jour);
	if(pour_affichage.length!=0)
	{
	var chaine_liste3 = chaine_liste2;
	}
	else
	{
		var chaine_liste3 = '<p style="display:none;"></p>';
	}
	for(i=0;i<conges.length;i++)
	{
		var verif_date = new Date(conges[i][0][2], Number(conges[i][0][1])-1, conges[i][0][0]);
		var f = verif_date.getTime()-date.getTime();
		var long_tabl = Number(conges[i].length)-1;
		var verif_fin = new Date(conges[i][long_tabl][2], Number(conges[i][long_tabl][1])-1, conges[i][long_tabl][0]);

		if(verif_date<=date && verif_fin>=date)
		{
			chaine_liste3 += '<p class="conges_aff">Du '+conges[i][0][0]+'/'+conges[i][0][1]+'/'+conges[i][0][2]+' au '+conges[i][long_tabl][0]+'/'+conges[i][long_tabl][1]+'/'+conges[i][long_tabl][2]+' : fermeture pour congés</p>'

		}

		if(0<=f && f<=2592000000)
		{
			chaine_liste3 += '<p class="conges_aff">Du '+conges[i][0][0]+'/'+conges[i][0][1]+'/'+conges[i][0][2]+' au '+conges[i][long_tabl][0]+'/'+conges[i][long_tabl][1]+'/'+conges[i][long_tabl][2]+' : fermeture pour congés</p>'
		}

	}
	document.getElementById('afficher_dates').innerHTML = chaine_liste3;
}

}
