import './DisplayResultPage.css'
import GlowButton from '../GlowButton/GlowButton'

function DisplayResultPage() {
        return (
        <div className='result-container'>
            <section>
                {/*Shiny text komponent här */}
                <p>(/*Story innehåll här */)</p>
                <GlowButton
                    text="SAVE PERSONA TO GALLERY"
                    to="/generator"
                    className="btn-result-section"
                    >
                </GlowButton>
            </section>
            <section>
                {/*Shiny text komponent här */}
                {/*Dreamhosue innehåll här */}
                <GlowButton
                    text="SAVE DREAMHOUSE TO GALLERY"
                    to="/generator"
                    className="btn-result-section"
                    >
                </GlowButton>
            </section>
        </div>
    )
}

export default DisplayResultPage;
