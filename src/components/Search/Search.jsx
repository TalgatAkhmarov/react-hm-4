import React, {useState} from 'react';
import data from '../Data/Data.jsx'
import Modal from '../Modal/Modal.jsx';
import './Search.css'
import Sea from '../../assets/Search.svg'




const Search = () => {
    const [filter, setFilter] = useState('')

    const searchText = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    const [modalActive, setModalActive] = useState(false)

    return(
        <section className='container'>
            <div className='search-block'>
                <div className='search-input'>
                    <button>
                        <img src={Sea} alt="search" />
                    </button>
                    <label className='search-label'></label>
                    <input
                            type="text"
                            placeholder='Search'
                            className='from-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                    />
                </div>
            </div>
            <div className='sector'>
                {dataSearch.map((item, index) => {
                    return(
                        <div className='data-card'>
                            <div className='card-products'>
                                <img src={item.img} className='card-item'  />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-desc'>{item.desc}</p>
                                    <button className='btn' onClick={() => setModalActive(true)}>More</button>
                                </div>
                             </div>
                        </div>
                    ) 
                })}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2 className='card-about'>About this hero</h2>
                <p className='card-modal'>a person admired for great deeds or fine qualities We study heroes of our nation's history. 2 : a person who shows great courage The firefighters were heroes. 3 : the chief male character in a story, play, or poem.</p> 
                <button className='btn2'>Close</button>
            </Modal>
        </section>
    )
}

export default Search