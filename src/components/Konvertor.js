import {useState} from 'react'
import axios from 'axios'

function Konvertor(){

    const [valuta1, setValuta1] = useState();
    const [valuta2, setValuta2] = useState();
    const [iznos, setIznos] = useState();
    const [rezultat, setRezultat] = useState();

    function updateValuta1(e){
        setValuta1(e.target.value);
    }

    function updateValuta2(e){
        setValuta2(e.target.value);
    }

    function updateIznos(e){
        setIznos(e.target.value);
    }


    function konvertujValute(){

        const options = {
            method: 'GET',
            url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
            params: {from: valuta1, to: valuta2, amount: iznos},
            headers: {
              'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
              'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
            }
          };

        axios.request(options).then(function (response) {
            setRezultat(response.data.result.convertedAmount + " " + response.data.result.to)
        }).catch(function (error) {
            console.error(error);
        });

    }

    console.log(rezultat)

    return (
        <div>

            <h2 id="konv-head" className="text-primary">Konvertor</h2>

            <div id="konvertor-div">

                <input type="text" value={valuta1} onChange={updateValuta1}  className="form-control text-center knv-polja" placeholder="Valuta 1..." />

                <input type="text" value={valuta2} onChange={updateValuta2} className="form-control text-center knv-polja" placeholder="Valuta 2..."/>

                <input type="text" value={iznos} onChange={updateIznos}  className="form-control text-center knv-polja" placeholder="Iznos..."/>


                <button onClick={konvertujValute} className="btn btn-danger mt-3">Konvert</button>


                <h2 className="mt-3">{rezultat}</h2>
 
            </div>


        </div>
    )
}

export default Konvertor;