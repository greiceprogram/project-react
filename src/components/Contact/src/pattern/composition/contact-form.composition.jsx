import "../../../styles.css"

export default function Form() {
    return (

        <div className="contact-container">
    

        <div className="hero-text"> 
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome"/>
       </div>

       <div className="hero-email">
       <label htmlFor="nome">Email:</label>
        <input type="text" id="nome"/>
       </div>

        <form action="">

        <div className="hero-description">
        <label htmlFor="nome">Mensagem:</label>
        <textarea>Type your message...</textarea>
       </div>

        </form>

            <div className="hero-footer">
                <input type="Checkbox" />
                 <p>I accept the Terms</p>
            </div>


            <div className="button">
                <button className="button-box">Submit</button>
            </div>
        </div>
    )
}