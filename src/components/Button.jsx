
const Button = ({text, className, id}) => {
  return (
    <a 
     href="#counter"
     onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter')

        if (target && id) {
            const offset = window.innerHeight * 0.15;

            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({top, behavior: 'smooth'});
        }
     }}
    className={`${className ?? ''} cta-wrapper group`}>
        <div className="cta-button">
            <div className="bg-circle"></div>
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
 )
}

export default Button