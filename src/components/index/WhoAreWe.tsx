import prog from '../../assets/prog.gif'
import './index.css'

export default function WhoAreWe() {
    return (
        <div id="whoAreWe" className="indexPager whoWeAreBg">
            <hr></hr>
            <div className='d-flex flex-column justify-content-around text-start text-light align-items-center'>
                <h3 className='display-3 p-3'>
                    Наша команда состоит из профессиональных разработчиков, с большим опытом коммерческой работы.
                </h3>
                <h3 className='display-3 p-3'>
                    Мы мотивированны развивать наш продукт, делать мир чуточку лучше и изучать новое.
                </h3>
                <h3 className='display-3 p-3'>
                    Нас интересует командная игра, дружба и полезное времяпрепровождение в активном движении. 
                </h3>
                <div className='mt-5'>
                    <img className='img-fluid' src={prog}></img>
                </div>
            </div>
        </div>
    )
}