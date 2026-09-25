function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact with me</h2>
      <p>If you'd like to work with me or have any questions, contact me here :</p>
      
      
      <div className="social-links">
        <a href="mailto:qusaianwer06@gmail.com" className="social-icon">
         <div className="card">Email</div>
        </a>

        <a 
          href="https://wa.me/962779527025" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon whatsapp"
        ><div className="card">Whatsapp</div>
         
        </a>

        <a 
          href="https://www.instagram.com/qusaialdaaja?stkn=MTV2Yjd2YnA5MHJ0dA==" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon instagram"
        ><div className="card">Instagram</div>
          
        </a>
      </div>
    </section>
  );
}

export default Contact;