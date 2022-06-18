import KreditKomponenta from "../components/KreditKomponenta";


function KreditStrana(){

    const tekstNaslov = "Proveri svoju kreditnu sposobnost!";

    return (
        <div>
            <KreditKomponenta naslov={tekstNaslov}/>
        </div>
    )
}

export default KreditStrana;