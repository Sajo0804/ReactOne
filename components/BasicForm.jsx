import { useState } from "react";


//används för att skapa state-variabler för varje input
const BasicForm = () => {

    //skapa variabler för inputfält. State används för att spara/lagra
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    //hantera ändringar och uppdateringar av namn, email och ålder. Hantering för varje input
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit =(event) => {
        event.preventDefault();
        console.log('submitted:', name, email, age);
    };


      
    //renderar en forms med inputfält som lagrar användarens uppgifter/information och en submit-btn 
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Namn:
                <input
                type='text'
                value={name}
                onChange={handleNameChange}/>
            </label>
            <br/>
            <label>
                E-mail:
                <input
                type='email'
                value={email}
                onChange={handleEmailChange}/>
            </label>
            <br/>
            <label>
            Ålder:
                <input
                type="number"
                value={age}
                onChange={handleAgeChange}/>
            </label>
            <br />
            {/*submit-btn triggar handleSubmit-funktionen*/}
            <button type='submit'> Godkänn </button>
        </form>
    )
};

export default BasicForm;
