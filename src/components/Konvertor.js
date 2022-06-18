import {useState} from 'react'

function Konvertor(){

    const [valuta1, setValuta1] = useState();
    const [valuta2, setValuta2] = useState();
    const [iznos, setIznos] = useState();

    function updateValuta1(e){
        setValuta1(e.target.value);
    }

    function updateValuta2(e){
        setValuta2(e.target.value);
    }

    function updateIznos(e){
        setIznos(e.target.value);
    }

    console.log(valuta1, valuta2, iznos)

    return (
        <div>

            <h2 id="konv-head">Konvertor valuta</h2>

            <div id="konvertor-div">

                <input type="text" onChange={updateValuta1}  className="form-control text-center knv-polja" placeholder="Valuta 1..." />

                <input type="text" onChange={updateValuta2} className="form-control text-center knv-polja" placeholder="Valuta 2..."/>

                <input type="text" onChange={updateIznos}  className="form-control text-center knv-polja" placeholder="Iznos..."/>


                <button className="btn btn-danger mt-3">Konvert</button>
 
            </div>


        </div>
    )
}

export default Konvertor;