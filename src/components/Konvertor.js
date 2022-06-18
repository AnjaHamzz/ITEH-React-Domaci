

function Konvertor(){




    return (
        <div>

            <h2 id="konv-head">Konvertor valuta</h2>

            <div id="konvertor-div">

                <input type="text"  className="form-control text-center knv-polja" placeholder="Valuta 1..." />

                <input type="text"  className="form-control text-center knv-polja" placeholder="Valuta 2..."/>

                <input type="text"  className="form-control text-center knv-polja" placeholder="Iznos..."/>


                <button className="btn btn-danger mt-3">Konvert</button>
 
            </div>


        </div>
    )
}

export default Konvertor;