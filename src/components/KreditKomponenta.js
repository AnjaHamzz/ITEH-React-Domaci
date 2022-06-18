import {useState} from 'react'

function KreditKomponenta(props){

    const [imeprezime, setImeprezime] = useState();
    const [zanimanje, setZanimanje] = useState();
    const [plata, setPlata] = useState();
    const [iznosKredita, setIznosKredita] = useState();
    const [brojRata, setBrojRata] = useState();

    function updateImePrezime(e){
        setImeprezime(e.target.value);
    }

    function updateZanimanje(e){
        setZanimanje(e.target.value);
    }

    function updatePlata(e){
        setPlata(e.target.value);
    }

    function updateIznosKredita(e){
        setIznosKredita(e.target.value);
    }

    function updateBrojRata(e){
        setBrojRata(e.target.value);
    }


    return (
        <div>
            <h1 className="mt-3 text-primary">{props.naslov}</h1>

            <div className="zahtev">

            <div className="zahtev-clan">
            <h6>Ime i prezime</h6>
            <input type="text" value={imeprezime} onChange={updateImePrezime}  className="form-control text-center"/>
            </div>

            <div className="zahtev-clan">
            <h6>Zanimanje</h6>
            <input type="text" value={zanimanje} onChange={updateZanimanje}  className="form-control text-center"/>
            </div>

            <div className="zahtev-clan">
            <h6>Plata</h6>
            <input type="text" value={plata} onChange={updatePlata}  className="form-control text-center"/>
            </div>

            <div className="zahtev-clan">
            <h6>Iznos kredita</h6>
            <input type="text" value={iznosKredita} onChange={updateIznosKredita}  className="form-control text-center"/>
            </div>

            <div className="zahtev-clan">
            <h6>Broj rata</h6>
            <input type="text" value={brojRata} onChange={updateBrojRata}  className="form-control text-center"/>
            </div>

            </div>

            <button className="btn btn-danger mt-3" onClick={() => props.provera(imeprezime, plata, iznosKredita/brojRata)}>Proveri</button>

        </div>
    )
}

export default KreditKomponenta;