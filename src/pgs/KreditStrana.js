import KreditKomponenta from "../components/KreditKomponenta";


function KreditStrana(){

    const tekstNaslov = "Proveri svoju kreditnu sposobnost!";

    function proveriKlijenta(imeprezime, plata, rata){

        if (plata * 0.1 < rata){
            alert("Poštovani " + imeprezime + " na žalost ne ispunjavate uslove za dobijanje kredita!");
        }
        else {
            alert("Poštovani " + imeprezime + " - Čestitamo! Ispunjavate uslove za dobijanje kredita!");
        }

    }



    return (
        <div>
            <KreditKomponenta naslov={tekstNaslov} provera={proveriKlijenta}/>
        </div>
    )
}

export default KreditStrana;