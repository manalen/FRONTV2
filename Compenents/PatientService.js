import axios from 'axios' 



class PatientService {

    
    hola() {
        return axios.get(`http://localhost:8087/medecin/AfficherToutPatient`);
    }
    bola(id ){
        
        return axios.get( ` http://localhost:8087/medecin/AfficherconsultationBypati/${id}`);
    }
    kola(id){
        return axios.get(`http://localhost:8087/medecin/afficherprescriptionpatient/${id}` );
    } 
    ola( kaman){
        
        return axios.get(`http://localhost:8087/medecin/AfficherPatientById/${kaman}`);

    }
    pola( consultation){
    return axios.post(`http://localhost:8087/medecin/creerconsultation`, consultation);}

}

export default new PatientService()
